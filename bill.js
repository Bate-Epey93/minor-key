/* ===== The Minor Key — Bill's layer =====
   Refrains (public-domain verbatim · homage lines · listen prompts),
   The Compute, The Minor Key journal, Two of One, For Her, His Own Lines.
   No lyrics are reproduced anywhere in this file: 'quote' entries are
   public-domain texts; 'after' entries are original lines written in an
   artist's register; 'listen' entries name a song and add an original
   reflection. */

var REFRAINS = [
  /* ---- public domain, verbatim ---- */
  { kind: 'quote', src: 'Homer, The Odyssey', work: 'Butler translation', text: 'There is nothing better or finer than when two people of one heart and mind keep house as man and wife.', carry: 'The long way home is still the way home.' },
  { kind: 'quote', src: 'Homer, The Odyssey', work: 'Pope translation', text: 'For never, never, wicked man was wise.', carry: 'Cleverness is not wisdom. Kindness computes.' },
  { kind: 'quote', src: 'Emily Brontë, Wuthering Heights', work: '1847', text: 'Whatever our souls are made of, his and mine are the same.', carry: 'Some bonds are not chosen. They are recognized.' },
  { kind: 'quote', src: 'Emily Brontë, Wuthering Heights', work: '1847', text: 'I have not broken your heart — you have broken it; and in breaking it, you have broken mine.', carry: 'What we do to the beloved, we do to ourselves.' },
  { kind: 'quote', src: 'Emily Brontë', work: 'poem, 1846', text: 'No coward soul is mine, no trembler in the world’s storm-troubled sphere.', carry: 'Melancholy is not cowardice. It sees the storm and stays.' },
  { kind: 'quote', src: 'Christina Rossetti', work: '“Remember”, 1862', text: 'Better by far you should forget and smile than that you should remember and be sad.', carry: 'Even grief can be generous.' },
  { kind: 'quote', src: 'Tennyson', work: 'In Memoriam, 1850', text: '’Tis better to have loved and lost than never to have loved at all.', carry: 'The ending does not refund the love. Nothing can.' },
  { kind: 'quote', src: 'John Keats', work: '“Ode on Melancholy”, 1819', text: 'She dwells with Beauty — Beauty that must die.', carry: 'The dying is why you noticed the beauty at all.' },
  { kind: 'quote', src: 'Ecclesiastes 3', work: 'KJV', text: 'To every thing there is a season, and a time to every purpose under the heaven.', carry: 'You are not late. It is not that kind of clock.' },
  { kind: 'quote', src: 'Ecclesiastes 9', work: 'KJV', text: 'Live joyfully with the wife whom thou lovest all the days of the life of thy vanity.', carry: 'The brevity is the argument for the joy.' },
  { kind: 'quote', src: 'Marcus Aurelius', work: 'Meditations, Long translation', text: 'Loss is nothing else than change, and change is Nature’s delight.', carry: 'The universe refactors. Constantly. You are allowed to also.' },
  { kind: 'quote', src: 'Marcus Aurelius', work: 'Meditations, Long translation', text: 'Confine thyself to the present.', carry: 'One tick of the clock at a time.' },
  { kind: 'quote', src: 'Percy Shelley', work: '“Music, When Soft Voices Die”, 1821', text: 'Music, when soft voices die, vibrates in the memory.', carry: 'Nothing loved is ever fully deallocated.' },
  { kind: 'quote', src: 'Rainer Maria Rilke', work: 'Book of Hours — own translation', text: 'Let everything happen to you: beauty and terror. Just keep going. No feeling is final.', carry: 'No feeling is final. Not even this one.' },
  { kind: 'quote', src: 'Bashō', work: 'haiku — literal rendering', text: 'Even in Kyoto, hearing the cuckoo’s cry, I long for Kyoto.', carry: 'You can miss a thing while holding it. That is love, working.' },
  { kind: 'quote', src: 'The Epic of Gilgamesh', work: 'own rendering', text: 'The life you seek you never will find: when the gods made man, they kept life for themselves. So fill your belly, be glad day and night, and let your wife delight in your embrace — this too is the work of man.', carry: 'The oldest story already knew: the ordinary evening is the point.' },

  /* ---- homage — original lines in each artist's register ---- */
  { kind: 'after', src: 'after Benjamin Clementine', work: 'in the key of “Nemesis”', text: 'The house I was running from turned out to be the one I was building.', carry: 'Stop running. Inspect the blueprint.' },
  { kind: 'after', src: 'after Benjamin Clementine', work: 'in the key of “Condolence”', text: 'I sent my condolences to the man I almost stayed; he never wrote back, and that was the answer.', carry: 'Mourn the almost-lives briefly. Then live this one.' },
  { kind: 'after', src: 'after Benjamin Clementine', work: 'in the key of “I Won’t Complain”', text: 'I have counted my defeats like coins, and found I could still pay attention.', carry: 'Attention is the one currency loss cannot touch.' },
  { kind: 'after', src: 'after Benjamin Clementine', work: 'in the key of “Cornerstone”', text: 'Alone is a place I used to live; I still know the way, I just stopped paying rent.', carry: 'You may visit solitude. You no longer live there.' },
  { kind: 'after', src: 'after Sid Sriram', work: 'in the key of his long notes', text: 'The note held long enough stops being sound and starts being prayer.', carry: 'Hold one thing longer today. Anything. Hold it.' },
  { kind: 'after', src: 'after Sid Sriram', work: 'between two traditions', text: 'I carry two rivers in one throat, and refuse to choose between my waters.', carry: 'You are allowed to be all of it at once.' },
  { kind: 'after', src: 'after Sid Sriram', work: 'in the key of devotion', text: 'What I love, I sing back louder than it was given to me.', carry: 'Return more than you received. That is the whole art.' },
  { kind: 'after', src: 'after Sid Sriram', work: 'in the key of surrender', text: 'The song already exists; my work is to get out of its way.', carry: 'Today, less forcing. More allowing.' },
  { kind: 'after', src: 'after Aurora', work: 'in the key of “Runaway”', text: 'The child who ran away still lives in me; these days I run toward.', carry: 'Same legs. New direction.' },
  { kind: 'after', src: 'after Aurora', work: 'in the key of her weather', text: 'I let the sadness in because it knows things — it has been everywhere I have not.', carry: 'Sadness is a well-traveled guest. Feed it, hear it, let it go.' },
  { kind: 'after', src: 'after Aurora', work: 'in the key of “Exist for Love”', text: 'Of all the reasons to exist, I keep choosing the least efficient one.', carry: 'Love does not optimize. That is its glory.' },
  { kind: 'after', src: 'after Aurora', work: 'in the key of wonder', text: 'The world did not get smaller when I grew; I just stopped kneeling to look.', carry: 'Kneel to something small today and look properly.' },
  { kind: 'after', src: 'after London Grammar', work: 'in the key of “Strong”', text: 'I was performing strength so well that no one thought to hold me — excuse me while I put this armor down.', carry: 'Being held requires being reachable.' },
  { kind: 'after', src: 'after London Grammar', work: 'in the key of “Wasting My Young Years”', text: 'I audited the years I thought I wasted and found they were the tuition.', carry: 'Nothing that taught you was wasted.' },
  { kind: 'after', src: 'after London Grammar', work: 'in that cathedral reverb', text: 'Some truths only fit in a voice that is willing to shake.', carry: 'Say the shaky thing in the shaky voice.' },
  { kind: 'after', src: 'after London Grammar', work: 'in the key of restraint', text: 'The space between the notes is where I finally heard myself.', carry: 'Schedule silence like it were a meeting. It is.' },
  { kind: 'after', src: 'after Nemahsis', work: 'in the key of belonging', text: 'They asked me to translate myself until nothing was left in the original.', carry: 'Stay untranslated somewhere. Keep one room in your own language.' },
  { kind: 'after', src: 'after Nemahsis', work: 'in the key of “What If I Took It Off for You?”', text: 'I tried on their approval and it fit worse than my own skin.', carry: 'Approval is the wrong size by design. Wear yourself.' },
  { kind: 'after', src: 'after Nemahsis', work: 'in the key of tenderness under scrutiny', text: 'Softness in a hard room is not weakness; it is the bravest thing in the building.', carry: 'Be the soft thing that does not apologize.' },
  { kind: 'after', src: 'after Nemahsis', work: 'in the key of an open question', text: 'I stopped auditioning for rooms that were never casting my part.', carry: 'Exit the audition. Keep the gift.' },

  /* ---- listen prompts — play the song, carry the line ---- */
  { kind: 'listen', src: 'Benjamin Clementine', work: '“I Won’t Complain”', text: 'Listen once, no screen. A man inventories his losses and refuses the obvious conclusion.', carry: 'Refusing despair is a daily, minor-key act.' },
  { kind: 'listen', src: 'Benjamin Clementine', work: '“Nemesis”', text: 'Listen for how the piano stalks him. Some of what chases you is yours.', carry: 'Turn and face the follower. It may be carrying your keys.' },
  { kind: 'listen', src: 'Sid Sriram', work: '“Do The Dance”', text: 'Listen for the moment control gives way. That give is the lesson.', carry: 'Where can you loosen your grip by one degree today?' },
  { kind: 'listen', src: 'Sid Sriram', work: '“Came Home”', text: 'Play it on a walk. Home is a verb in his mouth.', carry: 'Home is something you do, not somewhere you arrive.' },
  { kind: 'listen', src: 'Aurora', work: '“Through the Eyes of a Child”', text: 'Listen before work, once. Notice what the day looks like right after.', carry: 'The child’s eyes are still installed. Switch views.' },
  { kind: 'listen', src: 'Aurora', work: '“Runaway”', text: 'Listen for the homesickness that has no address.', carry: 'Some longing is not for a place. Honor it anyway.' },
  { kind: 'listen', src: 'London Grammar', work: '“Strong”', text: 'Listen for what the restraint is holding back. That tension is the song.', carry: 'What are you holding at bay so gracefully that no one noticed?' },
  { kind: 'listen', src: 'London Grammar', work: '“Hey Now”', text: 'Three instruments, enormous room. Listen to how little it needs.', carry: 'Today, subtract before you add.' },
  { kind: 'listen', src: 'Nemahsis', work: '“Stick of Gum”', text: 'Listen for the smallness of the image against the size of the wound.', carry: 'Small images carry the big griefs. Trust the small image.' },
  { kind: 'listen', src: 'Nemahsis', work: '“What If I Took It Off for You?”', text: 'A question asked without flinching. Listen to the cost of it.', carry: 'Ask your version of the question, at least in the mirror.' },
  { kind: 'listen', src: 'Benjamin Clementine', work: '“London”', text: 'A city as an unrequited love. Listen on the commute.', carry: 'You can love a thing that was hard on you. Carefully.' },
  { kind: 'listen', src: 'Aurora', work: '“Exist for Love”', text: 'Her one unguarded love song. Listen with your wife in the room, say nothing about it.', carry: 'Some songs are meant to be overheard together.' }
];

