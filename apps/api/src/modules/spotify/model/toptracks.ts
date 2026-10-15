import { t } from "elysia"

const externalUrls = t.Object({
	spotify: t.String(),
})

const image = t.Object({
	url: t.String(),
	height: t.Integer(),
	width: t.Integer(),
})

const simplifiedArtist = t.Object({
	external_urls: externalUrls,
	href: t.String(),
	id: t.String(),
	name: t.String(),
	type: t.String(),
	uri: t.String(),
})

const album = t.Object({
	album_type: t.String(),
	total_tracks: t.Integer(),
	available_markets: t.Array(t.String()),
	external_urls: externalUrls,
	href: t.String(),
	id: t.String(),
	images: t.Array(image),
	name: t.String(),
	release_date: t.String(),
	release_date_precision: t.String(),
	type: t.String(),
	uri: t.String(),
	artists: t.Array(simplifiedArtist),
})

const track = t.Object({
	album: album,
	artists: t.Array(simplifiedArtist),
	available_markets: t.Array(t.String()),
	disc_number: t.Integer(),
	duration_ms: t.Integer(),
	explicit: t.Boolean(),
	external_ids: t.Object({
		isrc: t.String(),
	}),
	external_urls: externalUrls,
	href: t.String(),
	id: t.String(),
	name: t.String(),
	popularity: t.Integer(),
	preview_url: t.Nullable(t.String()),
	track_number: t.Integer(),
	type: t.String(),
	uri: t.String(),
	is_local: t.Boolean(),
})

export const topTracksData = t.Object({
	href: t.String(),
	limit: t.Integer(),
	next: t.Nullable(t.String()),
	offset: t.Integer(),
	previous: t.Nullable(t.String()),
	total: t.Integer(),
	items: t.Array(track),
})
