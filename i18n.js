/* Listão — i18n do site (PT base, ES, EN)
   "Listão" (marca) nunca é traduzido.
   Uso: <element data-i18n="chave">texto</element>  →  o JS troca pelo idioma ativo. */
(function () {
  "use strict";

  var I18N = {
    pt: {
      // header
      "nav.recursos": "Recursos",
      "nav.instalar": "Como instalar",
      "nav.perguntas": "Perguntas",
      "nav.baixar": "Baixar grátis",
      // hero
      "hero.title": 'Sua lista de compras, <span class="verde">simples assim</span>',
      "hero.lead": "Grátis, offline e sem cadastro. Monte a lista, controle o gasto e compartilhe por um link no WhatsApp — quem toca, abre.",
      "hero.btn_download": "⬇ Baixar grátis (Android)",
      "hero.btn_share": "📤 Compartilhar",
      "hero.btn_instalar": "Como instalar",
      "hero.meta": "v1.5 · ~18 MB · APK direto · atualizado hoje",
      "hero.badge1": "✓ Compartilha por link",
      "hero.badge2": "✓ Dados no seu aparelho",
      "hero.badge3": "✓ Sem cadastro",
      // features
      "feat1.title": "Organize e compartilhe",
      "feat1.desc": "Categorias com cor e emoji pra cada cantinho da lista. E na hora de dividir as compras, a lista viaja dentro de um link do WhatsApp — quem toca, abre.",
      "feat2.title": "Gasto sob controle",
      "feat2.desc": "Preço, quantidade e total em tempo real. Defina um orçamento e acompanhe nos gráficos pra onde o dinheiro foi.",
      "feat3.title": "Nunca esqueça o que já comprou",
      "feat3.desc": "Cada compra finalizada vira histórico. Veja o que comprou, quando e por quanto — ótimo pra comparar preços entre idas.",
      "feat4.title": "Feche a compra com um toque",
      "feat4.desc": "No fim das compras, finalize: o que você marcou vira uma compra salva no histórico, com o total certinho.",
      "feat.btn": "Ver como funciona",
      // steps
      "steps.title": "Pronto em 3 passos",
      "steps.sub": "Sem loja, sem conta, sem complicação.",
      "step1.title": "1 · Baixe o arquivo",
      "step1.desc": "Toque no botão e o APK baixa direto no aparelho.",
      "step2.title": "2 · Instale o arquivo",
      "step2.desc": "Toque no arquivo baixado e confirme. Pronto.",
      "step3.title": "3 · Abra o Listão",
      "step3.desc": "Crie sua primeira lista e nunca mais esqueça o que faltou.",
      // price
      "price.title": "Grátis de verdade",
      "price.sub": "Sem pegadinha: a lista nunca vai ficar atrás de paywall.",
      "price.val": "R$ 0",
      "price.period": "/ para sempre",
      "price.item1": "Listas e itens ilimitados",
      "price.item2": "Compartilhamento por link e arquivo",
      "price.item3": "Histórico de compras e gastos",
      "price.item4": "Backup em arquivo .json",
      "price.item5": "Tema claro e escuro",
      "price.btn": "⬇ Baixar grátis (Android)",
      "price.pix": "Gostou? <b>Apoie com Pix ☕</b> — botão nos Ajustes do app.",
      "price.soon": "Em breve: sincronização entre aparelhos e listas compartilhadas editáveis.",
      // final cta
      "final.title": "Baixe o Listão hoje",
      "final.desc": "Sua próxima ida ao mercado, mais barata e sem esquecer nada.",
      "final.btn": "⬇ Baixar grátis (APK)",
      "final.share": "📤 Compartilhar o Listão",
      "final.whats": "No computador? Envie o link pro seu WhatsApp",
      "final.qr_alt": "QR Code para baixar o Listão",
      // quotes
      "quotes.title": "Quem já usa",
      "quote1.text": "“Acabou a briga do ‘você não avisou que faltava’ — agora a lista fica igual pros dois.”",
      "quote1.meta": "compartilha a lista com o marido",
      "quote2.text": "“Uso no mercado com o celular sem sinal. Simples e rápido, do jeito que eu precisava.”",
      "quote2.meta": "faz as compras da família",
      // models
      "models.title": "Modelos de lista prontos e guias",
      "models.sub": "Comece com uma lista pronta — toque e ela abre direto no app.",
      "models.feira": "🥕 Lista da feira",
      "models.churrasco": "🥩 Lista de churrasco",
      "models.mes": "🛒 Lista do mês",
      "models.whats": "📲 Compartilhar no WhatsApp",
      // faq
      "faq.title": "Perguntas frequentes",
      "faq1.q": "Por que não está na Play Store?",
      "faq1.a": "Por enquanto distribuímos direto: fica mais leve, sem intermediário e com atualização no mesmo link. A ideia é entrar na Play quando o app amadurecer.",
      "faq2.q": "É seguro? O celular mostrou um aviso",
      "faq2.a": "O aviso aparece para qualquer app instalado de fora da loja. O APK é assinado, pede só permissão de internet e seus dados ficam no seu aparelho.",
      "faq3.q": "Funciona no iPhone?",
      "faq3.a": "Ainda não. Hoje o Listão é Android — o link compartilhado abre uma página com a lista pra quem tem iPhone.",
      "faq4.q": "Como atualizo depois?",
      "faq4.a": "Baixe de novo neste mesmo link e instale por cima. Suas listas e o histórico ficam intactos.",
      // feedback
      "fb.title": "Fale com a gente",
      "fb.sub": "Sugestão, elogio ou bug? Conta pra gente — a gente lê tudo.",
      "fb.name": "Seu nome",
      "fb.name_ph": "Como podemos te chamar?",
      "fb.email": "Seu e-mail (pra gente responder)",
      "fb.email_ph": "voce@email.com",
      "fb.msg": "O que você achou do app?",
      "fb.msg_ph": "Conta tudo: o que amou, o que travou, o que faltou...",
      "fb.send": "Enviar feedback",
      "fb.alt": "Prefere e-mail direto?",
      // footer
      "foot.desc": "A lista de compras que mora no seu bolso — e divide com quem você vive.",
      "foot.produto": "Produto",
      "foot.baixar": "Baixar o app",
      "foot.recursos": "Recursos",
      "foot.modelos": "Modelos de lista",
      "foot.guia": "Guia do WhatsApp",
      "foot.ajuda": "Ajuda",
      "foot.instalar": "Como instalar",
      "foot.perguntas": "Perguntas",
      "foot.contato": "Contato",
      "foot.sobre_t": "Sobre",
      "foot.sobre": "Sobre o Listão",
      "foot.privacidade": "Privacidade",
      "foot.pix": "Apoie com Pix",
      "foot.copy": "© 2026 Listão · feito no Brasil · v1.5"
    },

    es: {
      "nav.recursos": "Funciones",
      "nav.instalar": "Cómo instalar",
      "nav.perguntas": "Preguntas",
      "nav.baixar": "Descargar gratis",
      "hero.title": 'Tu lista de la compra, <span class="verde">así de simple</span>',
      "hero.lead": "Gratis, sin conexión y sin registro. Arma la lista, controla el gasto y comparte por un enlace de WhatsApp — quien lo toca, la abre.",
      "hero.btn_download": "⬇ Descargar gratis (Android)",
      "hero.btn_share": "📤 Compartir",
      "hero.btn_instalar": "Cómo instalar",
      "hero.meta": "v1.5 · ~18 MB · APK directo · actualizado hoy",
      "hero.badge1": "✓ Comparte por enlace",
      "hero.badge2": "✓ Datos en tu aparato",
      "hero.badge3": "✓ Sin registro",
      "feat1.title": "Organiza y comparte",
      "feat1.desc": "Categorías con color y emoji para cada rincón de la lista. Y a la hora de dividir las compras, la lista viaja dentro de un enlace de WhatsApp — quien lo toca, la abre.",
      "feat2.title": "Gasto bajo control",
      "feat2.desc": "Precio, cantidad y total en tiempo real. Define un presupuesto y sigue en los gráficos a dónde se fue el dinero.",
      "feat3.title": "Nunca olvides lo que ya compraste",
      "feat3.desc": "Cada compra finalizada pasa al historial. Mira qué compraste, cuándo y por cuánto — ideal para comparar precios entre visitas.",
      "feat4.title": "Cierra la compra con un toque",
      "feat4.desc": "Al terminar las compras, finaliza: lo que marcaste pasa al historial como una compra, con el total correcto.",
      "feat.btn": "Ver cómo funciona",
      "steps.title": "Listo en 3 pasos",
      "steps.sub": "Sin tienda, sin cuenta, sin complicación.",
      "step1.title": "1 · Descarga el archivo",
      "step1.desc": "Toca el botón y el APK baja directo al aparato.",
      "step2.title": "2 · Instala el archivo",
      "step2.desc": "Toca el archivo descargado y confirma. Listo.",
      "step3.title": "3 · Abre Listão",
      "step3.desc": "Crea tu primera lista y no vuelvas a olvidar lo que faltaba.",
      "price.title": "Gratis de verdad",
      "price.sub": "Sin trampa: la lista nunca va a quedar tras un paywall.",
      "price.val": "R$ 0",
      "price.period": "/ para siempre",
      "price.item1": "Listas y productos ilimitados",
      "price.item2": "Compartir por enlace y archivo",
      "price.item3": "Historial de compras y gastos",
      "price.item4": "Copia de seguridad en .json",
      "price.item5": "Tema claro y oscuro",
      "price.btn": "⬇ Descargar gratis (Android)",
      "price.pix": "¿Te gustó? <b>Apoya con Pix ☕</b> — botón en los Ajustes de la app.",
      "price.soon": "Pronto: sincronización entre aparatos y listas compartidas editables.",
      "final.title": "Descarga Listão hoy",
      "final.desc": "Tu próxima visita al mercado, más barata y sin olvidar nada.",
      "final.btn": "⬇ Descargar gratis (APK)",
      "final.share": "📤 Compartir Listão",
      "final.whats": "¿En la computadora? Envíate el enlace por WhatsApp",
      "final.qr_alt": "Código QR para descargar Listão",
      "quotes.title": "Quien ya lo usa",
      "quote1.text": "“Se acabó la pelea del ‘no avisaste que faltaba’ — ahora la lista queda igual para los dos.”",
      "quote1.meta": "comparte la lista con el marido",
      "quote2.text": "“Lo uso en el mercado con el móvil sin señal. Simple y rápido, como lo necesitaba.”",
      "quote2.meta": "hace las compras de la familia",
      "models.title": "Plantillas de lista y guías",
      "models.sub": "Empieza con una lista lista — toca y se abre directo en la app.",
      "models.feira": "🥕 Lista de la feria",
      "models.churrasco": "🥩 Lista de asado",
      "models.mes": "🛒 Lista del mes",
      "models.whats": "📲 Compartir por WhatsApp",
      "faq.title": "Preguntas frecuentes",
      "faq1.q": "¿Por qué no está en Play Store?",
      "faq1.a": "Por ahora distribuimos directo: es más liviano, sin intermediarios y con actualización en el mismo enlace. La idea es entrar en Play cuando la app madure.",
      "faq2.q": "¿Es seguro? El móvil mostró un aviso",
      "faq2.a": "El aviso aparece para cualquier app instalada fuera de la tienda. El APK está firmado, pide solo permiso de internet y tus datos quedan en tu aparato.",
      "faq3.q": "¿Funciona en iPhone?",
      "faq3.a": "Todavía no. Hoy Listão es Android — el enlace compartido abre una página con la lista para quien tiene iPhone.",
      "faq4.q": "¿Cómo actualizo después?",
      "faq4.a": "Descarga de nuevo en este mismo enlace e instala encima. Tus listas y el historial quedan intactos.",
      "fb.title": "Habla con nosotros",
      "fb.sub": "¿Sugerencia, elogio o bug? Cuéntanos — leemos todo.",
      "fb.name": "Tu nombre",
      "fb.name_ph": "¿Cómo podemos llamarte?",
      "fb.email": "Tu e-mail (para responderte)",
      "fb.email_ph": "tu@email.com",
      "fb.msg": "¿Qué te pareció la app?",
      "fb.msg_ph": "Cuenta todo: qué amaste, qué se trabó, qué faltó...",
      "fb.send": "Enviar feedback",
      "fb.alt": "¿Prefieres e-mail directo?",
      "foot.desc": "La lista de la compra que vive en tu bolsillo — y se comparte con quien vives.",
      "foot.produto": "Producto",
      "foot.baixar": "Descargar la app",
      "foot.recursos": "Funciones",
      "foot.modelos": "Plantillas de lista",
      "foot.guia": "Guía de WhatsApp",
      "foot.ajuda": "Ayuda",
      "foot.instalar": "Cómo instalar",
      "foot.perguntas": "Preguntas",
      "foot.contato": "Contacto",
      "foot.sobre_t": "Acerca",
      "foot.sobre": "Acerca de Listão",
      "foot.privacidade": "Privacidad",
      "foot.pix": "Apoya con Pix",
      "foot.copy": "© 2026 Listão · hecho en Brasil · v1.5"
    },

    en: {
      "nav.recursos": "Features",
      "nav.instalar": "How to install",
      "nav.perguntas": "FAQ",
      "nav.baixar": "Download free",
      "hero.title": 'Your shopping list, <span class="verde">that simple</span>',
      "hero.lead": "Free, offline and no signup. Build the list, track spending and share via a WhatsApp link — tap and it opens.",
      "hero.btn_download": "⬇ Download free (Android)",
      "hero.btn_share": "📤 Share",
      "hero.btn_instalar": "How to install",
      "hero.meta": "v1.5 · ~18 MB · direct APK · updated today",
      "hero.badge1": "✓ Share via link",
      "hero.badge2": "✓ Data stays on your device",
      "hero.badge3": "✓ No signup",
      "feat1.title": "Organize and share",
      "feat1.desc": "Categories with color and emoji for every corner of the list. When it is time to split the shopping, the list travels inside a WhatsApp link — tap and it opens.",
      "feat2.title": "Spending under control",
      "feat2.desc": "Price, quantity and total in real time. Set a budget and follow the charts to see where the money went.",
      "feat3.title": "Never forget what you already bought",
      "feat3.desc": "Every finished purchase becomes history. See what you bought, when and for how much — great to compare prices between trips.",
      "feat4.title": "Close the purchase with one tap",
      "feat4.desc": "At the end of shopping, finish: what you checked becomes a saved purchase in history, with the right total.",
      "feat.btn": "See how it works",
      "steps.title": "Ready in 3 steps",
      "steps.sub": "No store, no account, no hassle.",
      "step1.title": "1 · Download the file",
      "step1.desc": "Tap the button and the APK downloads straight to your device.",
      "step2.title": "2 · Install the file",
      "step2.desc": "Tap the downloaded file and confirm. Done.",
      "step3.title": "3 · Open Listão",
      "step3.desc": "Create your first list and never forget what was missing again.",
      "price.title": "Truly free",
      "price.sub": "No catch: the list will never sit behind a paywall.",
      "price.val": "R$ 0",
      "price.period": "/ forever",
      "price.item1": "Unlimited lists and items",
      "price.item2": "Sharing via link and file",
      "price.item3": "Purchase and spending history",
      "price.item4": "Backup to .json file",
      "price.item5": "Light and dark theme",
      "price.btn": "⬇ Download free (Android)",
      "price.pix": "Liked it? <b>Support with Pix ☕</b> — button in the app Settings.",
      "price.soon": "Coming soon: sync between devices and editable shared lists.",
      "final.title": "Download Listão today",
      "final.desc": "Your next trip to the market, cheaper and forgetting nothing.",
      "final.btn": "⬇ Download free (APK)",
      "final.share": "📤 Share Listão",
      "final.whats": "On the computer? Send the link to your WhatsApp",
      "final.qr_alt": "QR code to download Listão",
      "quotes.title": "Who already uses it",
      "quote1.text": "“The ‘you didn’t tell me we were out’ fight is over — now the list is the same for both of us.”",
      "quote1.meta": "shares the list with her husband",
      "quote2.text": "“I use it at the market with no signal on my phone. Simple and fast, just what I needed.”",
      "quote2.meta": "does the family shopping",
      "models.title": "Ready-made list templates and guides",
      "models.sub": "Start with a ready list — tap and it opens right in the app.",
      "models.feira": "🥕 Farmers market list",
      "models.churrasco": "🥩 BBQ list",
      "models.mes": "🛒 Monthly list",
      "models.whats": "📲 Share on WhatsApp",
      "faq.title": "Frequently asked questions",
      "faq1.q": "Why is it not on the Play Store?",
      "faq1.a": "For now we distribute directly: it is lighter, no middleman, and updates land on the same link. The plan is to hit the Play Store when the app matures.",
      "faq2.q": "Is it safe? My phone showed a warning",
      "faq2.a": "The warning shows up for any app installed outside the store. The APK is signed, asks only for internet permission and your data stays on your device.",
      "faq3.q": "Does it work on iPhone?",
      "faq3.a": "Not yet. Today Listão is Android — the shared link opens a page with the list for iPhone users.",
      "faq4.q": "How do I update later?",
      "faq4.a": "Download again from this same link and install on top. Your lists and history stay intact.",
      "fb.title": "Talk to us",
      "fb.sub": "Suggestion, praise or bug? Tell us — we read everything.",
      "fb.name": "Your name",
      "fb.name_ph": "What should we call you?",
      "fb.email": "Your e-mail (so we can reply)",
      "fb.email_ph": "you@email.com",
      "fb.msg": "What did you think of the app?",
      "fb.msg_ph": "Tell us everything: what you loved, what broke, what was missing...",
      "fb.send": "Send feedback",
      "fb.alt": "Prefer direct e-mail?",
      "foot.desc": "The shopping list that lives in your pocket — and shares with whoever you live with.",
      "foot.produto": "Product",
      "foot.baixar": "Download the app",
      "foot.recursos": "Features",
      "foot.modelos": "List templates",
      "foot.guia": "WhatsApp guide",
      "foot.ajuda": "Help",
      "foot.instalar": "How to install",
      "foot.perguntas": "FAQ",
      "foot.contato": "Contact",
      "foot.sobre_t": "About",
      "foot.sobre": "About Listão",
      "foot.privacidade": "Privacy",
      "foot.pix": "Support with Pix",
      "foot.copy": "© 2026 Listão · made in Brazil · v1.5"
    }
  };

  // ---- idioma ativo: localStorage > navegador > pt ----
  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem("listao-lang"); } catch (e) {}
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || "pt").toLowerCase();
    if (nav.indexOf("es") === 0) return "es";
    if (nav.indexOf("en") === 0) return "en";
    return "pt";
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = "pt";
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("listao-lang", lang); } catch (e) {}
  }

  // ---- API global ----
  window.ListaoI18N = {
    apply: applyLang,
    detect: detectLang,
    langs: Object.keys(I18N)
  };

  // aplica na carga
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectLang());
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
  });
})();
