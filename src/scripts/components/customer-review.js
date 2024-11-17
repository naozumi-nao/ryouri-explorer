import { createCustomerReviewTemplate } from '../views/templates/template-creator.js';

class CustomerReview extends HTMLElement {
  _customerReview = {
    name: null,
    review: null,
    date: null,
  };

  set customerReview(value) {
    this._customerReview = value;
    this.render();
  }

  get customerReview() {
    return this._customerReview;
  }

  constructor() {
    super();
  }

  render() {
    this.innerHTML = createCustomerReviewTemplate(this._customerReview);
  }
}

customElements.define('customer-review', CustomerReview);
