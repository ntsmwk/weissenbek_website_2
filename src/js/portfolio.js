export function portfolio() {
  return {
    selectedCategory: 0,
    selectedImage: -1,
    imageCountKitchen: 17,
    imageCountDiningRoom: 17,
    imageCountBathroom: 11,
    imageCountLivingRoom: 10,
    imageCountEntrance: 15,

    bindSelectedImageToImageTag: function () {
      if (this.selectedImage == -1) {
        return '';
      }
      return document.getElementById(this.selectedImage).dataset.src;
    },
    backButton: function (_event) {
      _event.stopPropagation();
      prefix = this.selectedImage.slice(0, 17);
      this.selectedImage =
        this.selectedImage.slice(17) == 1
          ? this.lastImageByCategory(_event, prefix)
          : prefix + (parseInt(this.selectedImage.slice(17)) - 1);
    },
    forwardButton: function (_event) {
      _event.stopPropagation();
      prefix = this.selectedImage.slice(0, 17);
      this.selectedImage =
        this.selectedImage.slice(17) == this.imgCountByCategory(_event, prefix)
          ? prefix + '1'
          : prefix + (parseInt(this.selectedImage.slice(17)) + 1);
    },

    imgCountByCategory: function (_event, prefix) {
      if (prefix.endsWith('kit-')) {
        return this.imageCountKitchen;
      } else if (prefix.endsWith('din-')) {
        return this.imageCountDiningRoom;
      } else if (prefix.endsWith('bat-')) {
        return this.imageCountBathroom;
      } else if (prefix.endsWith('liv-')) {
        return this.imageCountLivingRoom;
      } else if (prefix.endsWith('ent-')) {
        return this.imageCountEntrance;
      } else {
        return 1;
      }
    },

    lastImageByCategory: function (_event, prefix) {
      return prefix + this.imgCountByCategory(_event, prefix);
    },
  };
}
