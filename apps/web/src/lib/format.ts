export const formatTags = (tags: string[]) => tags.map((tag) => `#${tag.split(" ").join("_").toLowerCase()}`).join(" ")

export const localeDateString = (date: string) =>
	new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
