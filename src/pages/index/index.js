import '../../styles/index';
import '../../styles/global.scss';

import headerTemplate from '../../components/header';
import helloTemplate from './components/hello';
import loginTemplate from './components/login';

const headerHtml = headerTemplate({ title: 'Header' });
const helloHtml = helloTemplate();
const loginHtml = loginTemplate();

document.getElementById('root').innerHTML = [
  headerHtml,
  helloHtml,
  loginHtml
].join('');
