import FavoriteRestaurantIdb from '../../data/local/favorite-restaurants-idb.js';
import AlertModals from '../../utils/alert-modals.js';

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
    const restaurantsListElement = document.querySelector(
      '.restaurants-container',
    );
    try {
      const favoriteRestaurants =
        await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantItemElements = favoriteRestaurants.map(
        (favRestaurant) => {
          const restaurantItemElement =
            document.createElement('restaurant-item');
          restaurantItemElement.restaurant = favRestaurant;
          return restaurantItemElement;
        },
      );
      restaurantsListElement.append(...restaurantItemElements);
    } catch (error) {
      AlertModals.showErrorModal(error);
    }
  },
};

export default Favorites;
