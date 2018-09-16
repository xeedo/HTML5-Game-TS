const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
      filename: 'game.js',
      path: path.resolve(__dirname, 'build')
    }, 
    resolve: {
        extensions: ['.ts']
    }, 
    module: {
        rules: [
            {test: /\.ts/, use: "ts-loader"}
        ]
    },
    devtool: "inline-source-map"
  };