import { Clock } from 'lucide-react'
import { days } from '../data/schedule'
import { speakers } from '../data/speakers'

function speakerById(id) {
  return speakers.find((s) => s.id === id)
}

export default function Schedule() {
  return (
    <section id="schedule" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Расписание</h2>
        <div className="schedule-grid">
          {days.map((day, di) => (
            <div key={di} className="schedule-day">
              <h3 className="schedule-day-title">{day.date}</h3>
              {day.gatherTime && (
                <p className="schedule-gather">
                  {day.gatherTime} — сбор участников и вступительное слово
                </p>
              )}
              <ul className="schedule-slots">
                {day.slots.map((slot, si) => {
                  const speaker = speakerById(slot.speakerId)
                  return (
                    <li key={si} className="schedule-slot">
                      <span className="slot-time">
                        <Clock size={12} className="slot-icon" />
                        {slot.time}
                      </span>
                      <div className="slot-info">
                        <span className="slot-speaker">{speaker.name}</span>
                        <span className="slot-film">«{speaker.film}»</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
