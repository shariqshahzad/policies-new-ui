import webpackRemoteConfig from '@takamol/react-qiwa-core/utils/webpackRemoteConfig';
import webpack, { container } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import pkg from '../package.json';

import { appPaths, createDevServerConfig, type NodeEnvironment, pluginOptions } from './setup';
import { getEnvs, getModes, useLoader, usePlugin } from './utils';

const MAX_IMAGE_SIZE_FOR_INLINE_IN_BYTES = 8192;

const remoteVisualsConfig = new container.ModuleFederationPlugin(webpackRemoteConfig(pkg.name, pkg.dependencies));

export default (mode: NodeEnvironment, portConfig?: Record<string, number | string>): webpack.Configuration => {
  const { isProd, isDev } = getModes(mode);
  const envs = getEnvs(mode);

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    mode,
    entry: appPaths.entry,
    output: {
      path: appPaths.dist,
      publicPath: '/',
      filename: isProd ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
      chunkFilename: isProd ? 'static/js/[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
      hashFunction: 'xxhash64',
    },
    resolve: {
      alias: {
        src: appPaths.src,
        react: path.resolve('node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
        'react-router-dom': path.resolve('./node_modules/react-router-dom'),
        '@tanstack/react-query': path.resolve('./node_modules/@tanstack/react-query'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      fallback: { path: require.resolve('path-browserify') },
    },
    devtool: isDev ? 'source-map' : undefined,
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: appPaths.src,
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'babel-plugin-named-asset-import',
                { loaderMap: { svg: { ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]' } } },
                isDev && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            ],
            cacheDirectory: true,
            cacheCompression: false,
            compact: isProd,
          },
        },
        {
          test: /\.css$/,
          use: [
            ...useLoader(isDev, { loader: 'style-loader' }),
            ...useLoader(isProd, MiniCssExtractPlugin.loader),
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: isDev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'url-loader',
          options: {
            name: 'static/media/[contenthash:8].chunk.[ext]',
            limit: MAX_IMAGE_SIZE_FOR_INLINE_IN_BYTES,
          },
        },
        {
          loader: 'file-loader',
          exclude: [/(^|\.(js|mjs|jsx|ts|tsx|css|bmp|gif|png|jpeg|jpg))$/, /\.html$/, /\.json$/],
          options: {
            name: 'static/media/[contenthash:8].chunk.[ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin({ terserOptions: pluginOptions.terserPluginOptions }), new CssMinimizerPlugin()],
    },
    ...(isDev
      ? {
          devServer: createDevServerConfig(portConfig),
        }
      : {}),
    plugins: [
      remoteVisualsConfig,
      new BundleAnalyzerPlugin({ analyzerMode: 'json' }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: './public/favicon.ico',
        inject: true,
        template: appPaths.template,
        ...(isProd ? pluginOptions.htmlWebpackPluginOptions : {}),
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[contenthash:8].chunk.css',
      }),
      ...usePlugin(!!envs.stringifiedEnvs, new webpack.DefinePlugin(envs.stringifiedEnvs)),
      ...usePlugin(isDev, new ReactRefreshWebpackPlugin()),
    ],
  };
};
