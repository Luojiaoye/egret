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
        if (dispose === void 0) { dispose = true; }
        var win = this.getWindow(winName);
        if (win) {
            win.hide();
            if (dispose)
                delete this._wins[winName];
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
WindowMgr._inst = null;
__reflect(WindowMgr.prototype, "WindowMgr");
//# sourceMappingURL=WindowMgr.js.map