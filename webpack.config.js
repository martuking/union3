var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'react');

module.exports = {
    entry: {
        'app': "./react/index",
    },
    output: {
        filename: "bundle.js",
    path: path.resolve(__dirname, './public/js/')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".json"]
    },

    module: {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel'
          }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};