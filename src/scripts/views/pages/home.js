import RestaurantApiSource from '../../data/remote/restaurant-api-source.js';
import AlertModals from '../../utils/alert-modals.js';
import DomManipulator from '../../utils/dom-manipulator.js';
const Home = {
  async render() {
    return `
      <hero-banner></hero-banner>
      <why-us></why-us>
      <section class="restaurants-list">
        <h2 tabindex="0">Expert Reviews, Curated Recommendations</h2>
        <div class="restaurants-container">
          <loading-anim></loading-anim>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsListElement = document.querySelector(
      '.restaurants-container',
    );
    const loadingElement = document.querySelector('loading-anim');
    DomManipulator.showLoading(restaurantsListElement, loadingElement);
    try {
      const restaurants = await RestaurantApiSource.getRestaurantList();
      const restaurantItemElements = restaurants.map((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        return restaurantItemElement;
      });
      restaurantsListElement.append(...restaurantItemElements);
    } catch (error) {
      AlertModals.showErrorModal(error);
    } finally {
      DomManipulator.hideElement(loadingElement);
    }
  },
};

export default Home;
