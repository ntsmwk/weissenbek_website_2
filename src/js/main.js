import '/_site/css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import 'tw-elements';
import $ from "jquery";

Alpine.plugin(intersect);
Alpine.start();

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
