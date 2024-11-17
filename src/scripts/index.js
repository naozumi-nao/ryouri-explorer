import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import './components/app-bar.js';
import './components/footer-bar.js';
import './components/hero-banner.js';
import './components/why-us.js';
import './components/restaurant-item.js';
import './components/restaurant-detail.js';
import './components/customer-review.js';
import './components/add-review.js';
import './components/loading-anim.js';

const app = new App({
  button: document.querySelector('#nav-drawer-btn'),
  drawer: document.querySelector('.nav-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
