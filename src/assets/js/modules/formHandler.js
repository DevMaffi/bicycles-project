// Validation

function validate(formControl) {
  if (!formControl.value && !formControl.classList.contains('is-invalid')) {
    formControl.classList.add('is-invalid')

    const message = document.createElement('div')
    message.classList.add('invalid-feedback')
    message.innerText = `${formControl.getAttribute('data-label')} is required`

    formControl.parentNode.append(message)

    return false
  }

  if (formControl.value && formControl.classList.contains('is-invalid')) {
    formControl.classList.remove('is-invalid')
    formControl.parentNode.querySelector('.invalid-feedback').remove()

    return true
  }

  return true
}

function onInput(e) {
  validate(e.target)
}

function onSubmit(e) {
  let isValid = true

  e.target.querySelectorAll('.form-control').forEach(item => {
    if (!validate(item)) isValid = false
  })

  if (!isValid) e.preventDefault()
}

function handleForm() {
  const form = document.querySelector('#modal-form')
  form.addEventListener('submit', onSubmit)

  const formControls = form.querySelectorAll('.form-control')
  formControls.forEach(item => item.addEventListener('change', onInput))
}

export default handleForm
