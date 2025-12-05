export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg,#050505,#151515)'
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: '90%',
          background: '#0b0b0b',
          borderRadius: 16,
          padding: 24,
          boxShadow: '0 10px 45px rgba(0,0,0,0.45)',
          border: '1px solid rgba(255,255,255,0.05)',
          color: '#ffffff',
          fontFamily:
            '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          textAlign: 'center'
        }}
      >
        {/* --- LOGO --- */}
        <div style={{ marginBottom: 16 }}>
          <img
            src="/logo-color.png"
            alt="3DLab"
            style={{
              height: 52,
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(166,255,0,0.35))'
            }}
          />
        </div>

        {/* --- TITRE --- */}
        <h1
          style={{
            fontSize: 20,
            margin: '0 0 8px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#A6FF00'
          }}
        >
          Cartes connectées NFC
        </h1>

        {/* --- DESCRIPTION --- */}
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            opacity: 0.9,
            marginBottom: 24
          }}
        >
          Plateforme 3DLab pour cartes NFC : une fiche de contact moderne,
          la même expérience sur iPhone et Android, et des profils que vos
          clients peuvent mettre à jour eux-mêmes.
        </p>

        {/* --- BOUTON NFC --- */}
        <button
          style={{
            padding: '11px 16px',
            borderRadius: 999,
            border: 'none',
            background: 'linear-gradient(90deg,#A6FF00,#65ff00)',
            color: '#050505',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Scanner une carte NFC 3DLab
        </button>

        {/* --- BOUTON EDITION CONTACT (désactivé) --- */}
        <button
          style={{
            marginTop: 12,
            padding: '10px 16px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'transparent',
            color: '#e5e5e7b',
            fontSize: 13,
            cursor: 'default',
            width: '100%'
          }}
        >
          Interface d’édition des contacts — en cours d'installation
        </button>

        {/* --- FOOTER --- */}
        <div
          style={{
            marginTop: 22,
            fontSize: 11,
            opacity: 0.6,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span>3DLab • Auxerre</span>
          <span>v1 • prototype</span>
        </div>
      </div>
    </div>
  );
}
