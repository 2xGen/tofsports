/** Display size for format thumbnails in pakketten / lists */
export const FORMAT_THUMB_DISPLAY = 48;

/** Request size from CDN (slightly larger for retina) */
export const FORMAT_THUMB_REQUEST = 96;

/**
 * Small WebP thumbnail via Supabase image transforms (much faster than full PNG).
 * Falls back to original URL for non-Supabase sources.
 */
export function getProductThumbnailSrc(src, size = FORMAT_THUMB_REQUEST) {
  if (!src || typeof src !== 'string') return src;

  const objectPath = '/storage/v1/object/public/';
  const idx = src.indexOf(objectPath);
  if (idx === -1) return src;

  const origin = src.slice(0, idx);
  const path = src.slice(idx + objectPath.length);

  const params = new URLSearchParams({
    width: String(size),
    height: String(size),
    resize: 'contain',
    quality: '55',
    format: 'webp',
  });

  return `${origin}/storage/v1/render/image/public/${path}?${params.toString()}`;
}
