import UrlParser from '../../routes/url-parser.js';
import RestaurantApiSource from '../../data/remote/restaurant-api-source.js';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator.js';
import AlertModals from '../../utils/alert-modals.js';
import DomManipulator from '../../utils/dom-manipulator.js';

let _restaurantId = null;

const Detail = {
  async render() {
    return `
      <div class="restaurant-detail-container">
        <loading-anim id="detail-loading"></loading-anim>
      </div>
      <div id="favorite-btn-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    _restaurantId = url.id;
    try {
      const restaurant = await RestaurantApiSource.getRestaurantDetail(url.id);
      this._displayResult(restaurant);
      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector(
          '#favorite-btn-container',
        ),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      AlertModals.showErrorModal(error);
    } finally {
      DomManipulator.hideElement(document.querySelector('#detail-loading'));
    }

    const addReviewElement = document.querySelector('add-review');
    addReviewElement.addEventListener(
      'ryouri-explorer:add-review',
      this._onAddReviewHandler,
    );
  },

  _displayResult(restaurant) {
    const restaurantDetailContainer = document.querySelector(
      '.restaurant-detail-container',
    );
    const restaurantDetailElement = document.createElement('restaurant-detail');
    restaurantDetailElement.restaurant = restaurant;
    restaurantDetailContainer.append(restaurantDetailElement);
  },

  async _onAddReviewHandler(event) {
    const { name, description } = event.detail;
    const customerReviewsContainer = document.querySelector(
      '.customer-reviews-container',
    );
    try {
      AlertModals.showLoadingModal();
      const result = await RestaurantApiSource.postCustomerReview({
        id: _restaurantId,
        name: name,
        review: description,
      });
      AlertModals.showSuccessModal(result.message, 'successfully added review');
      DomManipulator.emptyElement(customerReviewsContainer);
      const customerReviewsElements = result.customerReviews.map(
        (customerReview) => {
          const customerReviewItemElement =
            document.createElement('customer-review');
          customerReviewItemElement.customerReview = customerReview;
          return customerReviewItemElement;
        },
      );
      customerReviewsContainer.append(...customerReviewsElements);
    } catch (error) {
      AlertModals.showErrorModal(error.message);
    }
  },
};

export default Detail;
