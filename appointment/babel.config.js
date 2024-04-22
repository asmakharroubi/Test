// Make sure your babel.config.js file contains a valid JSON object
// Example babel.config.js file:

// module.exports = {
//     presets: [
//       "@babel/preset-env",
//       "@babel/preset-react"
//     ],
//     plugins: [
//       "@babel/plugin-proposal-class-properties"
//     ]
//   };

  module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
  };

  