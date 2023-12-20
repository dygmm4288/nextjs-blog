import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWorkFields {
  slug: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  websiteURL?: EntryFieldTypes.Symbol;
  stack: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  startTime?: EntryFieldTypes.Date;
  endTime?: EntryFieldTypes.Date;
  focus?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  githubURL: EntryFieldTypes.Symbol;
  projectImg?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  description: EntryFieldTypes.Text;
}

export type TypeWorkSkeleton = EntrySkeletonType<TypeWorkFields, "work">;
export type TypeWork<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeWorkSkeleton, Modifiers, Locales>;
