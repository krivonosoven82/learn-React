const path = require('path');

module.exports = {
  entry: "./app/app.js", //входная точка - главный файл
  output: { //
    path: path.resolve(__dirname, "./public"), //путь к каталогу выходный файлов - папка public - Это тот файл, который будет подключаться на веб-страницу
    publicPath: "/public/",
    filename: "bundle.js" //название создаваемого файла
  },
  module: {
      rules: [ //загрузчик для js
        {
          test: /\.js?$/, //определяем тип файлов
          exclude: /(node_modules)/, //исключаем из обработкм папку node_modules
          loader: "babel-loader", //определяем загрузчик
          options:{
            presets:["env", "react"] //используемые плагины
          }
        }
      ]
    }
  }
