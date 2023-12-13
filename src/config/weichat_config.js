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

exports.getAirKissJsConfig = (wechatApi, config) => new Promise((resolve, reject) => {

    var param = {
        debug: false,
        jsApiList: [
        "openWXDeviceLib",//初始化设备库（仅仅支持蓝牙设备）
        "closeWXDeviceLib",//关闭设备库（仅仅支持蓝牙设备）
        "getWXDeviceInfos",//获取设备信息（获取当前用户已绑定的蓝牙设备列表）
        "sendDataToWXDevice",//发送数据给设备
        "startScanWXDevice",//扫描设备（获取周围全部的设备列表，不管绑定还是未被绑定的设备都会扫描到）
        "stopScanWXDevice",//停止扫描设备
        "connectWXDevice",//连接设备
        "disconnectWXDevice",//断开设备连接
        "getWXDeviceTicket",//获取操作凭证

        //以下是监听事件：
        "onWXDeviceBindStateChange",//微信client设备绑定状态被改变时触发此事件
        "onWXDeviceStateChange",//监听连接状态。能够监听连接中、连接上、连接断开
        "onReceiveDataFromWXDevice",//接收到来自设备的数据时触发
        "onScanWXDeviceResult",//扫描到某个设备时触发
        "onWXDeviceBluetoothStateChange",//手机蓝牙打开或关闭时触发
        "configWXDeviceWiFi",
            ],
        url: config.airkissDomain
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


