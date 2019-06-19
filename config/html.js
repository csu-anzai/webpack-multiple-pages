const title = 'Webpack Multiple Pages';

const htmlList = [
  {
    input: {
      html: 'index',
      js: 'index'
    },
    output: {
      html: 'index',
      htmlTitle: title,
      js: 'index'
    }
  }
];

const faviconAppTitle = title;

module.exports = { htmlList, faviconAppTitle };
