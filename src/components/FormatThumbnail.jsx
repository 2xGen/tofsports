'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FORMAT_THUMB_DISPLAY } from '@/lib/productImage';

/**
 * Small format preview — tries Supabase WebP thumb first, falls back to full image on error.
 */
const FormatThumbnail = ({ thumbnail, fallbackSrc, alt, priority = false }) => {
  const [src, setSrc] = useState(thumbnail || fallbackSrc);

  const handleError = () => {
    if (fallbackSrc && src !== fallbackSrc) {
      setSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={FORMAT_THUMB_DISPLAY}
      height={FORMAT_THUMB_DISPLAY}
      className="h-12 w-12 object-contain p-0.5"
      sizes={`${FORMAT_THUMB_DISPLAY}px`}
      quality={40}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      onError={handleError}
    />
  );
};

export default FormatThumbnail;
