/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: '3.34', shippedProposals: true } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic', development: process.env.NODE_ENV !== 'production' }],
  ],
  plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-styled-components'],
};
