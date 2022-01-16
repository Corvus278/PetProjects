(() => {
  const selector = document.querySelector('.form__input[type="tel"]')

  const im = new Inputmask("+7 (999)-999-99-99")
  im.mask(selector)
})()
