/* Listao analytics v1 — sem dependencias. Envia eventos p/ Supabase (tabela site_events).
   Para QA local sem poluir dados reais, abra a pagina com ?notrack */
(function () {
  if (/notrack/.test(location.search)) return;
  var SB_URL = 'https://ejzaphuabrqscrytfpcd.supabase.co';
  var KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqemFwaHVhYnJxc2NyeXRmcGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwMzc0MDcsImV4ZXAiOjIxMDc2MTM0MDd9.uXNj7kpcB0sTwsHsg8z-uJVko_hzlXLT4pmZCUJ0MbA';
  var PAGE = location.pathname.replace(/\/index\.html$/, '/') || '/';
  var sid = null;
  try {
    sid = localStorage.getItem('listao_sid');
    if (!sid) { sid = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()); localStorage.setItem('listao_sid', sid); }
  } catch (e) { sid = 'sessao-' + Date.now(); }
  function device() { var ua = navigator.userAgent; if (/iPhone|iPad|iPod/i.test(ua)) return 'iphone'; if (/Android/i.test(ua)) return 'android'; return 'desktop'; }
  var META = { tz: '', lang: '', device: device(), sw: '' };
  try { META.tz = (Intl.DateTimeFormat().resolvedOptions() || {}).timeZone || ''; } catch (e) {}
  try { META.lang = (navigator.language || '').slice(0, 5); } catch (e) {}
  try { META.sw = screen.width + 'x' + screen.height; } catch (e) {}
  function bot() { return /bot|crawl|spider|facebookexternalhit|WhatsApp|twitter|preview|monitor/i.test(navigator.userAgent); }
  function readQ() { try { return JSON.parse(localStorage.getItem('listao_q') || '[]'); } catch (e) { return []; } }
  function saveQ(q) { try { localStorage.setItem('listao_q', JSON.stringify(q.slice(-50))); } catch (e) {} }
  var flushing = false;
  function flush(beacon) {
    var q = readQ();
    if (!q.length || flushing || bot()) return;
    flushing = true;
    var body = JSON.stringify(q);
    var done = function (ok) { if (ok) saveQ([]); flushing = false; };
    if (beacon) {
      try {
        var ok = navigator.sendBeacon(SB_URL + '/rest/v1/site_events', new Blob([body], { type: 'application/json' }));
        done(ok !== false);
      } catch (e) { done(false); }
      return;
    }
    try {
      fetch(SB_URL + '/rest/v1/site_events', { method: 'POST', headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: body, keepalive: true })
        .then(function (r) { done(r.ok); })
        .catch(function () { flush(true); });
    } catch (e) { flush(true); }
  }
  function send(ev, element, extra) {
    if (bot()) return;
    var m = {}; for (var k in META) m[k] = META[k];
    if (extra) for (var k2 in extra) m[k2] = extra[k2];
    var q = readQ();
    q.push({ session_id: sid, page: PAGE, event: ev, element: element || '', referrer: document.referrer || '', ua: navigator.userAgent.slice(0, 200), meta: m });
    saveQ(q); flush(false);
  }
  window.listaoTrk = send;
  function init() {
    send('page_view');
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-trk]') : null;
      if (!t) return;
      send(t.getAttribute('data-trk'), t.getAttribute('data-pos') || t.getAttribute('data-q') || '');
    });
    var faqs = document.querySelectorAll('details[data-q]');
    for (var i = 0; i < faqs.length; i++) {
      (function (d) { d.addEventListener('toggle', function () { if (d.open) send('faq_open', d.getAttribute('data-q') || ''); }); })(faqs[i]);
    }
    var scrolled = false;
    function onScroll() {
      if (scrolled) return;
      var h = document.documentElement;
      if (window.scrollY + window.innerHeight >= h.scrollHeight * 0.75) { scrolled = true; send('scroll_75'); window.removeEventListener('scroll', onScroll); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    var qr = document.querySelector('.qr-img');
    if (qr && 'IntersectionObserver' in window) {
      var seen = false;
      var io = new IntersectionObserver(function (es) { if (!seen && es[0].isIntersecting) { seen = true; send('qr_view'); io.disconnect(); } });
      io.observe(qr);
    }
    var fb = document.querySelector('.fb-form');
    if (fb) fb.addEventListener('submit', function () { send('feedback_submit'); });
    window.addEventListener('pagehide', function () { flush(true); });
    setInterval(function () { flush(false); }, 10000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
