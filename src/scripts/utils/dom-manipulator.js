class DomManipulator {
  static emptyElement(element) {
    element.innerHTML = '';
  }

  static showElement(element) {
    element.style.display = 'block';
    element.hidden = false;
  }

  static showElementAsFlex(element) {
    element.style.display = 'flex';
    element.hidden = false;
  }

  static showElementAsGrid(element) {
    element.style.display = 'grid';
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = 'none';
    element.hidden = true;
  }

  static showLoading(elementContainer, loadingElement) {
    Array.from(elementContainer.children).forEach((element) => {
      this.hideElement(element);
    });
    this.showElementAsFlex(loadingElement);
  }
}

export default DomManipulator;
