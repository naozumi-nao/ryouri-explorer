import { merge } from 'webpack-merge';
import { resolve } from 'path';
import common from './webpack.common.js';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
const __dirname = import.meta.dirname;

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: resolve(__dirname, 'dist'),
    watchFiles: ['index.html', 'src/**/*'],
    hot: true,
    open: true,
    port: 9000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
});
