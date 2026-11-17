/* Preserve split source files and execute dependencies in order on static hosts. */
(async function () {
  try {
    for (const name of ['cymatics_engine.js', 'studio.js']) {
      const source = await BOOT.bootText('assets/' + name);
      const script = document.createElement('script');
      script.textContent = source + '\n//# sourceURL=assets/' + name;
      document.body.append(script);
    }
    document.dispatchEvent(new Event('studio-ready'));
  } catch (error) {
    const panel = document.getElementById('decoded');
    panel.textContent = 'The model could not load. Source records and the integrated workbench remain available.';
    console.error('Studio source loading failed:', error);
  }
})();
