import template from './index.hbs';
import styles from './index.scss';

import merge from 'lodash/merge';

export default context => {
  const newTemplate = merge({}, { styles }, context);
  return template(newTemplate);
};
