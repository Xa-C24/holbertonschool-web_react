const path = require('path');

module.exports = {
  entry: './js/main.ts', // Chemin correct du fichier d'entrée
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Fichier de sortie dans 'dist'
  },
  mode: 'development', // Ajout pour éviter le warning
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
