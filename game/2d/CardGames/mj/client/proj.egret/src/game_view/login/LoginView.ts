/**
 * Created by confiner.kang on 2017/5/17.
 */
/*登录界面*/
class LoginView extends WindowBase{
    public constructor(winName: string, exml: string = null){
        super(winName, exml);
    }

    private btnLogin:eui.Image;

    initView(): void {
    }

    initEvent(): void {
        trace("initEvent");
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    }

    private touchHandler(evt:egret.TouchEvent):void{
        // 登录进入加载资源---->开始游戏
        // 此处当作场景界面来处理直接执行开始逻辑
        trace("登录成功");
        // 预加载资源
        ResourceMgr.inst.loadGroup("preload", ()=>{
            trace("预加载资源完成");
            var sceneID:number = 1; // 由服务器提供
            SceneMgr.inst.enter(sceneID);
        });

        // 链接服务器
        SocketMgr.inst.connect("echo.websocket.org", 80);
    }

    removeEvent(): void {
        trace("removeEvent");
        this.btnLogin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    }

    dispose(): void {
    }
}