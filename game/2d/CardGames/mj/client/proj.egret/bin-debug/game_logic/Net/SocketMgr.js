var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/17.
 */
/*网路通讯管理器*/
var SocketMgr = (function () {
    function SocketMgr() {
        this.init();
    }
    // 初始化管理器
    SocketMgr.prototype.init = function () {
        this._socket = new egret.WebSocket();
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
    };
    SocketMgr.prototype.onConnect = function (event) {
        trace("连接成功");
        var cmd = "well done!";
        // 链接成功的处理逻辑
        this._socket.writeUTF(cmd);
        this._socket.flush();
    };
    // 接收协议
    SocketMgr.prototype.onReceiveMessage = function (e) {
        var msg = this._socket.readUTF();
        console.log("收到数据：" + msg);
    };
    // 链接失败的io错误
    SocketMgr.prototype.onIOError = function (event) {
        trace("connection failed");
        // 连接失败的处理逻辑
    };
    /*
    * 连接
    * */
    SocketMgr.prototype.connect = function (host, port) {
        this._socket.connect(host, port);
    };
    /*url链接服务器*/
    SocketMgr.prototype.conectByUrl = function (url) {
        this._socket.connectByUrl(url);
    };
    Object.defineProperty(SocketMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!SocketMgr._inst)
                SocketMgr._inst = new SocketMgr();
            return SocketMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return SocketMgr;
}());
SocketMgr._inst = null;
__reflect(SocketMgr.prototype, "SocketMgr");
