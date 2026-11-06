// ExuraCSS dark mode: one attribute, colors balance themselves
Exura.dom('body').attr('dark', '');

// ExuraJS module: state -> effect -> render
Exura.module(function rune() {
  const { state, effect, render } = rune;

  state.set('message', 'Listening to the runes…');
  effect(() => render(), ['message']);

  // ask ExuraPHP, then the state renders the answer
  fetch('?/rune')
    .then((response) => response.json())
    .then((json) => state.set('message', json.data.message))
    .catch(() => state.set('message', 'Run it on a PHP server: php cast start'));
});

rune();

// wake the header
document.getElementById('hero').classList.add('awake');
