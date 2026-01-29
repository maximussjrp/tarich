(() => {
  const $ = (s) => document.querySelector(s);

  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = ($("#nome")?.value || "").trim();
      const telefone = ($("#telefone")?.value || "").trim();
      const assunto = ($("#assunto")?.value || "").trim();
      const mensagem = ($("#mensagem")?.value || "").trim();

      if (!nome || !assunto || !mensagem) {
        alert("Por favor, preencha Nome, Assunto e Mensagem.");
        return;
      }

      const subject = encodeURIComponent(`Contato - Tarich Contabilidade | ${assunto}`);
      const body = encodeURIComponent(
        `Nome: ${nome}\n` +
        `Telefone/WhatsApp: ${telefone || "—"}\n\n` +
        `${mensagem}\n\n` +
        `Enviado pelo site.`
      );

      window.location.href = `mailto:tarichicontabilidade@terra.com.br?subject=${subject}&body=${body}`;
    });
  }
})();
