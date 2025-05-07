var path = require("path");

module.exports = {
    entry: {
        app: "./app/assets/scripts/app.js",
        vendor: "./app/assets/scripts/vendor.js"
    },
    output: {
        //with the help of path package you dont have to give absolute path
        path: path.resolve(__dirname, './app/scripts'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                test : /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}