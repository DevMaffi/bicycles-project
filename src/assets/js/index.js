// Modules

// modules
import 'bootstrap'
import mixitup from 'mixitup'

import { handleScroll } from '@modules'

// styles
import '@sass/styles'

// Setup handlers

handleScroll()

// Mixer init

mixitup('[data-products-container]', {
  selectors: {
    target: '[data-products-card-container]',
  },
  animation: {
    duration: 300,
  },
})
