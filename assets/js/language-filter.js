// All published posts are on the blog index: filtering must include the whole
// collection, rather than just the current page of a paginated list.
(() => {
  const filter = document.querySelector('.language-filter');
  if (!filter) return;
  const choices = [...filter.querySelectorAll('button')];
  const entries = [...document.querySelectorAll('[data-content-language]')];
  const empty = document.querySelector('.language-empty');
  let selected = null;
  const update = () => {
    choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === selected)));
    let visible = 0;
    for (const entry of entries) {
      entry.hidden = selected === null
        ? entry.dataset.original !== 'true'
        : entry.dataset.contentLanguage !== selected;
      if (!entry.hidden) visible++;
    }
    empty.hidden = visible > 0;
  };
  filter.hidden = false;
  choices.forEach(button => button.addEventListener('click', () => {
    selected = selected === button.dataset.language ? null : button.dataset.language;
    update();
  }));
  update();
})();