function refrainOfDay() {
  var now = new Date();
  var doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
  return REFRAINS[doy % REFRAINS.length];
}
function refrainOfKind(kind) {
  var pool = REFRAINS.filter(function (r) { return r.kind === kind; });
  var now = new Date();
  var doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
  return pool[doy % pool.length];
}
function refrainPairHTML() {
  return refrainCardHTML(refrainOfKind('quote')) + refrainCardHTML(refrainOfKind('after'));
}
var REFRAIN_KIND = {
  quote: { label: 'from the canon', color: '#8A9BC4' },
  after: { label: 'homage — an original line, not a lyric', color: '#9B8AC4' },
  listen: { label: 'listen tonight', color: '#7C90C0' }
};
function refrainCardHTML(r) {
  r = r || refrainOfDay();
  var k = REFRAIN_KIND[r.kind];
  return '<div class="today-card glass rf-card" id="tdRefrain" style="border-left:3px solid ' + k.color + '">' +
    '<div class="tc-kicker" style="color:' + k.color + '">' + motifSVG(r.kind === 'listen' ? 'wave' : 'candle', 'rf-' + r.src, { color: k.color }) + ' ' + esc(r.src) + (r.work ? ' · ' + esc(r.work) : '') + '</div>' +
    '<div class="rf-text">' + (r.kind === 'listen' ? esc(r.text) : '“' + esc(r.text) + '”') + '</div>' +
    (r.carry ? '<div class="rf-carry">' + esc(r.carry) + '</div>' : '') +
    '<div class="rf-kind">' + k.label + '</div>' +
  '</div>';
}

