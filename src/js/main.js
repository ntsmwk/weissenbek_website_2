import { portfolio } from '/_site/js/portfolio.js';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import 'tw-elements';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-700.css';
import '@fontsource/aldrich';

import '/_site/css/style.css';

Alpine.plugin(intersect);
Alpine.data('portfolio', portfolio);
Alpine.start();
