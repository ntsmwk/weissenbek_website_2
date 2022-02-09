import { portfolio } from '/_site/js/portfolio.js';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import 'tw-elements';

import '/_site/css/style.css';
Alpine.plugin(intersect);
Alpine.data('portfolio', portfolio);
Alpine.start();
