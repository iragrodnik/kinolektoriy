import { speakers } from '../data/speakers'

function SpeakerAvatar({ speaker }) {
  if (speaker.photoFile) {
    const src = `${import.meta.env.BASE_URL}images/${speaker.photoFile}`
    return <img src={src} alt={speaker.name} className="speaker-photo" />
  }

  const initials = speaker.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return <div className="speaker-avatar-placeholder">{initials}</div>
}

export default function Speakers() {
  return (
    <section id="speakers" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Спикеры</h2>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <SpeakerAvatar speaker={speaker} />
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-film">«{speaker.film}»</p>
              {speaker.credentials.length > 0 && (
                <ul className="speaker-credentials">
                  {speaker.credentials.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
              {(speaker.since || speaker.city) && (
                <p className="speaker-meta">
                  {speaker.since && `В профессии с ${speaker.since} года`}
                  {speaker.since && speaker.city && ' · '}
                  {speaker.city && `Очный приём: ${speaker.city}`}
                </p>
              )}
              {(speaker.contacts.phone || speaker.contacts.telegram || speaker.contacts.vk || speaker.contacts.site) && (
                <div className="speaker-contacts">
                  {speaker.contacts.phone && (
                    <a href={`tel:${speaker.contacts.phone.replace(/\D/g, '')}`}>
                      {speaker.contacts.phone}
                    </a>
                  )}
                  {speaker.contacts.telegram && (
                    <a href={speaker.contacts.telegram.url} target="_blank" rel="noopener noreferrer">
                      {speaker.contacts.telegram.label}
                    </a>
                  )}
                  {speaker.contacts.vk && (
                    <a href={speaker.contacts.vk.url} target="_blank" rel="noopener noreferrer">
                      {speaker.contacts.vk.label}
                    </a>
                  )}
                  {speaker.contacts.site && (
                    <a href={speaker.contacts.site.url} target="_blank" rel="noopener noreferrer">
                      {speaker.contacts.site.label}
                    </a>
                  )}
                  {speaker.contacts.email && (
                    <a href={`mailto:${speaker.contacts.email}`}>
                      {speaker.contacts.email}
                    </a>
                  )}
                </div>
              )}
              {speaker.filmDescription && (
                <div className="speaker-film-desc">
                  {(Array.isArray(speaker.filmDescription)
                    ? speaker.filmDescription
                    : [speaker.filmDescription]
                  ).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}