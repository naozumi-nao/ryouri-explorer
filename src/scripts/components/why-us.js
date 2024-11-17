import { createWhyUsElementTemplate } from '../views/templates/template-creator.js';

class WhyUs extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = createWhyUsElementTemplate();
  }
}

customElements.define('why-us', WhyUs);
