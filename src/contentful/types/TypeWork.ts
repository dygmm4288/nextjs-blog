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
  startTime?: EntryFieldTypes.Date;
  endTime?: EntryFieldTypes.Date;
  githubURL: EntryFieldTypes.Symbol;
  projectImg?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  description: EntryFieldTypes.Text;
  participants: EntryFieldTypes.Text;
}

export type TypeWorkSkeleton = EntrySkeletonType<TypeWorkFields, "work">;
export type TypeWork<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeWorkSkeleton, Modifiers, Locales>;
