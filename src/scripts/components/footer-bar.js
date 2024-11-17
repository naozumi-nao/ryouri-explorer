import { createFooterBarTemplate } from '../views/templates/template-creator.js';

class FooterBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = createFooterBarTemplate();
  }
}

customElements.define('footer-bar', FooterBar);
