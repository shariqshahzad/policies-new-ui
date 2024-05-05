import path from 'path';
import { type WebpackConfiguration } from 'webpack-dev-server';
import { type TerserOptions, type MinimizerOptions } from 'terser-webpack-plugin';
import type HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line import/no-cycle
import { httpsConfig } from '../config/utils';

export enum NodeEnvironment {
  development = 'development',
  production = 'production',
  test = 'test',
}

export const appPaths = {
  src: path.resolve(process.cwd(), 'src'),
  entry: path.resolve(process.cwd(), 'src/index.ts'),
  dist: path.resolve(process.cwd(), 'dist'),
  public: path.resolve(process.cwd(), 'public'),
  template: path.resolve(process.cwd(), 'public/index.html'),
  tests: path.resolve(process.cwd(), 'tests'),
};

type PluginOptions = {
  terserPluginOptions?: MinimizerOptions<TerserOptions>;
  htmlWebpackPluginOptions?: HtmlWebpackPlugin.Options;
};

export const pluginOptions: PluginOptions = {
  htmlWebpackPluginOptions: {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  },
  terserPluginOptions: {
    parse: {
      ecma: 5,
    },
    compress: {
      ecma: 5,
      comparisons: false,
      inline: 2,
    },
    mangle: {
      safari10: false,
    },
    output: {
      ecma: 5,
      comments: false,
      ascii_only: true,
    },
  },
};

export const createDevServerConfig = (
  portConfig?: Record<string, number | string>,
): WebpackConfiguration['devServer'] => ({
  historyApiFallback: {
    disableDotRule: true,
    index: '/',
  },
  client: {
    overlay: false,
    logging: 'info',
  },
  static: {
    directory: appPaths.public,
    serveIndex: true,
    staticOptions: {},
    watch: true,
  },
  liveReload: false,
  hot: true,
  open: false,
  server: httpsConfig(),
  ...(portConfig ? portConfig : {}),
});
