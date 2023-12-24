import { Configuration } from 'webpack';
import * as path from 'path'

const config: Configuration = {
  target: 'node',
  mode: 'production',
  entry: {
    events: path.resolve('src/functions/events/index.ts')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    library: {
      type: 'commonjs',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      }
    ]
  }
}

export default config