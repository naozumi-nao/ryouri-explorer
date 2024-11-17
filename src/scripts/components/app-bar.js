import { createAppBarTemplate } from '../views/templates/template-creator.js';

class AppBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = createAppBarTemplate();
  }
}

customElements.define('app-bar', AppBar);
