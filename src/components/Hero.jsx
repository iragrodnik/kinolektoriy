export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-blobs" aria-hidden="true">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
      </div>
      <div className="hero-inner">
        <p className="hero-eyebrow">Психологический кинолекторий</p>
        <h1 className="hero-title">Семья на экране<br />и в жизни</h1>
        <p className="hero-meta">6 спикеров · 6 фильмов · 4–5 апреля 2026</p>
        <p className="hero-format">Онлайн · с 12:00 до 15:00</p>
        <a
          href="https://forms.yandex.ru/u/66c9d3bec417f34d68d53bdb/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Зарегистрироваться
        </a>
      </div>
    </section>
  )
}
