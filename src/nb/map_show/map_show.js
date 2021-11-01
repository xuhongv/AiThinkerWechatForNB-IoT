/**
 *  获取js签名
 *
 * @param wechatApi
 * @param config
 */


exports.getJsConfig = (wechatApi, config) => new Promise((resolve, reject) => {

    var param = {
        debug: false,
        jsApiList: ['scanQRCode'],
        url: config.myDomain
    };

    wechatApi.getJsConfig(param, (err, token) => {
        if (null == err) {
            resolve(token)
        } else {
            err.des = "获取JS配置参数失败"
            throw (err)
        }
    })
})

exports.getJsConfigy = 11