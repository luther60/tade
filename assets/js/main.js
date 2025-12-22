(() => {
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];

  // Mobile nav
  const toggle = qs('.nav__toggle');
  const nav = qs('#nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if(!nav.classList.contains('is-open')) return;
      const inside = nav.contains(e.target) || toggle.contains(e.target);
      if(!inside){
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Header elevate on scroll
  const header = qs('[data-elevate]');
  if(header){
    const onScroll = () => header.classList.toggle('is-elevated', window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // Reveal animations
  const io = new IntersectionObserver((entries) => {
    for(const ent of entries){
      if(ent.isIntersecting) ent.target.classList.add('is-visible');
    }
  }, {threshold: 0.12});
  qsa('.reveal').forEach(el => io.observe(el));

  // Devis form helper: create a readable summary to paste/send
  const form = qs('[data-devis-form]');
  if(form){
    const out = qs('[data-devis-summary]');
    const btn = qs('[data-copy-summary]');
    const sync = () => {
      const data = new FormData(form);
      const lines = [];
      const pick = (k, label) => {
        const v = (data.get(k)||'').toString().trim();
        if(v) lines.push(`${label}: ${v}`);
      };
      pick('type_client', 'Type de client');
      pick('urgence', 'Urgence');
      pick('service', 'Besoin');
      pick('ville', 'Ville / secteur');
      pick('details', 'Détails');
      pick('nom', 'Nom');
      pick('tel', 'Téléphone');
      pick('email', 'Email');
      if(out) out.value = lines.join('\n');
    };
    form.addEventListener('input', sync);
    sync();

    if(btn && out){
      btn.addEventListener('click', async () => {
        try{
          await navigator.clipboard.writeText(out.value);
          btn.textContent = 'Copié';
          setTimeout(() => btn.textContent = 'Copier le résumé', 1100);
        }catch(e){
          btn.textContent = 'Impossible (navigateur)';
          setTimeout(() => btn.textContent = 'Copier le résumé', 1300);
        }
      });
    }
  }
})();
