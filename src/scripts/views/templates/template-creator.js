import API_ENDPOINT from '../../globals/api-endpoint.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

const createAppBarTemplate = () => `
  <div class="icon-group">
    <a href="#" class="app-icon">
      <picture>
        <source type="image/webp" srcset="./images/appicon.webp">
        <source type="image/jpeg" srcset="./images/appicon.png">
        <img src="./images/appicon.png" alt="Ryouri Explorer">
      </picture>
    </a>
    <button id="nav-drawer-btn" aria-label="Open navigation menu"></button>
  </div>
  <nav class="nav-drawer">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#/favorite">Favorite</a></li>
      <li><a href="https://linkedin.com/in/bimaadityokurniawan/" target="_blank" rel="noreferrer">About Us</a></li>
    </ul>
  </nav>
`;

const createFooterBarTemplate = () => `
  <p>Copyright &#169 2024 Ryouri Explorer</p>
  <p>by Bima Adityo Kurniawan</p>
`;

const createHeroBannerTemplate = () => `
  <section class="hero">
    <div class="hero-text">
      <h1 tabindex="0">Your Culinary Journey Starts Here</h1>
      <p>Discover hidden food gems, explore authentic reviews, and embark on a culinary adventure. Your next favorite dish is just a click away</p>
    </div>
    <picture>
      <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image-small.webp">
      <source type="image/webp" media="(max-width: 1024px)" srcset="./images/hero-image-medium.webp">
      <source type="image/webp" media="(min-width: 1025px)" srcset="./images/hero-image-large.webp">
      <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-image-large.jpg">
      <source type="image/jpeg" media="(max-width: 1024px)" srcset="./images/hero-image-medium.jpg">
      <source type="image/jpeg" media="(min-width: 1025px)" srcset="./images/hero-image-large.jpg">
      <img src="./images/hero-image-medium.jpg" alt="Ingredients and spices" />
    </picture>
  </section>
`;

