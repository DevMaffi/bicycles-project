// Modules

// modules
import 'bootstrap'
import mixitup from 'mixitup'

import { handleForm, handleScroll, applyReveal } from '@modules'

// styles
import '@sass/styles'

// Setup handlers

handleForm()
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

// Scroll reveal

applyReveal()
