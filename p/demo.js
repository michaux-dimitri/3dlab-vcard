export default function DemoProfile() {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg,#050505,#151515)',
        fontFamily:
          '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        color: '#fff',
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
        }}
      >
        {/* Logo en haut */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <img
            src="/logo.png"
            alt="3DLab"
            style={{
              height: 32,
              objectFit: 'contain',
              opacity: 0.85,
            }}
          />
        </div>

        {/* Photo de profil (placeholder pour l'instant) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 30% 20%, #ffffff33, #222222)',
              border: '2px solid #A6FF00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 600,
              color: '#A6FF00',
            }}
          >
            D
          </div>
        </div>

        {/* Nom + métier */}
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <h1
            style={{
              fontSize: 22,
              margin: '0 0 4px',
              letterSpacing: '0.04em',
            }}
          >
            Dimitri Michaux
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Créateur 3DLab • Cartes NFC & impression 3D
          </p>
        </div>

        {/* Bouton : enregistrer le contact (fonctionnalité à venir) */}
        <button
          style={{
            width: '100%',
            padding: '11px 16px',
            borderRadius: 999,
            border: 'none',
            background: 'linear-gradient(90deg,#A6FF00,#65ff00)',
            color: '#050505',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            marginBottom: 14,
          }}
        >
          Enregistrer le contact dans le téléphone
        </button>

        {/* Infos de contact */}
        <div
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 12,
            padding: 14,
            border: '1px solid rgba(255,255,255,0.06)',
            marginBottom: 16,
            fontSize: 14,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <div style={{ opacity: 0.6, fontSize: 12 }}>Téléphone</div>
            <div>+33 6 12 34 56 78</div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <div style={{ opacity: 0.6, fontSize: 12 }}>E-mail</div>
            <div>contact@3dlab.fr</div>
          </div>
          <div>
            <div style={{ opacity: 0.6, fontSize: 12 }}>Ville</div>
            <div>Auxerre, France</div>
          </div>
        </div>

        {/* Boutons réseaux / actions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 10,
            fontSize: 13,
          }}
        >
          <button
            style={{
              padding: '9px 10px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.02)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Appeler
          </button>
          <button
            style={{
              padding: '9px 10px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.02)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            WhatsApp
          </button>
          <button
            style={{
              padding: '9px 10px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.02)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            LinkedIn
          </button>
          <button
            style={{
              padding: '9px 10px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.02)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Site web
          </button>
        </div>

        {/* Bas de page */}
        <div
          style={{
            marginTop: 8,
            fontSize: 11,
            opacity: 0.6,
            textAlign: 'center',
          }}
        >
          Profil de démonstration 3DLab • NFC
        </div>
      </div>
    </div>
  );
}
