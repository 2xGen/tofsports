'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const getYouTubeId = (url) => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  // Fallback: maybe just the raw 11-char id was passed
  if (/^[\w-]{11}$/.test(url)) return url;
  return null;
};

const ProductVideo = ({ videoUrl, title, posterImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  const thumbnail = posterImage || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900 shadow-sm">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title ? `${title} — video` : 'Productvideo'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={title ? `Speel video van ${title} af` : 'Speel video af'}
        >
          <Image
            src={thumbnail}
            alt={title ? `${title} — videovoorbeeld` : 'Videovoorbeeld'}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 90vw, 640px"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <Play className="ml-1 h-7 w-7 fill-orange-500 text-orange-500 md:h-9 md:w-9" />
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Bekijk de video
          </span>
        </button>
      )}
    </div>
  );
};

export default ProductVideo;