/* ---- The Compute (morning) · The Minor Key (evening) ---- */
var MK = 'minorkey-mk';
function mkAll() { try { return JSON.parse(localStorage.getItem(MK)) || []; } catch (e) { return []; } }
function mkSave(a) { try { localStorage.setItem(MK, JSON.stringify(a.slice(-400))); } catch (e) {} }

function computeCardHTML() {
  return '<div class="today-sec">The Compute</div>' +
    '<div class="today-card glass" id="tdCompute" style="border-left:3px solid #7C90C0">' +
      '<div class="tc-kicker" style="color:#7C90C0">' + motifSVG('target', 'td-compute', { color: '#7C90C0' }) + ' I love to compute</div>' +
      '<div class="tc-sub" style="font-style:normal">Name the one problem worth your best cycles today — and one thing that does not compute, which you will carry, not solve. Some inputs never resolve. They are not bugs. They are the score.</div>' +
    '</div>';
}
function minorKeyCardHTML() {
  return '<div class="today-sec">The Minor Key</div>' +
    '<div class="today-card glass" id="tdMK" style="border-left:3px solid #9B8AC4">' +
      '<div class="tc-kicker" style="color:#9B8AC4">' + motifSVG('crescent', 'td-mk', { color: '#9B8AC4' }) + ' evening · one line</div>' +
      '<div class="tc-sub" style="font-style:normal">Name one thing from today that was beautiful <em>because</em> it ends. Not despite. Because.</div>' +
      '<textarea class="mirror-input kw-inp" id="mkInput" rows="1" placeholder="tonight it was…"></textarea>' +
      '<div class="today-actions"><button class="tbtn" id="mkSave">Keep the line</button><button class="tbtn ghost" id="mkMore">The practice →</button></div>' +
    '</div>';
}

