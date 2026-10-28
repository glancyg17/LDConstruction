(function(){
  var DATA = window.LD_DATA;
  var dlg = document.getElementById('lb'), img = document.getElementById('lb-img'),
      ttl = document.getElementById('lb-title'), cap = document.getElementById('lb-cap'),
      cnt = document.getElementById('lb-count');
  var cur = null, i = 0, opener = null;

  function show(){
    var p = DATA[cur], ph = p.photos[i];
    img.src = ph.src; img.alt = ph.cap;
    ttl.textContent = p.title; cap.textContent = ph.cap;
    cnt.textContent = (i+1) + ' of ' + p.photos.length;
    var n = p.photos[(i+1) % p.photos.length]; (new Image()).src = n.src;
  }
  function open(pid, idx, from){
    cur = pid; i = idx; opener = from; show();
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open','');
  }
  function step(d){ var n = DATA[cur].photos.length; i = (i + d + n) % n; show(); }

  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-project]');
    if (b) open(b.getAttribute('data-project'), parseInt(b.getAttribute('data-i'),10) || 0, b);
  });
  dlg.querySelector('.lb__x').addEventListener('click', function(){ dlg.close(); });
  dlg.querySelector('.lb__prev').addEventListener('click', function(){ step(-1); });
  dlg.querySelector('.lb__next').addEventListener('click', function(){ step(1); });
  dlg.addEventListener('click', function(e){ if (e.target === dlg || e.target.classList.contains('lb__stage')) dlg.close(); });
  dlg.addEventListener('close', function(){ if (opener) opener.focus(); });
  dlg.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  var sx = null;
  dlg.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; }, {passive:true});
  dlg.addEventListener('touchend', function(e){
    if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  });
})();
