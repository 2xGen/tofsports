'use client';

import React from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

const WarmupLiedCard = ({
  titleClassName = 'text-xl font-bold text-white md:text-2xl',
  subtitleClassName = 'mt-2 text-sm text-white/70 md:text-base',
}) => {
  const { t } = useLocale();

  return (
    <div>
      <h3 className={titleClassName}>{t('warmup.title')}</h3>
      <p className={subtitleClassName}>{t('warmup.subtitle')}</p>
      <div className="mt-6 overflow-hidden md:mt-8">
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
