(() => {
  const gestes = window.GESTES;
  const $ = (id) => document.getElementById(id);
  const listView = $("list-view"), detailView = $("detail-view");
  const back = $("back"), title = $("title");

  const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  // ---------- Liste ----------
  function renderList(filter = "") {
    const q = normalize(filter.trim());
    const list = $("list");
    list.innerHTML = "";
    gestes
      .filter((g) => !q || normalize(g.titre + " " + g.resume + " " + g.etapes.join(" ")).includes(q))
      .forEach((g) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerHTML = `<span class="emoji" aria-hidden="true">${g.emoji}</span>
          <span><strong></strong><span class="sub"></span></span>`;
        btn.querySelector("strong").textContent = g.titre;
        btn.querySelector(".sub").textContent = g.resume;
        btn.addEventListener("click", () => (location.hash = g.id));
        li.appendChild(btn);
        list.appendChild(li);
      });
    if (!list.children.length) list.innerHTML = "<li>Aucun résultat.</li>";
  }

  // ---------- Détail ----------
  function renderDetail(g) {
    title.textContent = g.titre;
    $("detail-intro").textContent = g.intro;
    $("detail-alert").textContent = g.alerte ? "🚨 " + g.alerte : "";
    const steps = $("detail-steps");
    steps.innerHTML = "";
    g.etapes.forEach((e) => {
      const li = document.createElement("li");
      li.textContent = e;
      steps.appendChild(li);
    });
    const dont = $("detail-dont");
    dont.innerHTML = "";
    if (g.interdits.length) {
      dont.innerHTML = "<h3>❌ À ne pas faire</h3><ul></ul>";
      g.interdits.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        dont.querySelector("ul").appendChild(li);
      });
    }
    $("metronome").hidden = !g.metronome;
    window.scrollTo(0, 0);
  }

  // ---------- Routage (hash) ----------
  function route() {
    stopMetronome();
    const g = gestes.find((x) => x.id === location.hash.slice(1));
    listView.hidden = !!g;
    detailView.hidden = !g;
    back.hidden = !g;
    if (g) renderDetail(g);
    else title.textContent = "Premiers Secours";
  }
  back.addEventListener("click", () => history.length > 1 ? history.back() : (location.hash = ""));
  window.addEventListener("hashchange", route);
  $("search").addEventListener("input", (e) => renderList(e.target.value));

  // ---------- Métronome RCP (110 bpm) ----------
  let timer = null, ctx = null, count = 0;
  function beep() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), gain = ctx.createGain();
      o.frequency.value = 880;
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.connect(gain).connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.09);
    } catch (_) { /* audio indisponible : le visuel suffit */ }
    const p = $("metro-pulse");
    p.classList.add("beat");
    setTimeout(() => p.classList.remove("beat"), 120);
    count = (count % 30) + 1;
    $("metro-count").textContent = count;
    if (navigator.vibrate) navigator.vibrate(40);
  }
  function stopMetronome() {
    clearInterval(timer); timer = null; count = 0;
    $("metro-count").textContent = "0";
    $("metro-btn").textContent = "▶ Démarrer le rythme";
  }
  $("metro-btn").addEventListener("click", () => {
    if (timer) return stopMetronome();
    beep();
    timer = setInterval(beep, 60000 / 110);
    $("metro-btn").textContent = "⏹ Arrêter";
  });

  // ---------- Hors-ligne (PWA) ----------
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  renderList();
  route();
})();
