import { useState, useEffect } from 'react'

const accents = [
  { key: 'rose',        color: '#be123c', label: 'Rose (default)' },
  { key: 'violet',      color: '#7c3aed', label: 'Violet' },
  { key: 'indigo',      color: '#4338ca', label: 'Indigo' },
  { key: 'cerulean',    color: '#0369a1', label: 'Cerulean' },
  { key: 'teal',        color: '#0f766e', label: 'Teal' },
  { key: 'sage',        color: '#4d7c0f', label: 'Sage' },
  { key: 'amber',       color: '#b45309', label: 'Amber' },
  { key: 'terracotta',  color: '#c0674b', label: 'Terracotta' },
  { key: 'plum',        color: '#86198f', label: 'Plum' },
  { key: 'deep-pink',   color: '#be185d', label: 'Deep Pink' },
  { key: 'dusty-rose',  color: '#c08080', label: 'Dusty Rose' },
  { key: 'mauve',       color: '#9b7fa6', label: 'Mauve' },
  { key: 'lavender',    color: '#7b6fa6', label: 'Lavender' },
  { key: 'periwinkle',  color: '#6b7db3', label: 'Periwinkle' },
  { key: 'powder-blue', color: '#5b8fa8', label: 'Powder Blue' },
  { key: 'sage-mist',   color: '#6d9b7e', label: 'Sage Mist' },
  { key: 'warm-sand',   color: '#a8956a', label: 'Warm Sand' },
  { key: 'peach',       color: '#c4805a', label: 'Peach' },
  { key: 'blush',       color: '#c47a9a', label: 'Blush' },
  { key: 'slate-blue',  color: '#607a9b', label: 'Slate Blue' },
]

const systemPrefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(systemPrefersDark)
  const [manualOverride, setManualOverride] = useState(false)
  const [accent, setAccent] = useState('rose')

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!manualOverride) setDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [manualOverride])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const root = document.documentElement
    if (accent === 'rose')
      root.removeAttribute('data-accent')
    else
      root.setAttribute('data-accent', accent)
  }, [accent])

  return (
    <div className="theme-switcher">
      {open && (
        <div className="theme-switcher-panel">
          <span className="theme-switcher-label">Акцентный цвет</span>
          <div className="theme-switcher-swatches">
            {accents.map((a) => (
              <button
                key={a.key}
                className={`theme-swatch${accent === a.key ? ' active' : ''}`}
                style={{ background: a.color }}
                title={a.label}
                onClick={() => setAccent(a.key)}
              />
            ))}
          </div>
          <button className="theme-dark-toggle" onClick={() => { setManualOverride(true); setDark((v) => !v) }}>
            {dark ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
          </button>
        </div>
      )}
      <button
        className="theme-toggle-btn"
        title="Сменить тему"
        onClick={() => setOpen((v) => !v)}
      >
        🎨
      </button>
    </div>
  )
}
