const HERO_IMAGE = {
  src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/media%202.jpg',
  alt: 'Trainer en jeugd bij het TOF scorebord op de baan',
};

const HERO_LOGO_SRC =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20logo%20wit.svg';

const MaintenancePage = () => {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '4rem 1rem',
        textAlign: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65)), url(${HERO_IMAGE.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '48rem',
          margin: '0 auto',
          color: '#ffffff',
        }}
      >
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
          <span
            style={{
              position: 'absolute',
              bottom: '100%',
              right: 0,
              marginBottom: '0.375rem',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              transform: 'translateX(20%)',
            }}
          >
            Powered by KNLTB
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_LOGO_SRC}
            alt="TOF Sports"
            width={350}
            height={200}
            style={{ display: 'block', height: '6rem', width: 'auto', margin: '0 auto' }}
          />
        </div>

        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            margin: '0 0 1.25rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          Er komt binnenkort iets moois!
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            margin: 0,
            textShadow: '0 1px 4px rgba(0,0,0,0.45)',
          }}
        >
          We werken aan een nieuwe en verbeterde website die je nog beter helpt plezier in
          ontwikkelen te creëren.
        </p>
      </div>
    </section>
  );
};

export default MaintenancePage;
