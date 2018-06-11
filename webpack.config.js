var webpack = require("webpack");
var path = require("path");

//serve app related configurations
var DIST_DIR = path.resolve(__dirname, "dist");
//save source configuartions
var SRC_DIR = path.resolve(__dirname, "src");
//webpack configurations
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
