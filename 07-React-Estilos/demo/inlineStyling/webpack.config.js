module.exports = {
  entry: './app.js', // ruta al entry point
  output: {
    path: __dirname + '/dist', // path donde webpack dejarǻ los archivos.
    filename: 'bundle.js', // archivo del bundle
  },
  module: {
    rules: [
             {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-react', '@babel/preset-env']
           }
         }
       },
       {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: 
              {
                modules: {
                  localIdentName: "[local]___[hash:base64:5]"
                }
              }
          }
        ]
      },{
        test: /\.gcss$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
