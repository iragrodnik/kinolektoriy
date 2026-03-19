import { useEffect } from 'react'

const accentKeys = [
  'rose', 'violet', 'indigo', 'cerulean', 'teal', 'sage', 'amber',
  'terracotta', 'plum', 'deep-pink', 'dusty-rose', 'mauve', 'lavender',
  'periwinkle', 'powder-blue', 'sage-mist', 'warm-sand', 'peach', 'blush', 'slate-blue',
]

const randomAccent = () => accentKeys[Math.floor(Math.random() * accentKeys.length)]

const systemPrefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

export default function ThemeSwitcher() {
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', randomAccent())
  }, [])

  useEffect(() => {
    const applyTheme = (dark) =>
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')

    applyTheme(systemPrefersDark())

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => applyTheme(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return null
}
