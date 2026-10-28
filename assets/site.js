/* Load lazy images a little ahead of the scroll, the same way in every browser.
   Chrome already does this; Safari and Firefox wait until an image is nearly on screen, which shows as pop-in.
   Skipped when the visitor has Data Saver on. */
(function () {
  var imgs = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
  if (!imgs.length || !('IntersectionObserver' in window)) return;
  var c = navigator.connection || {};
  if (c.saveData) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.loading = 'eager'; io.unobserve(e.target); }
    });
  }, { rootMargin: '1200px 0px' });
  imgs.forEach(function (i) { io.observe(i); });
})();
