import { env } from "@repo/env/api"
import type { Static } from "elysia"
import type { heavyRotationItem, listeningToData, topTracksData } from "./model"

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks"
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing"

type Result<T> = { data: T; error: null } | { data: null; error: string }

type Track = Static<typeof topTracksData>["items"][number]

interface NowPlayingData {
	is_playing: boolean
	item: {
		name: string
		external_urls: { spotify: string }
		artists?: { name: string }[]
		album?: { name: string; images: { url: string; width: number }[] }
	} | null
}

const joinArtists = (artists: { name: string }[] = []) => artists.map((a) => a.name).join(", ")

async function getAccessToken(): Promise<Result<string>> {
	const basic = btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`)

	try {
		const res = await fetch(TOKEN_ENDPOINT, {
			method: "POST",
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: env.SPOTIFY_REFRESH_TOKEN,
			}),
			headers: {
				Authorization: `Basic ${basic}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})

		if (res.status !== 200) {
			console.error("Spotify token error:", res.status, await res.text())
			return { data: null, error: `API Call Error: [${res.status}]` }
		}

		const json = (await res.json()) as { access_token?: string }
		if (!json.access_token) return { data: null, error: "API Error" }

		return { data: json.access_token, error: null }
	} catch (e) {
		console.error(e)
		return { data: null, error: "API Call Error" }
	}
}

async function spotifyGet<T>(url: string): Promise<Result<T | null>> {
	const token = await getAccessToken()
	if (token.error !== null) return { data: null, error: `Access token fetching error: ${token.error}` }

	let res: Response
	try {
		res = await fetch(url, { headers: { Authorization: `Bearer ${token.data}` } })
	} catch (e) {
		console.error(e)
		return { data: null, error: "Error while fetching from spotify api: [418] API Call Error" }
	}

	if (res.status === 204) return { data: null, error: null }

	// biome-ignore lint/suspicious/noExplicitAny: success or { error } body, narrowed by status below
	let json: any
	try {
		json = await res.json()
	} catch (e) {
		console.error(e)
		return { data: null, error: "Error while fetching from spotify api: [418] JSON Parsing Error" }
	}

	if (res.status !== 200) {
		return {
			data: null,
			error: `Error while fetching from spotify api: [${json?.error?.status ?? res.status}] ${json?.error?.message ?? ""}`,
		}
	}

	return { data: json as T, error: null }
}

export async function getHeavyRotation(): Promise<Result<Static<typeof heavyRotationItem>[]>> {
	const url = new URL(TOP_TRACKS_ENDPOINT)
	url.search = new URLSearchParams({ time_range: "short_term", limit: "15", offset: "0" }).toString()

	const res = await spotifyGet<{ items: Track[] }>(url.toString())
	if (res.error !== null) return res
	if (res.data === null) {
		return {
			data: null,
			error: "Error while fetching from spotify api: [204] No Content - User's currently not listening to anything",
		}
	}

	return {
		data: res.data.items.map((x) => ({
			artist: joinArtists(x.artists),
			name: x.name,
			uri: x.uri,
			link: x.external_urls.spotify,
			album: x.album.name,
			image_link: x.album.images.reduce((max, im) => (im.width > max.width ? im : max), x.album.images[0])?.url ?? "",
		})),
		error: null,
	}
}

export async function getListeningTo(): Promise<Result<Static<typeof listeningToData>>> {
	const res = await spotifyGet<NowPlayingData>(NOW_PLAYING_ENDPOINT)
	if (res.error !== null) return res

	const item = res.data?.item
	return {
		data: {
			album: item?.album?.name ?? "",
			album_image_url: item?.album?.images[0]?.url ?? "",
			artist: joinArtists(item?.artists),
			is_playing: res.data?.is_playing ?? false,
			song_url: item?.external_urls.spotify ?? "",
			title: item?.name ?? "",
		},
		error: null,
	}
}
