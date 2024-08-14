const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //punto de entrada de la apliación 
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //loaders para procesar archivos css
            },
            {
                test: /\.js$/, //regex para identificar archivos js
                exclude: /node_modules/, //excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //loader para convertir JS moderno a JS compatible con más navegadores
                    options:{
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //genera source maps para facilitar la depuración
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist'), //carpeta del que correrá el servidor
        }, 
        compress: true, //habilitar compresión gzip
        port : 9000, //puerto del servidor de desarrollo
    },
};