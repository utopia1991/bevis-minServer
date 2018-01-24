const express = require('express');
const app = express();
const port = 8082;
const bodyParser = require('body-parser');

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    next();
});

// 给 app 配置 bodyParser中间件
// 通过如下配置再路由种处理 request 时，可以直接获得 post 请求的 body 部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// __dirname 是 node 的全局变量，表示当前文件夹根目录
// 静态资源
app.use(express.static(__dirname + '/public'));

// 路由控制
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// 监控端口
app.listen(port, function () {
  console.log("应用地址 http://localhost: %s", port);
});