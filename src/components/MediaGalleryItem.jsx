'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const MediaSpinner = ({ size = 'md', label = 'Loading…', light = false }) => {
  const sizeClass = size === 'lg' ? 'h-12 w-12 border-[3px]' : 'h-10 w-10 border-2';
  return (
    <div
      className={`${sizeClass} animate-spin rounded-full ${
        light
          ? 'border-tof-indigo/15 border-t-tof-indigo'
          : 'border-white/20 border-t-orange-500'
      }`}
      role="status"
      aria-label={label}
    />
  );
};

const MediaGalleryItem = ({
  item,
  index,
  activeLoadIndex,
  onLoadComplete,
  onOpen,
  alt,
  spinnerLabel,
  light = false,
}) => {
  const [imageReady, setImageReady] = useState(false);
  const isQueued = index > activeLoadIndex;
  const isDone = index < activeLoadIndex;
  const showSpinner = isQueued || (!isDone && !imageReady);

  const handleLoad = () => {
    setImageReady(true);
    onLoadComplete(index);
  };

  const handleError = () => {
    setImageReady(true);
    onLoadComplete(index);
  };

  return (
    <button
      type="button"
      onClick={() => isDone && onOpen(item)}
      disabled={!isDone}
      className={`group relative aspect-[4/3] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-tof-indigo ${
        light
          ? 'border border-tof-indigo/10 bg-[#F3F3F5]'
          : 'rounded-2xl border border-white/10 bg-tof-surface shadow-md focus-visible:ring-tof-yellow'
      } ${isDone ? 'cursor-pointer' : 'cursor-wait'}`}
    >
      {showSpinner && (
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center ${
            light ? 'bg-[#F3F3F5]' : 'bg-tof-surface'
          }`}
        >
          <MediaSpinner label={spinnerLabel} light={light} />
        </div>
      )}

      {!isQueued && (
        <Image
          src={item.src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
          className={`object-cover transition-all duration-300 ${
            isDone ? 'group-hover:scale-105 opacity-100' : imageReady ? 'opacity-100' : 'opacity-0'
          }`}
          quality={85}
          onLoadingComplete={handleLoad}
          onError={handleError}
        />
      )}
    </button>
  );
};

export default MediaGalleryItem;
