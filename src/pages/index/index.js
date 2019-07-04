import '../../styles/index';
import '../../styles/global.scss';

import headerTemplate from '../../components/headerTemplate';

import helloHtml from './components/helloHtml';
import loginTemplate from './components/loginTemplate';

const headerHtml = headerTemplate({ title: 'Header' });
const loginHtml = loginTemplate();

document.getElementById('root').innerHTML = [
  headerHtml,
  helloHtml,
  loginHtml
].join('');
