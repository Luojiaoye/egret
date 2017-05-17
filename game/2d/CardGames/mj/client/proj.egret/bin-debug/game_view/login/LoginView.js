var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/17.
 */
/*登录界面*/
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView(winName, exml) {
        if (exml === void 0) { exml = null; }
        return _super.call(this, winName, exml) || this;
    }
    LoginView.prototype.initView = function () {
    };
    LoginView.prototype.initEvent = function () {
        trace("initEvent");
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    LoginView.prototype.touchHandler = function (evt) {
        // 登录进入加载资源---->开始游戏
        // 此处当作场景界面来处理直接执行开始逻辑
        trace("登录成功");
        // 预加载资源
        ResourceMgr.inst.loadGroup("preload", function () {
            trace("预加载资源完成");
            var sceneID = 1; // 由服务器提供
            SceneMgr.inst.enter(sceneID);
        });
        // 链接服务器
        SocketMgr.inst.connect("localhost", 818);
    };
    LoginView.prototype.removeEvent = function () {
        trace("removeEvent");
        this.btnLogin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    LoginView.prototype.dispose = function () {
    };
    return LoginView;
}(WindowBase));
__reflect(LoginView.prototype, "LoginView");
