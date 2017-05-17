var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*游戏管理器*/
var GameMgr = (function () {
    function GameMgr() {
        this.init();
    }
    // 初始化管理器
    GameMgr.prototype.init = function () {
    };
    /*开始游戏*/
    GameMgr.prototype.start = function () {
        trace("开始游戏");
        // 无服务器交互暂时使用测试版本管理器来执行游戏逻辑
        TestVersionMgr.inst.start();
    };
    /*暂停游戏*/
    GameMgr.prototype.pause = function () {
    };
    /*退出游戏*/
    GameMgr.prototype.exit = function () {
    };
    /*保存游戏 [单机版本预留]*/
    GameMgr.prototype.save = function () {
    };
    Object.defineProperty(GameMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!GameMgr._inst)
                GameMgr._inst = new GameMgr();
            return GameMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return GameMgr;
}());
GameMgr._inst = null;
__reflect(GameMgr.prototype, "GameMgr");
