import merge from 'lodash/merge';

import template from './index.hbs';
import styles from './index.scss';

export default (context) => {
  const newContext = merge({}, { styles }, context);
  return template(newContext);
};
