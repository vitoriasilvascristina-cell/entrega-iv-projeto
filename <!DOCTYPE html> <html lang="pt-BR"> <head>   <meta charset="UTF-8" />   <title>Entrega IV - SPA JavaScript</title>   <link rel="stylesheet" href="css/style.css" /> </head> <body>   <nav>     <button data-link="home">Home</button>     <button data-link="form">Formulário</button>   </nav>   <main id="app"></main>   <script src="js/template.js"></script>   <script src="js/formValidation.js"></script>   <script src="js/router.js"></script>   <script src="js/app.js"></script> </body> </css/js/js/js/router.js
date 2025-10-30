import { renderTemplate } from './template.js';
import { setupFormValidation } from './formValidation.js';

const app = document.getElementById('app');

export function navigateTo(page) {
  app.innerHTML = renderTemplate(page);

  if (page === 'form') {
    setupFormValidation();
  }
}

export function setupRouter() {
  document.body.addEventListener('click', e => {
    if (e.target.matches('button[data-link]')) {
      const page = e.target.getAttribute('data-link');
      navigateTo(page);
    }
  });

  // Página inicial
  navigateTo('home');
}
