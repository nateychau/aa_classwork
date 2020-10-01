const path = require("path");

module.exports = {
    entry: "./react_minesweeper.jsx",
    output: {
        path: path.resolve(__dirname), //put in root of tree
        filename: "bundle.js"
    },
    devtool: 'source-map', //gives linen of code for errors
    resolve: {
        extensions: [".js", ".jsx", "*"] //makes importing easier, adds extensions to files 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, //read all js and jsx files
                exclude: /(node_modules)/, //makes it ignore files in node node_modules
                use: {
                    loader: 'babel-loader', //tells webpack to use this to apply changes
                    query: {
                        presets: ['@babel/env', '@babel/react'] //rules we set when webpack goes 
                    }
                }
            }
        ]
    }
}