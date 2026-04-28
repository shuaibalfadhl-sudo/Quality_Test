import '../styles/globals.css'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [mode])

  return (
    <>
      <button
        aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        style={{
          position: 'fixed',
          top: 18,
          right: 18,
          zIndex: 1000,
          background: 'var(--card)',
          color: 'var(--text)',
          border: '1px solid var(--muted)',
          borderRadius: 24,
          padding: '0.5rem 1.1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)'
        }}
      >
        {mode === 'light' ? '🌞 Light' : '🌙 Dark'}
      </button>
      <Component {...pageProps} />
    </>
  )
}
