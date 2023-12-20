import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePostFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    thumbnailLocal?: EntryFieldTypes.Symbol;
    thumbnail?: EntryFieldTypes.AssetLink;
    createdAt?: EntryFieldTypes.Date;
    description?: EntryFieldTypes.Symbol;
    relatedPost?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    content?: EntryFieldTypes.Text;
    references?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;
