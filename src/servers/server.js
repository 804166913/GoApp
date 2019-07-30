//引用node的http模块
var http = require('http');
var fs = require('fs')
var url = require('url')
//创建一个服务器并指定请求处理函数
http.createServer(function(req,res){
        console.log("收到的请求地址为"+req.url);
        //获取请求的信息
        var requestMessage = url.parse(req.url).path
        //设置跨域传输
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Allow-Credentials","true");
        res.setHeader('Content-Type','text/html;charset=utf-8')//需要传输其他文件时更改成其他格式即可
        //设置返回的请求状态 200位成功 和返回头部及文件编码
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        //向客户端返回内容
        if(requestMessage=="/swipe")//请求图片
        fs.readFile("../serverFile/imgurl.json",function(err, data){
            if(err)console.log(err);
               
            res.end(data);
        })
})
//监听 8888 端口
.listen(8888);
console.log('服务器开启在：http://localhost:8888/');