import { createRestaurantDetailTemplate } from '../views/templates/template-creator.js';

class RestaurantDetail extends HTMLElement {
  _restaurant = {
    id: null,
    name: null,
    description: null,
    city: null,
    address: null,
    pictureId: null,
    categories: null,
    menus: null,
    rating: null,
    customerReviews: null,
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

  connectedCallback() {
    const dialog = this.querySelector('dialog');
    const addReviewBtn = this.querySelector('#add-review-btn');

    addReviewBtn.addEventListener('click', () => {
      dialog.showModal();
    });
  }

  render() {
    this.innerHTML = createRestaurantDetailTemplate(this._restaurant);
    this._renderCategories();
    this._renderMenu();
    this._renderCustomerReviews();
  }

  _renderCategories() {
    const categoriesListElement = this.querySelector('.categories');
    this._restaurant.categories.forEach((category) => {
      const categoryElement = document.createElement('li');
      categoryElement.innerText = `${category.name}`;
      categoriesListElement.append(categoryElement);
    });
    this.append(categoriesListElement);
  }

  _renderMenu() {
    const menuSection = this.querySelector('.menu');

    const foodsSection = this.querySelector('.foods');
    const foodsListElement = document.createElement('ul');
    this._restaurant.menus.foods.forEach((food) => {
      const foodElement = document.createElement('li');
      foodElement.innerText = `${food.name}`;
      foodsListElement.append(foodElement);
    });
    foodsSection.append(foodsListElement);

    const drinksSection = this.querySelector('.drinks');
    const drinksListElement = document.createElement('ul');
    drinksListElement.classList.add('drinks');
    this._restaurant.menus.drinks.forEach((drink) => {
      const drinkElement = document.createElement('li');
      drinkElement.innerText = `${drink.name}`;
      drinksListElement.append(drinkElement);
    });
    drinksSection.append(drinksListElement);

    menuSection.append(foodsSection, drinksSection);
    this.append(menuSection);
  }

  _renderCustomerReviews() {
    const customerReviewsSection = this.querySelector('.customer-reviews');
    const customerReviewsContainer = this.querySelector(
      '.customer-reviews-container',
    );
    const customerReviewsElements = this._restaurant.customerReviews.map(
      (customerReview) => {
        const customerReviewItemElement =
          document.createElement('customer-review');
        customerReviewItemElement.customerReview = customerReview;
        return customerReviewItemElement;
      },
    );

    customerReviewsContainer.append(...customerReviewsElements);
    customerReviewsSection.append(customerReviewsContainer);
    this.append(customerReviewsSection);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
