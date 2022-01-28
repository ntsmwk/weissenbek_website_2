import '/_site/css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import 'tw-elements';

Alpine.plugin(intersect);
Alpine.start();

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
