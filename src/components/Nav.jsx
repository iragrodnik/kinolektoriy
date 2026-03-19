import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#about',    label: 'О формате' },
  { href: '#schedule', label: 'Расписание' },
  { href: '#speakers', label: 'Спикеры' },
  { href: '#pricing',  label: 'Стоимость', cta: true },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">Кинолекторий</a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={item.cta ? 'nav-cta' : ''}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-burger"
          aria-label="Открыть меню"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={`nav-mobile${isOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={item.cta ? 'nav-cta' : ''}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
