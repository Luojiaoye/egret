var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
// 游戏管理器
var GameMgr = (function () {
    function GameMgr() {
        this._timer = null;
        this.init();
    }
    GameMgr.prototype.init = function () {
        this._timer = new egret.Timer(50, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.beat, this);
        this._timer.start();
    };
    // 心跳包
    GameMgr.prototype.beat = function (evt) {
        MoveMgr.inst.update();
        PlayerMgr.inst.update();
    };
    Object.defineProperty(GameMgr, "inst", {
        get: function () {
            if (this._inst == null)
                this._inst = new GameMgr();
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    /* 开始游戏 */
    GameMgr.prototype.start = function () {
        ResourceMgr.inst.initialize(); // 初始化资源管理器
        // 加载必须加载的资源
        // ResourceMgr.inst.loadGroup("main_ui", this.onResourceLoadComplete, this);
        TestVersionMgr.inst.initialize(); // 初始化测试版的数据
        TestVersionMgr.inst.start(); // 开始游戏
    };
    /* 暂停游戏 */
    GameMgr.prototype.pause = function () {
        console.log("暂停游戏");
    };
    /* 退出游戏*/
    GameMgr.prototype.exit = function () {
        console.log("结束游戏");
    };
    return GameMgr;
}());
GameMgr._inst = null;
__reflect(GameMgr.prototype, "GameMgr");
//# sourceMappingURL=GameMgr.js.map