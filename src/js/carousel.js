export function carousel() {
  return {
    currentImage: 1,
    imageCountCarousel: 3,

    initialize: function () {
      setInterval(() =>{
        this.forwardButton();
      }, 6000);
    },

    backButton: function (_event) {
      this.currentImage  = 
        this.selected == 1
        ? this.imageCountCarousel
        : this.currentImage - 1;
      console.error(this.currentImage);
    },
    forwardButton: function (_event) {
      this.currentImage =
        this.currentImage == this.imageCountCarousel
          ? 1
          : this.currentImage + 1;
      console.error(this.currentImage);
    },
  };
}
