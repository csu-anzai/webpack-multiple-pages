const config = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  ignoreFiles: [
    '**/.git/',
    '**/.svn/',
    '**/.hg/',
    '**/CVS/',
    '**/.DS_Store/',
    '**/node_modules/',
    '**/lib/',
    '**/libs/',
    '**/typings/',
    '**/jsconfig.json',
    '**/build/',
    '**/dist/',
    '**/*.min.*'
  ]
};

module.exports = config;
