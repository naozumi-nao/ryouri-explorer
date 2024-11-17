import { createRestaurantItemTemplate } from '../views/templates/template-creator.js';

class RestaurantItem extends HTMLElement {
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null,
  };

  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  constructor() {
    super();
  }

  render() {
    this.innerHTML = createRestaurantItemTemplate(this._restaurant);
  }
}

customElements.define('restaurant-item', RestaurantItem);