const createWhyUsElementTemplate = () => `
  <section class="why-us">
    <h2 tabindex="0">Why Ryouri Explorer?</h2>
    <div class="why-list">
      <section class="why-item">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/chef-small.webp">
          <source type="image/webp" media="(max-width: 1024px)" srcset="./images/chef-medium.webp">
          <source type="image/webp" media="(min-width: 1025px)" srcset="./images/chef-large.webp">
          <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/chef-large.jpg">
          <source type="image/jpeg" media="(max-width: 1024px)" srcset="./images/chef-medium.jpg">
          <source type="image/jpeg" media="(min-width: 1025px)" srcset="./images/chef-large.jpg">
          <img src="./images/chef-medium.jpg" alt="A chef preparing dessert" />
        </picture>
        <h3 tabindex="0">Get Expert Insights</h3>
        <p>
          Our team of experienced food enthusiasts provides detailed and informative reviews of each restaurant. From the quality of the food to the ambiance and service, we cover everything you need to know before making a reservation.
        </p>
      </section>
      <section class="why-item">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/eating-small.webp">
          <source type="image/webp" media="(max-width: 1024px)" srcset="./images/eating-medium.webp">
          <source type="image/webp" media="(min-width: 1025px)" srcset="./images/eating-large.webp">
          <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/eating-large.jpg">
          <source type="image/jpeg" media="(max-width: 1024px)" srcset="./images/eating-medium.jpg">
          <source type="image/jpeg" media="(min-width: 1025px)" srcset="./images/eating-large.jpg">
          <img src="./images/eating-medium.jpg" alt="People enjoying food and beverages on a table" />
        </picture>
        <h3 tabindex="0">Discover New Culinary Adventures</h3>
        <p>
          Ryouri Explorer is a curated platform designed to introduce you to a diverse range of restaurants and cuisines. Whether you're a seasoned foodie or just starting to explore the world of food, our expert reviews and recommendations will help you find hidden gems and unique dining experiences.
        </p>
      </section>
      <section class="why-item">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/time-and-money-small.webp">
          <source type="image/webp" media="(max-width: 1024px)" srcset="./images/time-and-money-medium.webp">
          <source type="image/webp" media="(min-width: 1025px)" srcset="./images/time-and-money-large.webp">
          <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/time-and-money-large.jpg">
          <source type="image/jpeg" media="(max-width: 1024px)" srcset="./images/time-and-money-medium.jpg">
          <source type="image/jpeg" media="(min-width: 1025px)" srcset="./images/time-and-money-large.jpg">
          <img src="./images/time-and-money-medium.jpg" alt="Time and Money" />
        </picture>
        <h3 tabindex="0">Save Time and Money</h3>
        <p>
          With Ryouri Explorer, you can efficiently search for restaurants that match your preferences and budget. Our user-friendly platform allows you to filter results based on various criteria, such as cuisine, price range, and location. This saves you time and helps you make informed decisions about where to dine.
        </p>
      </section>
    </div>
  </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <section id="${restaurant.id}" class="restaurant-item" tabindex="0">
    <picture>
      <source type="image/webp" srcset="${API_ENDPOINT.RESTAURANT_IMAGE_SMALL(restaurant.pictureId)}">
      <source type="image/jpeg" srcset="${API_ENDPOINT.RESTAURANT_IMAGE_SMALL(restaurant.pictureId)}">
      <img src="./images/placeholder.jpg" class="lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE_SMALL(restaurant.pictureId)}" alt="${restaurant.name}'s showcase">
    </picture>
    <h3 tabindex="0" class="item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
    <p class="item-location"><span>Lokasi:</span> ${restaurant.city || '-'}</p>
    <p class="item-rating"><span>Rating:</span> ${restaurant.rating || '-'}<span>&#9733;</span></p>
  </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article id="${restaurant.id}" class="restaurant-detail">
    <picture>
      <source media="(max-width: 600px)" srcset="${API_ENDPOINT.RESTAURANT_IMAGE_SMALL(restaurant.pictureId)}">
      <source media="(max-width: 1024px)" srcset="${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(restaurant.pictureId)}">
      <source media="(min-width: 1025px)" srcset="${API_ENDPOINT.RESTAURANT_IMAGE_LARGE(restaurant.pictureId)}">
      <img src="./images/placeholder.jpg" class="lazyload detail-image" data-src="${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}'s showcase">
    </picture>
    <div class="inline">
      <h2 tabindex="0">${restaurant.name}</h2>
      <p class="detail-rating">${restaurant.rating}<span>&#9733;</span></p>
    </div>
    <p class="detail-location">${restaurant.city}</p>
    <p class="detail-description">${restaurant.description}</p>
    <ul class="categories" aria-label="restaurant-categories"></ul>
    <section class="menu">
      <h3 tabindex="0">Menu</h3>
      <section class="foods">
        <div class="iconed-title">
          <h4 tabindex="0">Foods</h4>
          <i class="fa-solid fa-utensils"></i>
        </div>
      </section>
      <section class="drinks">
        <div class="iconed-title">
          <h4 tabindex="0">Drinks</h4>
          <i class="fa-solid fa-martini-glass-citrus"></i>
        </div>
      </section>
    </section>
    <section class="customer-reviews">
      <div class="inline">
        <h3 tabindex="0">Customer Reviews</h3>
        <button id="add-review-btn">
          Add Review
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <div class="customer-reviews-container"></div>
      <add-review></add-review>
    </section>
  </article>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <section class="customer-review">
    <img src="./images/person.svg" alt="${customerReview.name || 'unknown'}'s profile">
    <h4 tabindex="0">${customerReview.name || '-'}</h4>
    <p class="review">${customerReview.review || '-'}</p>
    <p class="date-posted">${customerReview.date || '-'}</p>
  </section>
`;

const createAddReviewTemplate = () => `
  <dialog>
    <button aria-label="close dialog" id="close-dialog-btn">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <form id="add-review-form" method="dialog" autocomplete="off">
      <label for="review-name">Name</label>
      <input 
        id="review-form-name" 
        name="review-name" 
        type="text"
        autofocus
        required
      />
      <label for="review-description">Description</label>
      <textarea 
        id="review-form-description" 
        name="review-description"
        type="text"
        required
      ></textarea>
      <button id="review-form-submit-btn" type="submit">Submit Review</button>
    </form>
  </dialog>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favorite" class="favorite-btn">
     <i class="fa-regular fa-star"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favorite" class="favorite-btn">
     <i class="fa-solid fa-star"></i>
  </button>
`;

export {
  createAppBarTemplate,
  createFooterBarTemplate,
  createHeroBannerTemplate,
  createWhyUsElementTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewTemplate,
  createAddReviewTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
