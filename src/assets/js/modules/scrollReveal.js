// Modules

import ScrollReveal from 'scrollreveal'

// Init scroll reveal

const sr = new ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

// Apply scroll reveal animation on DOM

function applyReveal() {
  // aboutus section
  sr.reveal('[data-aboutus-subtitle]')
  sr.reveal('[data-aboutus-title]', { delay: 500 })
  sr.reveal('[data-aboutus-price]', { delay: 600 })
  sr.reveal('[data-aboutus-text]', { delay: 800 })
  sr.reveal('[data-aboutus-carousel]', { delay: 900 })
  sr.reveal('[data-aboutus-button]', { delay: 1000 })

  // newsletter section
  sr.reveal('[data-newsletter-title]', {
    origin: window.matchMedia('(min-width: 576px)').matches ? 'left' : 'right',
  })
  sr.reveal('[data-newsletter-input-group]', { origin: 'right' })
  sr.reveal('[data-newsletter-input]', { origin: 'right', delay: 500 })
  sr.reveal('[data-newsletter-button]', { origin: 'right', delay: 700 })

  // products section
  sr.reveal('[data-products-filters]')
  sr.reveal('[data-products-card]', { delay: 500, interval: 300 })

  // ourteam section
  sr.reveal('[data-team-card]', { origin: 'bottom', interval: 300 })

  // questions section
  sr.reveal('[data-questions-accordion-item]', { interval: 100 })

  // footer section
  sr.reveal('[data-footer-section]', { interval: 300 })
}

// Exports

export default applyReveal
