const modal = {
  isHidden: true,
  selectedImage: '',
  init() {
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom() {
    this.imageContainer = document.querySelector('.images');
    this.backgroundOverlay = document.querySelector('.bg');
    this.modalContainer = document.querySelector('.modal-container');
    this.closeBtn = document.querySelector('.close');
    this.modalImage = document.querySelector('.modal-image');
  },
  bindEventListeners() {
    this.closeBtn.addEventListener('click', this.hideModal.bind(this));
    this.backgroundOverlay.addEventListener('click', this.hideModal.bind(this));
    this.imageContainer.addEventListener('click', this.showModal.bind(this));
  },
  hideModal() {
    this.isHidden = true;
    this.selectedImage = '';
    this.render();
  },
  showModal(evt) {
    if (evt.target.tagName === 'IMG') {
      this.isHidden = false;
      this.selectedImage = evt.target.src;
      this.render();
    }
  },
  render() {
    if (this.isHidden) {
      this.modalContainer.classList.add('hidden');
      this.backgroundOverlay.classList.add('hidden');
    } else {
      this.modalContainer.classList.remove('hidden');
      this.backgroundOverlay.classList.remove('hidden');
      this.modalImage.src = this.selectedImage;
    }
  },
};


modal.init();