/* ---- weekly cards ---- */
var TWOOFONE = [
  'Where did you and your brother diverge this week — one concrete fork. What does the difference tell you about what is yours alone?',
  'Name one thing your twin does better than you. Sit with the fact that this costs you nothing.',
  'You were compared your whole life. Where did you compare yourself this week — and against whom, really?',
  'What does he know about you that no one else will ever know? You carry a witness. Act like a man who is seen.',
  'One memory only the two of you hold. Write it down before it belongs to no one.',
  'Where are you still living half of one life instead of all of your own?',
  'What would you tell him this week if telling him cost nothing? It costs nothing. Tell him.',
  'His struggles are not your assignments. Where did you pick up his weight this week out of habit?',
  'Two processes from one source, diverging by design. What did your fork ship this week that his never would?',
  'When did you last say something true to him that was not banter? Schedule the sentence.',
  'You learned “we” before you learned “I”. Where does your “I” still need finishing?',
  'If you were not a twin, what would you have had to learn alone? Thank him for one of those things — silently or out loud.'
];
var FORHER = [
  'You are the argument for the ordinary evening. Tell her so, in your own words, tonight.',
  'Name one thing she carried this week that she never announced. Tell her you saw it.',
  'Tell her one way she has changed you that she could not know from the inside.',
  'She married the whole system — logs, bugs, background processes. Thank her for running it with you.',
  'Tell her which of her ordinary gestures you would miss first. Be specific. Specificity is the love.',
  'Ask her what she is quietly worried about, then hold it without engineering a fix for one full day.',
  'Tell her the moment this week she looked most like herself.',
  'The songs you love are all about losing this. Tell her one line of what having it is like.',
  'Tell her one thing you decided not to say this week, and why the kinder silence was still hers.',
  'Plan one small ending together — a walk at dusk, a finished bottle, a last episode. Endings shared are doubled.',
  'Tell her what you thought marriage would be, and the better thing it turned out to be instead.',
  'Say thank you for something from years ago that you never properly closed the loop on.'
];
function weekIdx() { return Math.floor(Date.now() / 864e5 / 7); }

