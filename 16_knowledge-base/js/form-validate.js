(() => {
  const validation = new JustValidate('.form',
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        marginLeft: '20px',
        marginBottom: '5px',
        color: 'var(--accent-color)',
        fontWeight: 400,
        fontSize: '12px',
      },
    })

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      }
    ])
    .addField('#tel', [
      {
        validator: (name, value) => {
          const selector = document.querySelector('input[type="tel"]')

          const phone = selector.inputmask.unmaskedvalue()

          return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: `Укажите ваш телефон`
      }
    ])
    .addField('#email', [
      {
        rule: 'email',
        errorMessage: 'Укажите ваш e-mail'
      }
    ])
})()
