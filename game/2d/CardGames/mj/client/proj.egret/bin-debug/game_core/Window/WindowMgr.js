var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/9.
 */
/*弹窗管理器*/
var WindowMgr = (function () {
    function WindowMgr() {
        this._wins = null;
        this.init();
    }
    // 初始化管理器
    WindowMgr.prototype.init = function () {
        this._wins = {};
    };
    /*
    * 初始化弹窗管理器配置
    * @param cfgDir 窗体exml配置文件根目录
    * */
    WindowMgr.prototype.initialize = function (cfgDir) {
        if (cfgDir === void 0) { cfgDir = "resource/assets/ui/"; }
        WindowMgr.UI_EXML_PATH = cfgDir;
    };
    /*打开弹窗*/
    WindowMgr.prototype.show = function (winName) {
        var win = this.getWindow(winName);
        if (win) {
            win.show();
        }
    };
    /*添加窗体*/
    WindowMgr.prototype.addWindow = function (win) {
        this._wins[win.name] = win;
    };
    /*获取弹窗对象
    * @winName 弹窗名字
    * */
    WindowMgr.prototype.getWindow = function (winName) {
        return this._wins[winName];
    };
    /*
    * 隐藏窗体
    * @param winName 弹窗名称
    * @param dispose 是否销毁对象
    * */
    WindowMgr.prototype.hide = function (winName, dispose) {
        if (dispose === void 0) { dispose = false; }
        var win = this.getWindow(winName);
        if (win) {
            win.hide();
            if (dispose)
                delete this._wins[winName];
        }
    };
    /*隐藏所有弹窗*/
    WindowMgr.prototype.hideWindows = function () {
        trace("隐藏弹窗");
        for (var i in this._wins) {
            if (this._wins[i])
                this.hide(this._wins[i].name);
        }
    };
    Object.defineProperty(WindowMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!WindowMgr._inst)
                WindowMgr._inst = new WindowMgr();
            return WindowMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return WindowMgr;
}());
/*窗体exml配置文件根目录*/
WindowMgr.UI_EXML_PATH = "resource/assets/ui/";
WindowMgr._inst = null;
__reflect(WindowMgr.prototype, "WindowMgr");
