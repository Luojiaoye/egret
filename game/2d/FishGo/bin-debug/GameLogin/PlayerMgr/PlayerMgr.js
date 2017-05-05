/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家管理器 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerMgr = (function () {
    function PlayerMgr() {
        // 玩家列表
        this._players = null;
        this.init();
    }
    // 初始化方法
    PlayerMgr.prototype.init = function () {
        this._players = new Array();
    };
    Object.defineProperty(PlayerMgr, "inst", {
        /* 提供单例对象PlayerMgr */
        get: function () {
            if (!PlayerMgr._inst)
                PlayerMgr._inst = new PlayerMgr();
            return PlayerMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    /*创建一个玩家*/
    PlayerMgr.prototype.createPlayer = function (id) {
        var player = this.getPlayer(id);
        if (!player) {
            player = new Player(id);
            this._players.push(player);
        }
        return player;
    };
    /*获取玩家
     *@param id number 玩家id
     */
    PlayerMgr.prototype.getPlayer = function (id) {
        for (var i = 0; i < this._players.length; ++i) {
            if (this._players[i].id == id)
                return this._players[i];
        }
        return null;
    };
    return PlayerMgr;
}());
PlayerMgr._inst = null;
__reflect(PlayerMgr.prototype, "PlayerMgr");
//# sourceMappingURL=PlayerMgr.js.map