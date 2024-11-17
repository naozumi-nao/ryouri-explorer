import API_ENDPOINT from '../../globals/api-endpoint.js';

// TODO: Implement Try-Catch Error Handling
class RestaurantApiSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getRestaurantImageSmall(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_IMAGE_SMALL(id));
    return response.json();
  }

  static async getRestaurantImageMedium(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(id));
    return response.json();
  }

  static async getRestaurantImageLarge(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_IMAGE_LARGE(id));
    return response.json();
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postCustomerReview({ id, name, review }) {
    const customerReview = {
      id: id,
      name: name,
      review: review,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerReview),
    };

    const response = await fetch(API_ENDPOINT.RESTAURANT_ADD_REVIEW, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantApiSource;
