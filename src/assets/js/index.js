// Modules

// modules
import 'bootstrap'
import mixitup from 'mixitup'

// styles
import '@sass/styles'

// Mixer init

mixitup('[data-products-container]', {
  selectors: {
    target: '[data-products-card-container]',
  },
  animation: {
    duration: 300,
  },
})