function practiceCardsForToday(slot, now) {
  var h = '';
  h += slot === 'evening' ? minorKeyCardHTML() : computeCardHTML();
  {
    h += '<div class="today-sec">For Her · this week</div>' +
      '<div class="today-card glass" id="tdHer" style="border-left:3px solid #C48AA5">' +
        '<div class="tc-kicker" style="color:#C48AA5">' + motifSVG('heart', 'td-her', { color: '#C48AA5' }) + ' one act of speech, spoken — this week</div>' +
        '<div class="tc-sub" style="font-style:normal">' + esc(FORHER[weekIdx() % FORHER.length]) + '</div>' +
      '</div>';
  }
  if (now.getDay() === 0) {
    h += '<div class="today-sec">Two of One</div>' +
      '<div class="today-card glass" id="tdTwin" style="border-left:3px solid #8AC4B8">' +
        '<div class="tc-kicker" style="color:#8AC4B8">' + motifSVG('bond', 'td-twin', { color: '#8AC4B8' }) + ' Sunday · the twin question</div>' +
        '<div class="tc-sub" style="font-style:normal">' + esc(TWOOFONE[weekIdx() % TWOOFONE.length]) + '</div>' +
      '</div>';
  }
  return h;
}
function bindBillToday(page) {
  var on = function (id, fn) { var el = page.querySelector('#' + id); if (el) el.onclick = fn; };
  on('tdRefrain', function () { navTo('refrains'); });
  on('tdMore', function () { navTo('practice'); });
  var mkBtn = page.querySelector('#mkSave');
  if (mkBtn) mkBtn.onclick = function (e) {
    e.stopPropagation();
    var inp = page.querySelector('#mkInput'), v = inp.value.trim(); if (!v) return;
    var a = mkAll(); a.push({ t: Date.now(), text: v }); mkSave(a);
    mkBtn.textContent = 'Kept ✓'; buzz(15);
  };
  var mkMore = page.querySelector('#mkMore');
  if (mkMore) mkMore.onclick = function (e) { e.stopPropagation(); navTo('practice'); };
}

