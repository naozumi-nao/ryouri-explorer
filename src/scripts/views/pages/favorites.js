import FavoriteRestaurantIdb from '../../data/local/favorite-restaurants-idb.js';
import AlertModals from '../../utils/alert-modals.js';
import DomManipulator from '../../utils/dom-manipulator.js';

const Favorites = {
  async render() {
    return `
      <section class="restaurants-list">
        <h2 tabindex="0">Favorite Restaurants</h2>
        <div class="restaurants-container favorite-restaurants">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsListElement = document.querySelector('.restaurants-container');
    try {
      const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      if (favoriteRestaurants.length) {
        DomManipulator.emptyElement(restaurantsListElement);
        const restaurantItemElements = favoriteRestaurants.map(
          (favRestaurant) => {
            const restaurantItemElement =
              document.createElement('restaurant-item');
            restaurantItemElement.restaurant = favRestaurant;
            return restaurantItemElement;
          },
        );
        restaurantsListElement.append(...restaurantItemElements);
      } else {
        restaurantsListElement.innerHTML = '<p>You have no favorites yet</p>';
      }
    } catch (error) {
      AlertModals.showErrorModal(error);
    }
  },
};

export default Favorites;
