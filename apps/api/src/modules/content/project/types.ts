import type { EntryFieldTypes, EntrySkeletonType } from "contentful"
import type { Static } from "elysia"
import type { GetProjectListModel, GetProjectModel, ProjectItem as ProjectItemModel, ProjectStackItem } from "./models"

export interface ProjectSkeleton extends EntrySkeletonType {
	contentTypeId: "projects"
	fields: {
		title: EntryFieldTypes.Symbol
		slug: EntryFieldTypes.Symbol
		description: EntryFieldTypes.Text
		thumbnail: EntryFieldTypes.Symbol
		githubLink?: EntryFieldTypes.Symbol
		projectLink?: EntryFieldTypes.Symbol
		tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
		content: EntryFieldTypes.RichText
		stack?: EntryFieldTypes.Object<Static<typeof ProjectStackItem>[]>
	}
}

export type ProjectItem = Static<typeof ProjectItemModel>

export type GetProjectListServiceParams = Static<typeof GetProjectListModel.query>
export type GetProjectListServiceResponse = Static<typeof GetProjectListModel.response>
export type GetProjectServiceResponse = Static<typeof GetProjectModel.response>