/* ---- Refrains page ---- */
function renderRefrains() {
  var page = document.getElementById('page-refrains');
  if (!page) return;
  var h = pageEnsoHTML('page-refrains') +
    '<div style="margin-bottom:18px"><h2 style="font-family:\'Cormorant Garamond\',serif;font-size:24px;font-weight:400;color:#DCE2EF;margin-bottom:6px">The Refrains</h2>' +
    '<p style="font-size:12.5px;line-height:1.7;color:rgba(255,255,255,0.42)">One line a day, in the minor key — from the canon, in homage to your artists, or a song to sit with. Homage lines are original writing in an artist’s register; no lyric is reproduced here. The real lines live in your own collection below.</p></div>';
  h += '<div class="today-sec">Today</div>' + refrainCardHTML();
  h += '<div class="today-sec">Your Own Lines</div>' +
    '<div class="today-card glass" id="rfOwn" style="border-left:3px solid #A5B8E6">' +
      '<div class="tc-sub" style="font-style:normal">The lines that live in your head — lyrics, film lines, anything. Kept only on this device, for you.</div>' +
      '<div id="rfOwnList"></div>' +
      '<textarea class="mirror-input kw-inp" id="rfOwnText" rows="1" placeholder="the line…"></textarea>' +
      '<textarea class="mirror-input kw-inp" id="rfOwnSrc" rows="1" placeholder="who / where it’s from"></textarea>' +
      '<div class="today-actions"><button class="tbtn" id="rfOwnAdd">Keep it</button></div>' +
    '</div>';
  var groups = [['quote', 'From the canon'], ['after', 'Homage — in their keys'], ['listen', 'The listening list']];
  groups.forEach(function (g) {
    h += '<div class="today-sec">' + g[1] + '</div>';
    REFRAINS.forEach(function (r, i) {
      if (r.kind !== g[0]) return;
      var k = REFRAIN_KIND[r.kind];
      h += '<div class="ess-card glass rf-mini" data-rf="' + i + '" style="border-left:3px solid ' + k.color + '">' +
        '<div class="ess-kicker" style="color:' + k.color + '">' + esc(r.src) + (r.work ? ' · ' + esc(r.work) : '') + '</div>' +
        '<div class="rf-text sm">' + (r.kind === 'listen' ? esc(r.text) : '“' + esc(r.text) + '”') + '</div>' +
        (r.carry ? '<div class="rf-carry">' + esc(r.carry) + '</div>' : '') +
      '</div>';
    });
  });
  page.innerHTML = h;
  renderOwnLines(page);
  var add = page.querySelector('#rfOwnAdd');
  add.onclick = function () {
    var t = page.querySelector('#rfOwnText'), sc = page.querySelector('#rfOwnSrc');
    var v = t.value.trim(); if (!v) return;
    var a = ownAll(); a.push({ t: Date.now(), text: v, src: sc.value.trim() }); ownSave(a);
    t.value = ''; sc.value = ''; renderOwnLines(page); buzz(15);
  };
  glassify(page); tintCards(page);
  if (PREFS.theme === 'light') applyInlineTheme(true, page);
}
var OWN = 'minorkey-ownlines';
function ownAll() { try { return JSON.parse(localStorage.getItem(OWN)) || []; } catch (e) { return []; } }
function ownSave(a) { try { localStorage.setItem(OWN, JSON.stringify(a.slice(-300))); } catch (e) {} }
function renderOwnLines(page) {
  var host = page.querySelector('#rfOwnList'); if (!host) return;
  var a = ownAll();
  host.innerHTML = a.length ? a.slice().reverse().map(function (l, idx) {
    return '<div class="rf-ownline"><div class="rf-text sm">“' + esc(l.text) + '”</div>' +
      (l.src ? '<div class="rf-ownsrc">' + esc(l.src) + '</div>' : '') +
      '<button class="rf-del" data-del="' + (a.length - 1 - idx) + '" aria-label="Remove">✕</button></div>';
  }).join('') : '<div class="mj-empty">Empty so far. The first line is waiting somewhere in a song.</div>';
  host.querySelectorAll('[data-del]').forEach(function (b) {
    b.onclick = function () { var arr = ownAll(); arr.splice(+b.dataset.del, 1); ownSave(arr); renderOwnLines(page); };
  });
}

