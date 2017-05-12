var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家数据管理器*/
var PlayerDataMgr = (function () {
    function PlayerDataMgr() {
        this._dataPool = null; // 数据池
        this._heroId = 0; // 玩家自己id
        this.init();
    }
    // 初始化管理器
    PlayerDataMgr.prototype.init = function () {
        this._dataPool = {};
    };
    /*
    * 获取玩家自己的角色数据
    * */
    PlayerDataMgr.prototype.getHeroData = function () {
        return this.getPlayerData(this._heroId);
    };
    /*
    *删除玩家数据
    * @param id 玩家id
    * */
    PlayerDataMgr.prototype.removePlayerData = function (id) {
        this._dataPool[id] = null;
        delete this._dataPool[id];
    };
    /*
     * 添加玩家数据
     * @param data 玩家数据
     */
    PlayerDataMgr.prototype.addPlayerData = function (data, isHero) {
        if (isHero === void 0) { isHero = false; }
        if (!data || this.getPlayerData(data.id))
            return;
        this._dataPool[data.id] = data;
        if (isHero)
            this._heroId = data.id;
    };
    /* 获取玩家数据
     * @param 玩家id
     * */
    PlayerDataMgr.prototype.getPlayerData = function (id) {
        return this._dataPool[id];
    };
    Object.defineProperty(PlayerDataMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!PlayerDataMgr._inst)
                PlayerDataMgr._inst = new PlayerDataMgr();
            return PlayerDataMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerDataMgr;
}());
PlayerDataMgr._inst = null;
__reflect(PlayerDataMgr.prototype, "PlayerDataMgr");
//# sourceMappingURL=PlayerDataMgr.js.map