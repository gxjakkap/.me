import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful"
import type { Static } from "elysia"
import type { BlogPostItem as BlogPostItemModel, GetBlogPostModel } from "./models"

export interface BlogPostSkeleton extends EntrySkeletonType {
	contentTypeId: "blogPost"
	fields: {
		name: EntryFieldTypes.Symbol
		slug: EntryFieldTypes.Symbol
		description: EntryFieldTypes.Text
		date: EntryFieldTypes.Date
		tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
		content: EntryFieldTypes.RichText
		thumbnailAsset?: EntryFieldTypes.AssetLink
	}
}

export type BlogPostEntry = Entry<BlogPostSkeleton, undefined, string>
export type BlogPostItem = Static<typeof BlogPostItemModel>

export interface GetBlogPostListServiceParams {
	page?: number
	limit?: number
}

export interface GetBlogPostListServiceResponse {
	page: number
	totalPages: number
	items: BlogPostItem[]
}

export type GetBlogPostServiceResponse = Static<typeof GetBlogPostModel.response>
