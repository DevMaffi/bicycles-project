// Modules

import routes from './routes.js'

// Entries

const { pages } = routes

const entries = pages.reduce((entries, page) => {
  entries[page] = ['@babel/polyfill', `./assets/js/${page}.js`]
  return entries
}, {})

// Exports

export default entries
