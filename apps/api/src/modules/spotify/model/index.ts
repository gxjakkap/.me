import { t } from "elysia"

export { topTracksData } from "./toptracks"

export const listeningToData = t.Object({
	album: t.String(),
	album_image_url: t.String(),
	artist: t.String(),
	is_playing: t.Boolean(),
	song_url: t.String(),
	title: t.String(),
})

export const heavyRotationItem = t.Object({
	artist: t.String(),
	name: t.String(),
	uri: t.String(),
	link: t.String(),
	album: t.String(),
	image_link: t.String(),
})

export const getListeningToModel = {
	response: t.Object({
		data: listeningToData,
		error: t.Null(),
	}),
}

export const getHeavyRotation = {
	response: t.Object({
		data: t.Object({ items: t.Array(heavyRotationItem) }),
		error: t.Null(),
	}),
}
