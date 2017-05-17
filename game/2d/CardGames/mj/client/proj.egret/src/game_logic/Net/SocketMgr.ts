/**
 * Created by confiner.kang on 2017/5/17.
 */
/*网路通讯管理器*/
class SocketMgr{
    // 负责连接服务器
    private _socket:egret.WebSocket;
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        this._socket = new egret.WebSocket();
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
    }

    private onConnect(event:egret.Event):void {
        trace("连接成功");
        let cmd:string = "well done!";
        // 链接成功的处理逻辑
        this._socket.writeUTF(cmd);
    }

    // 接收协议
    private onReceiveMessage(e:egret.Event):void {
        var msg = this._socket.readUTF();
        console.log("收到数据：" + msg);
    }

    // 链接失败的io错误
    private onIOError(event:egret.IOErrorEvent):void{
        trace("connection failed");

        // 连接失败的处理逻辑
    }

    /*
    * 连接
    * */
    public connect(host:string, port:number):void{
        this._socket.connect(host, port);
    }

    private static _inst:SocketMgr = null;
    /*对外提供唯一单例*/
    public static get inst():SocketMgr{
        if(!SocketMgr._inst)
            SocketMgr._inst = new SocketMgr();

        return SocketMgr._inst;
    }
}