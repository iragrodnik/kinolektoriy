const plans = [
  { label: 'Один день', price: '1 000 ₽', description: '3 выступления · 3 часа' },
  { label: 'Два дня', price: '1 500 ₽', description: '6 выступлений · 6 часов', featured: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Стоимость участия</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.label} className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
              <p className="pricing-label">{plan.label}</p>
              <p className="pricing-price">{plan.price}</p>
              <p className="pricing-desc">{plan.description}</p>
            </div>
          ))}
        </div>
        <div className="pricing-cta">
          <a
            href="https://forms.yandex.ru/u/66c9d3bec417f34d68d53bdb/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Зарегистрироваться
          </a>
          <p className="pricing-note">
            Оплата участия:{' '}
            <a href="https://t.me/iragrodnik" target="_blank" rel="noopener noreferrer" className="link">
              @iragrodnik
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
