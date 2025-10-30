export function validateForm(formElement) {
  const errors = [];
  const nome = formElement.nome.value.trim();
  const email = formElement.email.value.trim();
  const mensagem = formElement.mensagem.value.trim();
  
  if (!nome) errors.push("Nome é obrigatório.");
  if (!email || !email.includes('@')) errors.push("Email válido é obrigatório.");
  if (!mensagem) errors.push("Mensagem não pode ser vazia.");
  
  return errors;
}

export function setupFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const errorsDiv = form.querySelector('.form-errors');

  form.addEventListener('submit', event => {
    event.preventDefault();
    errorsDiv.textContent = '';
    const errors = validateForm(form);
    if (errors.length) {
      errorsDiv.innerHTML = errors.map(e => `<p class="error">${e}</p>`).join('');
    } else {
      errorsDiv.innerHTML = "<p class='success'>Formulário enviado com sucesso!</p>";
      form.reset();
    }
  });
}
