const express = require('express')
const wechat = require('wechat-api')
const wx_config = require('./config/weichat_config')
const config = require('./config')
const ejs = require("ejs");
const fs = require("fs");
const app = express()
const port = 8024


var wechatApi = new wechat(config.appID, config.appScrect) //实例 wechat-api 模块
// 扩展新api : updateInfo
// 第一个参数为扩展的新方法名，第二个参数为此 api 调用的微信的 apiurl 地址，会自动加上 token
wechat.patch("getJsNewConfig", "https://api.weixin.qq.com/card/membercard/updateuser");

//引用ejs
app.set('views', "public");	//设置视图的对应目录
app.set("view engine", "ejs");		//设置默认的模板引擎
app.engine('ejs', ejs.__express);		//定义模板引擎


app.get('/static/*', function (req, res) {
    res.sendFile(__dirname + "" + req.url)
})

//JS接口验证安全域名，用掉可删除
// app.get('/MP_verify_0oA3bhgZU4pFMta6.txt', function (req, res) {
//     res.sendFile('static/MP_verify_0oA3bhgZU4pFMta6.txt', { root: __dirname });
// })


//主页
app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/" + 'index/index.html')
})

//微信配网
app.get('/api/old/wifi/config', (req, res) => {
    //异步返回
    wx_config.getAirKissJsConfig(wechatApi, config).then(data => {
        res.render(__dirname + "/index/wechat/" + "airkiss.ejs", {data: JSON.stringify(data)});
    }).catch(e => {
        res.render(__dirname + "/index/wechat/" + "airkiss.ejs", {data: null});
    });
     
})

app.get("/index/nb_location", function (req, res) {
    //异步返回
    wx_config.getJsConfig(wechatApi, config).then(data => {
        res.render(__dirname + "/index/map_show/" + "index.ejs", {data: JSON.stringify(data)});
    }).catch(e => {
        res.render(__dirname + "/index/map_show/" + "index.ejs", {data: null});
    });
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})