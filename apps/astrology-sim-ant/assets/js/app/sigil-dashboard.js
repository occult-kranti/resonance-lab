/** Sigil-only explanatory UI. No drawing, profile, observer, recipe or calendar state is read. */
const panel = document.querySelector('[data-resonance-dashboard][data-repository="astrology-sim-ant"]');
const appearance = () => { if (panel) panel.dataset.tone = document.documentElement.dataset.uiTheme === 'midnight' ? 'dark' : 'light'; };
appearance();
new MutationObserver(appearance).observe(document.documentElement, { attributes: true, attributeFilter: ['data-ui-theme'] });
const input = document.getElementById('sg-term-search');
const status = document.getElementById('sg-term-status');
const terms = [...document.querySelectorAll('[data-sigil-term]')];
input?.addEventListener('input', () => {
  const query = input.value.trim().toLocaleLowerCase(); let visible = 0;
  for (const term of terms) { term.hidden = !term.textContent.toLocaleLowerCase().includes(query); if (!term.hidden) visible++; }
  if (status) status.textContent = `${visible} matching drawing terms. Your drawing and recipe are unchanged.`;
});
