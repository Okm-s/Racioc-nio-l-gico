import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Quiz interativo para Simulados E bancos de questões dos módulos:
// marca alternativa -> envia -> pontuação + corretas + gabarito.
// No envio grava o resultado no perfil (localStorage) para a aba Desempenho.
const Quiz: QuartzComponent = () => null

Quiz.afterDOMLoaded = `
(function(){
  var path = location.pathname;
  var isSim = path.indexOf('Simulados') >= 0;
  var isBank = path.indexOf('Banco') >= 0;
  if (!isSim && !isBank) return;
  var callouts = Array.prototype.slice.call(document.querySelectorAll('blockquote.callout[data-callout="success"]'));
  if (!callouts.length) return;
  var article = callouts[0].closest('article') || document.querySelector('.center') || document.body;
  if (article.dataset.quizInit) return;
  article.dataset.quizInit = '1';

  if (!document.getElementById('quiz-style')) {
    var st = document.createElement('style');
    st.id = 'quiz-style';
    st.textContent = '.quiz-opts{display:flex;flex-direction:column;gap:8px;margin:10px 0 4px;}'
      + '.quiz-opt{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1px solid var(--lightgray);border-radius:12px;cursor:pointer;transition:background .12s,border-color .12s;}'
      + '.quiz-opt:hover{background:rgba(232,150,76,.07);}'
      + '.quiz-opt input{margin-top:4px;accent-color:#E8964C;flex:0 0 auto;}'
      + '.quiz-opt .quiz-mark{font-weight:600;color:var(--gray);}'
      + '.quiz-opt.correct{background:#EAF3EC;border-color:#9DC6A8;}'
      + '.quiz-opt.wrong{background:#F8E9E4;border-color:#E0A793;}'
      + '.quiz-opt.locked{cursor:default;}'
      + '.quiz-bar{position:sticky;bottom:16px;display:flex;align-items:center;gap:16px;margin-top:30px;padding:14px 18px;background:var(--light);border:1px solid var(--lightgray);border-radius:16px;box-shadow:0 6px 18px rgba(44,39,34,.1);z-index:5;}'
      + '.quiz-send{background:#E8964C;color:#fff;border:none;font-weight:700;font-size:15px;padding:12px 22px;border-radius:12px;cursor:pointer;font-family:inherit;}'
      + '.quiz-send:hover{background:#D9842F;}'
      + '.quiz-score{font-weight:700;font-size:15px;}';
    document.head.appendChild(st);
  }

  var questions = [];
  callouts.forEach(function(cal, idx){
    var alt = cal.previousElementSibling;
    while (alt && !(alt.tagName === 'P' && /^\\s*[a-eA-E]\\)/.test(alt.textContent))) {
      if (alt.tagName && alt.tagName.charAt(0) === 'H') { alt = null; break; }
      alt = alt.previousElementSibling;
    }
    if (!alt) return;
    var m = (cal.textContent || '').match(/(?:Letra|Resposta:?)\\s*([a-eA-E])\\b/i);
    if (!m) return;
    var correct = m[1].toLowerCase();
    var parts = alt.innerHTML.split(/<br\\s*\\/?>/i);
    var opts = [];
    parts.forEach(function(html){
      var mm = html.replace(/^\\s+/, '').match(/^([a-eA-E])\\)\\s*([\\s\\S]*)$/);
      if (mm) opts.push({ letter: mm[1].toLowerCase(), html: mm[2] });
    });
    if (opts.length < 2) return;
    var qid = 'q' + idx;
    var box = document.createElement('div');
    box.className = 'quiz-opts';
    opts.forEach(function(o){
      var lab = document.createElement('label');
      lab.className = 'quiz-opt';
      lab.dataset.letter = o.letter;
      lab.innerHTML = '<input type="radio" name="' + qid + '" value="' + o.letter + '"><span class="quiz-mark">' + o.letter + ')</span> <span class="quiz-text">' + o.html + '</span>';
      box.appendChild(lab);
    });
    alt.replaceWith(box);
    cal.style.display = 'none';
    questions.push({ box: box, correct: correct, cal: cal });
  });
  if (!questions.length) return;

  var bar = document.createElement('div');
  bar.className = 'quiz-bar';
  var btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'quiz-send'; btn.textContent = 'Enviar respostas';
  var score = document.createElement('span');
  score.className = 'quiz-score';
  bar.appendChild(btn); bar.appendChild(score);
  article.appendChild(bar);

  function saveResult(right, total){
    try {
      var key = localStorage.getItem('rl_current'); if (!key) return;
      var ps = JSON.parse(localStorage.getItem('rl_profiles') || '{}');
      var p = ps[key]; if (!p) return;
      var dp = decodeURIComponent(location.pathname);
      var hoje = new Date(); var data = hoje.getFullYear()+'-'+String(hoje.getMonth()+1).padStart(2,'0')+'-'+String(hoje.getDate()).padStart(2,'0');
      var sim = dp.match(/Simulado-(\\d+)/);
      if (sim) { p.simulados = p.simulados || {}; p.simulados[sim[1]] = { certas: right, total: total, data: data }; }
      else if (dp.indexOf('Banco') >= 0) {
        var mm = dp.match(/dulo-(\\d)/); var mod = mm ? mm[1] : '?';
        p.bancos = p.bancos || {}; p.bancos[location.pathname] = { mod: mod, certas: right, total: total, data: data };
      }
      ps[key] = p; localStorage.setItem('rl_profiles', JSON.stringify(ps));
    } catch(e){}
  }

  var sent = false;
  btn.addEventListener('click', function(){
    if (!sent) {
      var right = 0;
      questions.forEach(function(q){
        var sel = q.box.querySelector('input:checked');
        var chosen = sel ? sel.value : null;
        q.box.querySelectorAll('.quiz-opt').forEach(function(l){
          l.classList.add('locked');
          l.querySelector('input').disabled = true;
          if (l.dataset.letter === q.correct) l.classList.add('correct');
          if (chosen && l.dataset.letter === chosen && chosen !== q.correct) l.classList.add('wrong');
        });
        if (chosen === q.correct) right++;
        q.cal.style.display = '';
      });
      var pct = Math.round(right / questions.length * 100);
      score.textContent = 'Você acertou ' + right + ' de ' + questions.length + ' (' + pct + '%).';
      score.style.color = right === questions.length ? '#5E8E6B' : (right === 0 ? '#C0563B' : 'var(--dark)');
      btn.textContent = 'Refazer';
      sent = true;
      saveResult(right, questions.length);
      bar.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      questions.forEach(function(q){
        q.box.querySelectorAll('.quiz-opt').forEach(function(l){
          l.classList.remove('correct', 'wrong', 'locked');
          var inp = l.querySelector('input'); inp.disabled = false; inp.checked = false;
        });
        q.cal.style.display = 'none';
      });
      score.textContent = '';
      btn.textContent = 'Enviar respostas';
      sent = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();
`

export default (() => Quiz) satisfies QuartzComponentConstructor
