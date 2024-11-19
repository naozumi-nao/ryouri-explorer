/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../src/scripts/data/local/favorite-restaurants-idb.js';
import * as TestFactories from './helpers/testFactories.js';

describe('Favoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-btn-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 47 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 47 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 47 });

    document.querySelector('.favorite-btn').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(47);
    expect(restaurant).toEqual({ id: 47 });

    await FavoriteRestaurantIdb.deleteRestaurant(47);
  });

  it('should not add a restaurant again when it\'s already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 47 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 47 });

    document.querySelector('.favorite-btn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 47 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(47);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('.favorite-btn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});