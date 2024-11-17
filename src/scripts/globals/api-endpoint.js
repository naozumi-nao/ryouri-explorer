import CONFIG from './config.js';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  RESTAURANT_IMAGE_SMALL: (id) => `${CONFIG.BASE_IMAGE_URL}/small/${id}`,
  RESTAURANT_IMAGE_MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}/medium/${id}`,
  RESTAURANT_IMAGE_LARGE: (id) => `${CONFIG.BASE_IMAGE_URL}/large/${id}`,
  RESTAURANT_SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  RESTAURANT_ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
