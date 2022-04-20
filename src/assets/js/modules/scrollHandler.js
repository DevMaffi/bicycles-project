// Handle scroll-up module representation

// this refers to window
function showScrollUp() {
  const scrollUp = document.querySelector('#scroll-up')

  // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) return scrollUp.classList.add('show-scroll')

  return scrollUp.classList.remove('show-scroll')
}

// Add event handlers on window

function handleScroll() {
  window.addEventListener('scroll', showScrollUp)
}

export default handleScroll
