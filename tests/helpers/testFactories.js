import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter.js';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favorite-btn-container'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };