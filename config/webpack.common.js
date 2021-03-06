const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

// Processing TS files
const configureTSLoader = () => ({
  test: /\.(ts|tsx|js|jsx)$/,
  exclude: /node_modules/,
  loader: 'ts-loader',
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.scss', '.css'],
  },
});

// Copy image files to build folder and compresses them
const configureImageLoader = () => ({
  test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        context: 'src', // prevent display of src/ in filename
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
        mozjpeg: {
          progressive: true,
          arithmetic: false,
        },
        optipng: {
          optimizationLevel: 5,
        },
        pngquant: {
          enabled: false,
        },
        gifsicle: {
          enabled: false,
        },
      },
    },
  ],
});

const configureSVGLoader = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        SVGO: false,
      },
    },
    {
      loader: 'url-loader',
    },
  ],
});

const configureFontLoader = () => ({
  test: /\.(ttf|eot|woff2?)$/i,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: '[path][name].[ext]',
    context: 'src', // prevent display of src/ in filename
  },
});

module.exports = {
  entry: [`${paths.src}/index.tsx`],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': paths.src,
      '@components': `${paths.src}/js/components`,
      '@domains': `${paths.src}/js/domains`,
      '@styles': `${paths.src}/styles`,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: paths.static,
        ignore: ['*.DS_Store'],
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'Caffeinator',
      favicon: `${paths.src}/images/bolt-favicon.png`,
      template: `${paths.src}/template.html`,
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      configureTSLoader(),
      configureImageLoader(),
      configureSVGLoader(),
      configureFontLoader(),
    ],
  },
};
