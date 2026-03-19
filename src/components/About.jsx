const benefits = [
  'Разбор фильмов и терапевтических подходов через визуальный материал',
  'Обмен опытом с коллегами и расширение профессионального кругозора',
  'Пополнение арсенала инструментов через кино и визуальные образы',
  'Возможность размышлять в безопасной атмосфере и в кругу коллег',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">О формате</h2>
        <p className="about-lead">
          Кино — инструмент, которым пользуются многие психологи. Через него можно
          делиться опытом, расширять горизонты и слышать мнение Другого. Мы предлагаем
          просмотреть шесть фильмов о семье, выбранных экспертами, и разобрать их
          вместе — онлайн, в живом диалоге.
        </p>
        <ul className="benefits-list">
          {benefits.map((text, i) => (
            <li key={i} className="benefit-item">
              <span className="benefit-dot" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
