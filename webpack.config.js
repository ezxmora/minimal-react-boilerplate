const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: env.production ? 'production' : 'development',
  stats: env.production ? 'errors-only' : 'errors-warnings',
  module: {
    rules: [
      {
        // Checks for .js or .jsx files
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              { targets: { esmodules: true }, bugfixes: true, modules: false },
            ],
            ['@babel/preset-react', { runtime: 'automatic' }]
          ]
        },
      },
      {
        // Checks for .css or .scss files
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Images
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '...'],
    mainFiles: ['index'],
    alias: {
      Components: path.resolve(__dirname, 'src', 'Components'),
      Hooks: path.resolve(__dirname, 'src', 'Hooks'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
});
