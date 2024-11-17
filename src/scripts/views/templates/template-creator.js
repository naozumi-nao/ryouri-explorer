import API_ENDPOINT from '../../globals/api-endpoint.js';

const createAppBarTemplate = () => `
  <div class="icon-group">
    <a href="#" class="app-icon"><img src="./images/appicon.png" alt="Ryouri Explorer"></a>
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
    <h1 tabindex="0">Your Culinary Journey Starts Here</h1>
    <p>Discover hidden food gems, explore authentic reviews, and embark on a culinary adventure. Your next favorite dish is just a click away</p>
  </section>
`;

const createWhyUsElementTemplate = () => `
  <section class="why-us">
    <h2 tabindex="0">Why Ryouri Explorer?</h2>
    <div class="why-list">
      <section class="why-item">
        <img src="./images/heros/chef.jpg" alt="A chef preparing dessert" />
        <h3 tabindex="0">Get Expert Insights</h3>
        <p>
          Our team of experienced food enthusiasts provides detailed and informative reviews of each restaurant. From the quality of the food to the ambiance and service, we cover everything you need to know before making a reservation.
        </p>
      </section>
      <section class="why-item">
        <img src="./images/heros/eating.jpg" alt="People enjoying food and beverages on a table" />
        <h3 tabindex="0">Discover New Culinary Adventures</h3>
        <p>
          Ryouri Explorer is a curated platform designed to introduce you to a diverse range of restaurants and cuisines. Whether you're a seasoned foodie or just starting to explore the world of food, our expert reviews and recommendations will help you find hidden gems and unique dining experiences.
        </p>
      </section>
      <section class="why-item">
        <img src="./images/heros/time-and-money.jpg" alt="Time and Money" />
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
    <img src="${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}'s showcase">
    <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p class="item-location"><span>Lokasi:</span> ${restaurant.city}</p>
    <p class="item-rating"><span>Rating:</span> ${restaurant.rating}<span>&#9733;</span></p>
  </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article id="${restaurant.id}" class="restaurant-detail">
    <img class="detail-image" src="${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}'s showcase">
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
    <img src="./images/person.svg" alt="${customerReview.name}'s profile">
    <h4 tabindex="0">${customerReview.name}</h4>
    <p class="review">${customerReview.review}</p>
    <p class="date-posted">${customerReview.date}</p>
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
      <button type="submit">Submit Review</button>
    </form>
  </dialog>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favorite" class="favorite-btn">
     <i class="fa-regular fa-star"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favorite" class="favorite-btn">
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
