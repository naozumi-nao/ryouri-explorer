import { createAddReviewTemplate } from '../views/templates/template-creator.js';

class AddReview extends HTMLElement {
  _submitEvent = 'ryouri-explorer:submit';
  _addReviewEvent = 'ryouri-explorer:add-review';

  constructor() {
    super();

    this.innerHTML = createAddReviewTemplate();
    this.dialogCloseHandler();
    this.dialogSubmitHandler();
  }

  dialogCloseHandler() {
    const dialog = this.querySelector('dialog');
    const closeDialogBtn = this.querySelector('#close-dialog-btn');
    closeDialogBtn.addEventListener('click', () => {
      dialog.close();
    });
  }

  dialogSubmitHandler() {
    const form = this.querySelector('form');
    form.addEventListener('submit', (event) => {
      this._onFormSubmit(event, this);
    });
    this.addEventListener(this._submitEvent, this._onAddReviewSubmit);
  }

  _onFormSubmit(event, instance) {
    instance.dispatchEvent(new CustomEvent(this._submitEvent));
    event.preventDefault();
  }

  _onAddReviewSubmit() {
    const name = this.querySelector('#review-form-name').value;
    const description = this.querySelector('#review-form-description').value;

    this.dispatchEvent(
      new CustomEvent(this._addReviewEvent, {
        detail: { name, description },
      }),
    );
    this.querySelector('dialog').close();
  }
}

customElements.define('add-review', AddReview);
