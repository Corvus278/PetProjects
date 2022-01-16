(() => {
  const validation = new JustValidate('.form')

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Имя не указано!'
      }
    ])
    .addField('#tel', [
      {
        validator: (name, value) => {
          const selector = document.querySelector('input[type="tel"]')

          const phone = selector.inputmask.unmaskedvalue()

          return Number(phone) && phone.length === 10
        },
        errorMessage: `Телефон должен содержать 10 символов`
      }
    ])
    .addField('#email', [
      {
        rule: 'email',
        errorMessage: 'Некорректный email!'
      }
    ])
})()
