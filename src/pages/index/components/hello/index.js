import merge from 'lodash/merge';

import template from './index.hbs';
import styles from './index.scss';
import logo from '../../../../assets/images/logo.svg';

export default context => {
  const newContext = merge({}, { styles, images: { logo } }, context);
  return template(newContext);
};
