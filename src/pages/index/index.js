import '../../styles/index';
import '../../styles/global.scss';

import headerTemplate from '../../components/header/index.handlebars';
import '../../components/header/styles/index.scss';

const html = headerTemplate();

document.getElementById('root').innerHTML = html;
