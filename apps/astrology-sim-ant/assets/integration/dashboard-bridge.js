/** Shared local-first dashboard bridge. No uploads, telemetry, or automatic external requests. */
export const DASHBOARD_BRIDGE_VERSION = '1.0.0';
export const WORKBENCH_STORAGE_KEY = 'resonance.dashboard.workbench-url.v1';
const mounted = new WeakMap();
const snapshots = new Map();
const safePath = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !/[?%\\\u0000-\u001f\u007f]/.test(value) && !value.split(/[/?#]/).some(p => p === '..' || p === '.') && !/calendar|chart/i.test(value);
export function validateWorkbenchUrl(input) {
  if (typeof input !== 'string' || input.length > 2048 || /[\u0000-\u0020\u007f\\]/.test(input)) throw Error('Enter an HTTP(S) workbench URL without spaces, credentials, query strings or fragments.');
  if (input.split(/[/?#]/).some(p => p === '..' || p === '.')) throw Error('Workbench paths cannot traverse directories.');
  let url; try { url = new URL(input); } catch { throw Error('Enter a complete HTTP(S) workbench URL.'); }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || /%2e|%2f|%5c/i.test(input)) throw Error('Use HTTP(S), without credentials, query strings, fragments or encoded path separators.');
  if (url.pathname.split('/').some(p => p === '..' || p === '.')) throw Error('Workbench paths cannot traverse directories.');
  url.pathname = url.pathname.replace(/\/+$/, '') + '/';
  return url.href;
}
export function readWorkbenchSetting(storage) { try { const value = storage?.getItem(WORKBENCH_STORAGE_KEY); return value ? { url: validateWorkbenchUrl(value), issue: null } : { url: null, issue: null }; } catch { return { url: null, issue: 'The saved workbench URL could not be read. You can enter it for this panel.' }; } }
export function validateDashboardRelease(raw) {
  if (!raw || raw.schema !== 'resonance-dashboard-release/v1' || !Array.isArray(raw.projects) || raw.projects.length !== 9 || !Array.isArray(raw.links) || raw.links.length > 16 || typeof raw.generatedAt !== 'string' || !Number.isFinite(Date.parse(raw.generatedAt))) throw Error('The workbench release snapshot is unavailable or unsupported.');
  const ids = new Set();
  for (const p of raw.projects) { if (!p || typeof p.id !== 'string' || ids.has(p.id) || typeof p.title !== 'string' || !safePath(p.path)) throw Error('The release project routes are invalid.'); ids.add(p.id); if (p.id === 'astrology-sim-ant' && p.path !== '/apps/astrology-sim-ant/pages/sigil-studio.html') throw Error('Only the Sigil Studio adapter is included.'); }
  for (const l of raw.links) if (!l || typeof l.label !== 'string' || !safePath(l.path)) throw Error('The release library routes are invalid.');
  if (!raw.counts || Object.values(raw.counts).some(n => !Number.isInteger(n) || n < 0 || n > 100000)) throw Error('The release counts are invalid.');
  return raw;
}
export function clearDashboardReleaseCache() { snapshots.clear(); }
export async function loadDashboardRelease(base, fetcher = fetch) {
  const url = new URL('data/dashboard-release.json', validateWorkbenchUrl(base)).href;
  if (snapshots.has(url)) return snapshots.get(url);
  const promise = (async () => { const response = await fetcher(url, { credentials: 'omit', cache: 'no-cache', redirect: 'error' }); if (!response.ok) throw Error('The current release snapshot is unavailable.'); const text = await response.text(); if (text.length > 200000) throw Error('The release snapshot exceeds its size bound.'); return validateDashboardRelease(JSON.parse(text)); })();
  snapshots.set(url, promise); try { return await promise; } catch (error) { snapshots.delete(url); throw error; }
}
const css = `:host{display:block;color-scheme:light;--bg:#f7f5ed;--ink:#233c32;--line:#c8d0bf;--accent:#315b42;--soft:#e9eddf;--muted:#596659;font:15px/1.55 system-ui,sans-serif}:host([data-tone=dark]){color-scheme:dark;--bg:#17221f;--ink:#edf1df;--line:#4e6055;--accent:#c1d8a9;--soft:#25372e;--muted:#bac5b9}*{box-sizing:border-box}.bridge{color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:0 18px;margin:16px 0;max-width:100%;overflow-wrap:anywhere}summary{min-height:52px;display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:650;list-style:none}summary::before{content:'+';font:22px Georgia,serif;color:var(--accent)}details[open]>summary::before{content:'−'}h2{font:26px/1.15 Georgia,serif;margin:10px 0}p{margin:10px 0}.eyebrow{font:11px/1.4 ui-monospace,monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}.muted{font-size:13px;color:var(--muted)}.links,.projects{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}a,button{min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:10px 13px;border:1px solid var(--line);border-radius:4px;color:var(--accent);background:var(--bg);font:inherit;text-decoration:none;cursor:pointer}a.primary{background:var(--accent);color:var(--bg);border-color:var(--accent)}a:hover,button:hover{outline:1px solid var(--accent)}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid #b67f22;outline-offset:3px}label{display:block;font-weight:600}input{display:block;width:100%;min-height:44px;margin:8px 0;padding:10px;border:1px solid var(--line);border-radius:4px;background:var(--bg);color:var(--ink);font:inherit}.settings{border-top:1px solid var(--line);margin-top:16px;padding:8px 0 16px}.status{padding:12px;background:var(--soft);border-left:3px solid var(--accent)}.projects a{font-size:13px}.content{padding-bottom:18px}.form-actions{display:flex;flex-wrap:wrap;gap:8px}@media(max-width:480px){.bridge{padding:0 13px}.links a{width:100%}h2{font-size:24px}}`;
function element(tag, text, attrs = {}) { const node = document.createElement(tag); if (text !== undefined) node.textContent = text; for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v); return node; }
function settingStorage() { try { return localStorage; } catch { return null; } }
export function resolveManagedWorkbenchBase({ pathname, origin, repository, workbenchRoot, moduleUrl = import.meta.url }) { const marker = pathname.indexOf('/apps/'); if (marker >= 0) return origin + pathname.slice(0, marker) + '/'; return workbenchRoot === 'true' && repository === 'resonance-lab' ? new URL('../', moduleUrl).href : null; }
function managedBase(section) { return resolveManagedWorkbenchBase({ pathname: location.pathname, origin: location.origin, repository: section.dataset.repository, workbenchRoot: section.dataset.workbenchRoot }); }
export function dashboardConnectionCopy(managed) { return managed ? { summary: 'Standalone URL preference', submit: 'Save standalone URL', hint: 'Managed dashboards use this workbench. This preference applies only to standalone checkouts.' } : { summary: 'Set workbench URL', submit: 'Use this URL', hint: 'HTTP(S) only. No credentials, query strings or fragments. Saved only in this browser.' }; }
function navigateEvent(event, url) { if (event.button !== undefined && event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; window.dispatchEvent(new CustomEvent('resonance:before-workbench-navigation', { detail: { url }, cancelable: false })); }
export function mountDashboardBridge(section) {
  if (!section || section.nodeType !== 1) return null;
  if (mounted.has(section)) return mounted.get(section);
  const shadow = section.shadowRoot || section.attachShadow({ mode: 'open' });
  const style = element('style', css), details = element('details'), summary = element('summary', 'Connected research workbench'), content = element('div', undefined, { class: 'content' });
  details.append(summary, content); const frame = element('div', undefined, { class: 'bridge' }); frame.append(details); shadow.replaceChildren(style, frame);
  const state = { section, shadow, details, content, configured: readWorkbenchSetting(settingStorage()), sessionUrl: null, loaded: false, disposed: false, renderId: 0 };
  const api = { refresh: async () => { state.loaded = false; clearDashboardReleaseCache(); await render(state); }, open: () => { details.open = true; }, destroy: () => { state.disposed = true; mounted.delete(section); shadow.replaceChildren(); } };
  mounted.set(section, api);
  details.addEventListener('toggle', () => { if (details.open && !state.loaded) void render(state); });
  return api;
}
export async function refreshDashboardBridge(section) { return mounted.get(section)?.refresh(); }
async function render(state) {
  if (state.disposed) return;
  const renderId = ++state.renderId;
  const { section, content } = state; state.loaded = true; content.replaceChildren();
  content.append(element('p', 'Shared library · source-bound documentation', { class: 'eyebrow' }), element('h2', 'Connect the work. Keep the evidence.'), element('p', 'Follow diagrams, definitions, setup plans and proposed parts across this research group.'));
  const managed = managedBase(section), base = managed || state.sessionUrl || state.configured.url;
  const note = element('p', '', { class: 'status', role: 'status' });content.append(note);
  const links = element('nav', undefined, { class: 'links', 'aria-label': 'Workbench documents' });content.append(links);
  const addLink = (parent, label, route, primary = false) => { if (!safePath(route)) return; const href = new URL(route.replace(/^\//, ''), base).href; const a = element('a', label, { href, ...(primary ? { class: 'primary' } : {}) }); a.addEventListener('click', e => navigateEvent(e, href)); parent.append(a); };
  if (base) { addLink(links, 'Open shared workbench', '/', true); addLink(links, 'Diagram & experiment library', '/patent-library/index.html'); }
  if (managed) {
    note.textContent = 'Loading the dated release snapshot…';
    try { const release = await loadDashboardRelease(base); if (state.disposed || renderId !== state.renderId) return; note.textContent = `${release.counts.blueprints} blueprint dossiers · ${release.counts.diagrams} A4 diagrams · ${release.counts.worksheets} experiment worksheets. Release snapshot: ${new Date(release.generatedAt).toISOString().slice(0, 10)}.`;
      for (const item of release.links) if (item.label !== 'Diagram & experiment library' || item.path !== '/patent-library/index.html') addLink(links, item.label, item.path);
      const refresh = element('button', 'Refresh dated snapshot', { type: 'button' }); refresh.addEventListener('click', () => mounted.get(section)?.refresh()); content.append(refresh);
      content.append(element('p', release.evidenceBoundary, { class: 'muted' }));
      const projects = element('nav', undefined, { class: 'projects', 'aria-label': 'Nine connected projects' });content.append(element('h2', 'Connected projects'), projects);for (const p of release.projects) addLink(projects, p.title, p.path);
    } catch { note.textContent = 'The release snapshot is unavailable. Open the shared library for its dated contents; no live repository or hardware status is inferred.'; }
  } else note.textContent = base ? 'This URL was set on this device. Open the workbench for its current dated library; no external service was contacted by this panel.' : 'Set the workbench URL to connect this standalone checkout. No published address is assumed and no external request has been made.';
  if (state.configured.issue) content.append(element('p', state.configured.issue, { class: 'muted' }));
  const connectionCopy = dashboardConnectionCopy(Boolean(managed));
  const settings = element('details', undefined, { class: 'settings' }); settings.append(element('summary', connectionCopy.summary));
  const form = element('form'), label = element('label', 'Workbench base URL'), input = element('input', undefined, { type: 'url', placeholder: 'http://localhost:4173/', autocomplete: 'off', 'aria-label': 'Workbench base URL' });input.value = state.sessionUrl || state.configured.url || '';label.append(input);form.append(label, element('p', connectionCopy.hint, { class: 'muted' }));
  const actions = element('div', undefined, { class: 'form-actions' });const save = element('button', connectionCopy.submit, { type: 'submit' }), clear = element('button', 'Clear saved URL', { type: 'button' });actions.append(save, clear);form.append(actions);const message = element('p', '', { role: 'status', class: 'muted' });form.append(message);
  form.addEventListener('submit', event => { event.preventDefault(); try { const url = validateWorkbenchUrl(input.value);state.sessionUrl = url;const storage = settingStorage();try { if (!storage) throw Error();storage.setItem(WORKBENCH_STORAGE_KEY, url);state.configured = { url, issue: null }; } catch { state.configured = { url: null, issue: managed ? 'Storage is unavailable. The standalone preference was not saved.' : 'Storage is unavailable. This URL works for the current panel only.' }; }void render(state); } catch (error) { message.textContent = error.message; } });
  clear.addEventListener('click', () => { try { settingStorage()?.removeItem(WORKBENCH_STORAGE_KEY);state.configured = { url: null, issue: null };state.sessionUrl = null;void render(state); } catch { message.textContent = 'The saved URL could not be removed from browser storage.'; } });
  settings.append(form);content.append(settings);
}
export function autoMountDashboardBridges(root = document) { const nodes = [];if (root.matches?.('[data-resonance-dashboard]')) nodes.push(root);if (root.querySelectorAll) nodes.push(...root.querySelectorAll('[data-resonance-dashboard]'));for (const node of nodes) mountDashboardBridge(node);return nodes.length; }
if (typeof document !== 'undefined') { const start = () => { autoMountDashboardBridges(); new MutationObserver(records => { for (const record of records) for (const node of record.addedNodes) if (node.nodeType === 1) autoMountDashboardBridges(node); }).observe(document.documentElement, { childList: true, subtree: true }); }; if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });else start(); }
