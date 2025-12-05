export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(180deg,#050505,#151515)'
    }}>
      <div style={{
        maxWidth: 420,
        width: '90%',
        background: '#0b0b0b',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 18px 45px rgba(0,0,0,0.45)',
        border: '1px solid rgba(255,255,255,0.05)',
        color: '#ffffff',
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, \"SF Pro Text\", sans-serif',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: 16 }}>
          <img
           <img
  src="https://raw.githubusercontent.com/michaux-dimitri/3dlab-vcard/main/public/logo-color.png"
  alt="3DLab"
  style={{ height: 52, objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(166,255,0,0.35))' }}
/>
            alt="3DLab"
            style={{ height: 52, objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(166,255,0,0.35))' }}
          />
        </div>

        <h1 style={{
          fontSize: 20,
          margin: '0 0 8px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#A6FF00'
        }}>
          Cartes connectées NFC
        </h1>

        <p style={{
          margin: '0 0 20px',
          fontSize: 14,
          lineHeight: 1.5,
          color: '#d0d4da'
        }}>
          Plateforme 3DLab pour cartes NFC : une fiche de contact moderne, la même expérience sur iPhone et Android,
          et des profils que vos clients peuvent mettre à jour eux-mêmes.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 16
        }}>
          <button
            style={{
              padding: '11px 16px',
              borderRadius: 999,
              border: 'none',
              background: 'linear-gradient(90deg,#A6FF00,#66d100)',
              color: '#050505',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >
            Scanner une carte NFC 3DLab
          </button>

          <button
            style={{
              padding: '10px 16px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent',
              color: '#e5e7eb',
              fontSize: 13,
              cursor: 'default'
            }}
          >
            Interface d’édition des contacts — en cours d’installation
          </button>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 11,
          color: '#9ea7ad'
        }}>
          <span>3DLab · Auxerre</span>
          <span>v1 · prototype</span>
        </div>
      </div>
    </div>
  );
}
