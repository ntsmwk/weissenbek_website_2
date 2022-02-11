export function carousel() {
  return {
    currentImage: 1,
    imageCountCarousel: 3,
    interval: null,

    initialize: function () {
      this.interval = setInterval(() =>{
        this.forwardButton();
      }, 5000);
    },

    backButton: function (_event) {
      clearInterval(this.interval);
      this.currentImage  = 
        this.currentImage == 1
        ? this.imageCountCarousel
        : this.currentImage - 1;
      this.interval = setInterval(() =>{
        this.forwardButton();
      }, 5000);
  
    },
    forwardButton: function (_event) {
      clearInterval(this.interval);

      this.currentImage =
        this.currentImage == this.imageCountCarousel
          ? 1
          : this.currentImage + 1;
      
      this.interval = setInterval(() =>{
        this.forwardButton();
      }, 5000);
    
    },
  };
}
