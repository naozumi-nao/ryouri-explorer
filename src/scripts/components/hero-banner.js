import { createHeroBannerTemplate } from '../views/templates/template-creator.js';

class HeroBanner extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = createHeroBannerTemplate();
  }
}

customElements.define('hero-banner', HeroBanner);
