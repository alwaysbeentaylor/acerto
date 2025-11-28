export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        textAlign: 'center'
      }}>
        <img
          width="1200"
          height="475"
          alt="GHBanner"
          src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6"
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        <h1 style={{ fontSize: '3rem', marginTop: '2rem' }}>
          Built with AI Studio
        </h1>

        <p style={{ fontSize: '1.5rem', color: '#666', marginTop: '1rem' }}>
          The fastest path from prompt to production with Gemini.
        </p>

        <a
          href="https://aistudio.google.com/apps"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            backgroundColor: '#4285f4',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontSize: '1.125rem',
            fontWeight: '500'
          }}
        >
          Start building
        </a>
      </div>
    </div>
  )
}
