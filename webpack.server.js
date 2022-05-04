const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: ['./server/index.jsx'],
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.jsx',
    path: path.resolve(__dirname, './server'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.mp3$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.css$/,
        use: ['file-loader'],
      },
    ],
  },
}
