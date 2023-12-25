import { Asset, AssetLink } from "contentful";

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink },
): ContentImage | null {
  if (!asset || !("fields" in asset)) return null;

  return {
    src: parseImgSrc(asset.fields.file?.url) || "",
    alt: asset.fields.description || "",
    width: asset.fields.file?.details?.image?.width || 0,
    height: asset.fields.file?.details?.image?.height || 0,
  };
}


function parseImgSrc(src:string | undefined) {
  if(!src) return null;
  if(src.startsWith('//')) return `https:${src}`;
}