'use client';

import React from 'react';

const WarmupLiedCard = ({ titleClassName = 'text-xl font-bold text-gray-900 md:text-2xl' }) => (
  <div>
    <h3 className={titleClassName}>Tof Lied</h3>
    <p className="mt-2 text-sm text-gray-600 md:text-base">
      Zet het TOF lied aan voor een energieke start van je training.
    </p>
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
      <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/track/308mknv2rdgHBls1LYhtzW?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title="TOF Sports — Tof Lied"
        style={{ border: 0 }}
      />
    </div>
  </div>
);

export default WarmupLiedCard;
