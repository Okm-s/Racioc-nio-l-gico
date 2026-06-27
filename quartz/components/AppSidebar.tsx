import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Barra lateral igual à da Plataforma (home), persistente nas apostilas.
const AppSidebar: QuartzComponent = () => null

// roda cedo: tema + colapso antes de pintar (sem flash)
AppSidebar.beforeDOMLoaded = `
(function(){
  try{
    var t = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('saved-theme', t);
    if (localStorage.getItem('rl_collapsed') === '1') document.documentElement.classList.add('app-collapsed');
  }catch(e){}
})();
`

AppSidebar.afterDOMLoaded = `
(function(){
  var host = document.querySelector('.sidebar.left');
  if (!host || host.dataset.appside) return;
  host.dataset.appside = '1';
  var HOME = '/Racioc-nio-l-gico/';

  var nome='Meu progresso', ini='·';
  try{
    var cur = localStorage.getItem('rl_current');
    var ps = JSON.parse(localStorage.getItem('rl_profiles') || '{}');
    if (cur && ps[cur]) { nome = ps[cur].nome; var w = nome.trim().split(/\\s+/); ini = (((w[0]||'')[0]||'')+((w.length>1?w[w.length-1][0]:'')||'')).toUpperCase(); }
  }catch(e){}

  var path = decodeURIComponent(location.pathname);
  var active = 'inicio';
  if (path.indexOf('Simulados') >= 0) active = 'questoes';
  else if (path.indexOf('dulo') >= 0) active = 'estudar';

  function nav(scr, href, ic, lbl){ return '<a class="app-nav'+(scr===active?' active':'')+'" href="'+href+'"><i data-lucide="'+ic+'"></i><span class="lbl">'+lbl+'</span></a>'; }
  host.innerHTML =
      '<a class="app-brand" href="'+HOME+'"><span class="app-logo">λ</span><span class="lbl app-bname">lógica<b>.</b></span></a>'
    + '<nav class="app-navs">'
    +   nav('inicio', HOME, 'house', 'Início')
    +   nav('estudar', HOME+'#estudar', 'book-open', 'Estudar')
    +   nav('questoes', HOME+'#questoes', 'list-todo', 'Questões')
    +   nav('desempenho', HOME+'#desempenho', 'chart-column', 'Desempenho')
    + '</nav>'
    + '<div class="app-bottom">'
    +   '<button class="app-nav" id="app-theme" type="button"><i data-lucide="moon" id="app-theme-ic"></i><span class="lbl" id="app-theme-lbl">Modo escuro</span></button>'
    +   '<button class="app-nav" id="app-collapse" type="button"><i data-lucide="chevrons-left" id="app-coll-ic"></i><span class="lbl">Recolher menu</span></button>'
    +   '<a class="app-nav" id="app-logout" href="'+HOME+'"><i data-lucide="log-out"></i><span class="lbl">Sair</span></a>'
    +   '<div class="app-user"><span class="app-av">'+ini+'</span><span class="lbl"><span class="app-uname">'+nome+'</span><span class="app-usub">Meu progresso</span></span></div>'
    + '</div>';

  function draw(){ if (window.lucide && window.lucide.createIcons) lucide.createIcons(); else setTimeout(draw, 120); }
  function syncIcons(){
    var t = document.documentElement.getAttribute('saved-theme') || 'light';
    var ti = document.getElementById('app-theme-ic'); if (ti) ti.setAttribute('data-lucide', t==='dark'?'sun':'moon');
    var tl = document.getElementById('app-theme-lbl'); if (tl) tl.textContent = t==='dark'?'Modo claro':'Modo escuro';
    var ci = document.getElementById('app-coll-ic'); if (ci) ci.setAttribute('data-lucide', document.documentElement.classList.contains('app-collapsed')?'chevrons-right':'chevrons-left');
    draw();
  }

  document.getElementById('app-theme').addEventListener('click', function(){
    var t = document.documentElement.getAttribute('saved-theme')==='dark' ? 'light' : 'dark';
    localStorage.setItem('theme', t); document.documentElement.setAttribute('saved-theme', t); syncIcons();
  });
  document.getElementById('app-collapse').addEventListener('click', function(){
    var c = !document.documentElement.classList.contains('app-collapsed');
    document.documentElement.classList.toggle('app-collapsed', c);
    localStorage.setItem('rl_collapsed', c?'1':'0'); syncIcons();
  });
  document.getElementById('app-logout').addEventListener('click', function(){ try{ localStorage.removeItem('rl_current'); }catch(e){} });

  syncIcons();
  if (!window.lucide) { var s=document.createElement('script'); s.src='https://unpkg.com/lucide@latest/dist/umd/lucide.min.js'; s.onload=syncIcons; document.head.appendChild(s); }
})();
`

export default (() => AppSidebar) satisfies QuartzComponentConstructor
