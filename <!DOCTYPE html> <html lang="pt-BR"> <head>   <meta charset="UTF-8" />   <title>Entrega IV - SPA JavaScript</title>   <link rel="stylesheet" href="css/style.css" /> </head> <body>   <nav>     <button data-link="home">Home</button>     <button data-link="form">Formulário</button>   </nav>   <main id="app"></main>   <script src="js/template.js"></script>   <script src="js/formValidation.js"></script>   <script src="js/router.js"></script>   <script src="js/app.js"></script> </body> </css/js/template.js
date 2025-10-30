export function renderTemplate(templateId, data) {
  const templates = {
    home: `<h1>Bem-vindo à SPA</h1><p>Conteúdo dinâmico aqui.</p>`,
    form: `
      <h1>Formulário de Contato</h1>
      <form id="contactForm" novalidate>
        <label>Nome: <input type="text" name="nome" required /></label>
        <label>Email: <input type="email" name="email" required /></label>
        <label>Mensagem: <textarea name="mensagem" required></textarea></label>
        <button type="submit">Enviar</button>
        <div class="form-errors"></div>
      </form>
    `
  };
  return templates[templateId] || `<p>Página não encontrada</p>`;
}
