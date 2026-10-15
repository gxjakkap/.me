import type { EntryFieldTypes, EntrySkeletonType } from "contentful"
import type { Static } from "elysia"
import type { GetStackModel, StackItem as StackItemModel } from "./models"

export interface TechStackSkeleton extends EntrySkeletonType {
	contentTypeId: "techStack"
	fields: {
		name: EntryFieldTypes.Symbol
		image: EntryFieldTypes.AssetLink
		imageDark?: EntryFieldTypes.AssetLink
		xp: EntryFieldTypes.Integer
	}
}

// The single entry that picks and orders the stacks shown on the home page.
export interface HomeSkillsSkeleton extends EntrySkeletonType {
	contentTypeId: "homeSkills"
	fields: {
		title: EntryFieldTypes.Symbol
		front?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechStackSkeleton>>
		back?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechStackSkeleton>>
		tools?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechStackSkeleton>>
	}
}

export type StackItem = Static<typeof StackItemModel>
export type GetStackServiceResponse = Static<typeof GetStackModel.response>