/* ---- Practice page ---- */
function renderPractice() {
  var page = document.getElementById('page-practice');
  if (!page) return;
  var h = pageEnsoHTML('page-practice') +
    '<div style="margin-bottom:18px"><h2 style="font-family:\'Cormorant Garamond\',serif;font-size:24px;font-weight:400;color:#DCE2EF;margin-bottom:6px">Practice</h2>' +
    '<p style="font-size:12.5px;line-height:1.7;color:rgba(255,255,255,0.42)">Four small disciplines. Nothing is scored, nothing is streaked. A missed day is data, not debt.</p></div>';

  h += '<div class="ess-card glass wat-card open" style="border-left:3px solid #7C90C0">' +
    '<div class="ess-kicker" style="color:#7C90C0">Daily · morning</div>' +
    '<div class="ess-title">' + motifSVG('target', 'pr-compute', { color: '#7C90C0' }) + ' The Compute</div>' +
    '<div class="ess-body"><div class="ess-text"><p>You said it yourself: <em>I love to compute.</em> So compute — deliberately. Each morning, name the one problem worth your best cycles today. One. The rest is scheduling noise.</p><p>Then name one thing that does not compute — the grief with no fix, the question with no closing tag. You do not solve it. You carry it, the way a song carries its minor chord without resolving it. Some inputs never terminate. They are not bugs. They are the score.</p></div></div></div>';

  h += '<div class="ess-card glass wat-card open" style="border-left:3px solid #9B8AC4">' +
    '<div class="ess-kicker" style="color:#9B8AC4">Daily · evening</div>' +
    '<div class="ess-title">' + motifSVG('crescent', 'pr-mk', { color: '#9B8AC4' }) + ' The Minor Key</div>' +
    '<div class="ess-body"><div class="ess-text"><p>The stories you love end. Swan songs, doomed loves, the long sail home — you have always known that the ending is not the flaw in the story; it is the pressure that makes it mean. The Japanese call the feeling <em>mono no aware</em> — the gentle ache of things because they pass.</p><p>So, each evening: one line. Name one thing from today that was beautiful <em>because</em> it ends. Not despite. Because. Write it below or on the Today page. Over a year this becomes the ledger of a man who was paying attention.</p></div>' +
    '<textarea class="mirror-input kw-inp" id="prMkInput" rows="1" placeholder="tonight it was…"></textarea>' +
    '<div class="today-actions"><button class="tbtn" id="prMkSave">Keep the line</button>' +
    '<button class="tbtn ghost" id="prMkRead">Read the ledger</button></div>' +
    '<div id="prMkList" style="display:none"></div></div></div>';

  h += '<div class="ess-card glass wat-card" style="border-left:3px solid #8AC4B8">' +
    '<div class="ess-kicker" style="color:#8AC4B8">Weekly · Sunday</div>' +
    '<div class="ess-title">' + motifSVG('bond', 'pr-twin', { color: '#8AC4B8' }) + ' Two of One</div>' +
    '<div class="ess-body"><div class="ess-text"><p>You began life as half of a sentence. Most people spend their lives wishing for a witness; you were born with one. The weekly discipline is one question — about the fork, the difference, the debt, the gift. Answer it honestly, and once a month, let the answer become a message to him.</p><p><strong>This week:</strong> ' + esc(TWOOFONE[weekIdx() % TWOOFONE.length]) + '</p></div></div></div>';

  h += '<div class="ess-card glass wat-card" style="border-left:3px solid #C48AA5">' +
    '<div class="ess-kicker" style="color:#C48AA5">Weekly · Friday</div>' +
    '<div class="ess-title">' + motifSVG('heart', 'pr-her', { color: '#C48AA5' }) + ' For Her</div>' +
    '<div class="ess-body"><div class="ess-text"><p>Every artist you love writes about losing what you still have. Let that be instruction, not just atmosphere: one deliberate act of speech to your wife each week — spoken, not texted, and never as a performance. Say it and let it land; the landing is hers.</p><p><strong>This week:</strong> ' + esc(FORHER[weekIdx() % FORHER.length]) + '</p></div></div></div>';

  page.innerHTML = h;
  page.querySelectorAll('.wat-card').forEach(function (card) {
    card.onclick = function (e) { if (e.target.closest('button,textarea')) return; card.classList.toggle('open'); };
  });
  var sv = page.querySelector('#prMkSave');
  sv.onclick = function (e) {
    e.stopPropagation();
    var inp = page.querySelector('#prMkInput'), v = inp.value.trim(); if (!v) return;
    var a = mkAll(); a.push({ t: Date.now(), text: v }); mkSave(a);
    sv.textContent = 'Kept ✓'; inp.value = ''; buzz(15);
  };
  var rd = page.querySelector('#prMkRead');
  rd.onclick = function (e) {
    e.stopPropagation();
    var l = page.querySelector('#prMkList');
    if (l.style.display === 'none') {
      var a = mkAll();
      l.innerHTML = a.length ? a.slice(-30).reverse().map(function (x) {
        return '<div class="mj-entry"><div class="mj-date">' + new Date(x.t).toDateString() + '</div><div class="mj-a">' + esc(x.text) + '</div></div>';
      }).join('') : '<div class="mj-empty">No lines yet. Tonight counts.</div>';
      l.style.display = 'block';
    } else l.style.display = 'none';
  };
  glassify(page); tintCards(page);
  if (PREFS.theme === 'light') applyInlineTheme(true, page);
}
