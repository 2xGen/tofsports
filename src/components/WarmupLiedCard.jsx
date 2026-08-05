'use client';

import React from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

const WarmupLiedCard = ({ titleClassName = 'text-xl font-bold text-gray-900 md:text-2xl' }) => {
  const { t } = useLocale();

  return (
    <div>
      <h3 className={titleClassName}>{t('warmup.title')}</h3>
      <p className="mt-2 text-sm text-gray-600 md:text-base">{t('warmup.subtitle')}</p>
      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/track/308mknv2rdgHBls1LYhtzW?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={`TOF Sports — ${t('warmup.title')}`}
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default WarmupLiedCard;
