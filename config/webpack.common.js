const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { prodSourceMap } = require('./');
const { pages } = require('./pages');
const { env, prodMode } = require('./env');
const { public: publicPath, src: srcPath, dist: distPath } = require('./paths');

/**
 * { app: [ '@babel/polyfill', 'root/src/pages/index/index.js' ] }
 */
const entry = (() => {
  let entry = {};
  for (const page of pages) {
    const { name } = page;
    const entryPath = path.resolve(srcPath, 'pages', name, 'index');
    entry[name] = ['@babel/polyfill', entryPath];
  }
  return entry;
})();

const HtmlWebpackPluginList = (() => {
  let list = [];
  const minifyOptions = {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true
  };
  const minify = prodMode ? minifyOptions : false;
  for (const page of pages) {
    const { name, title } = page;
    const template = path.resolve(publicPath, 'index.hbs');
    list.push(
      new HtmlWebpackPlugin({
        title,
        filename: `${name}.html`,
        template,
        minify,
        chunks: ['vendor', name]
      })
    );
  }
  return list;
})();

const styleRule = (() => {
  let sourceMap = true;
  prodMode && (sourceMap = prodSourceMap);
  const rule = {
    test: /\.(css|scss)$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      /* {
        loader: 'style-loader',
        options: {
          sourceMap: sourceMap
        }
      }, */
      {
        loader: 'css-loader',
        options: {
          sourceMap: sourceMap
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: sourceMap
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: sourceMap,
          sourceMapContents: sourceMap
        }
      }
    ]
  };
  return rule;
})();

const commonConfig = {
  mode: env,
  entry: entry,
  output: {
    path: distPath,
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', ':data-src'],
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(handlebars|hbs)$/,
        use: {
          loader: 'handlebars-loader'
        }
      },
      styleRule,
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
        include: srcPath
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/images/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: HtmlWebpackPluginList.concat([
    new FaviconsWebpackPlugin({
      logo: path.resolve(publicPath, 'favicon.svg'),
      prefix: 'assets/icons-[hash]/',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    })
  ])
};

module.exports = commonConfig;
