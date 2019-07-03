import '../../styles/index';
import '../../styles/global.scss';

import headerTemplate from '../../components/headerTemplate';

import helloHtml from './components/helloHtml';

const headerHtml = headerTemplate();

document.getElementById('root').innerHTML = [headerHtml, helloHtml].join('');
