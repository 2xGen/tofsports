'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const MediaSpinner = ({ size = 'md' }) => {
  const sizeClass = size === 'lg' ? 'h-12 w-12 border-[3px]' : 'h-10 w-10 border-2';
  return (
    <div
      className={`${sizeClass} animate-spin rounded-full border-gray-300 border-t-orange-500`}
      role="status"
      aria-label="Afbeelding laden"
    />
  );
};

const MediaGalleryItem = ({
  item,
  index,
  activeLoadIndex,
  onLoadComplete,
  onOpen,
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
      className={`group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
        isDone ? 'cursor-pointer' : 'cursor-wait'
      }`}
    >
      {showSpinner && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200">
          <MediaSpinner />
        </div>
      )}

      {!isQueued && (
        <Image
          src={item.src}
          alt={item.alt}
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
