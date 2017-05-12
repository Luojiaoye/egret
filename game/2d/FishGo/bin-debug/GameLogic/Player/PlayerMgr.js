/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家管理器 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerMgr = (function () {
    function PlayerMgr() {
        this.init();
    }
    // 初始化方法
    PlayerMgr.prototype.init = function () {
        // this._players = {};
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
    /*
     *创建一个玩家
     *@param id 玩家模板id
     *@param gid 玩家全局唯一id
     */
    PlayerMgr.prototype.createPlayer = function (id, gid) {
        var player = this.getPlayer(gid);
        if (!player) {
            var rid = GUID.build(); // 客户端维护的渲染id
            player = new Player(id, gid, rid);
            GameUnitMgr.inst.addGameUnit(player);
            var playerData = PlayerDataMgr.inst.getPlayerData(gid);
            RenderMgr.inst.createDragonBoneRenderObject(rid, playerData.avatar, gid);
        }
        return player;
    };
    /*
    * 创建玩家
    * @param data PlayerData 玩家数据
    * */
    PlayerMgr.prototype.createPlayerByData = function (data) {
        var player = this.getPlayer(data.id);
        if (!player) {
            var rid = GUID.build(); // 客户端维护的渲染id
            player = new Player(data.id, data.templateId, rid);
            GameUnitMgr.inst.addGameUnit(player);
            RenderMgr.inst.createDragonBoneRenderObject(rid, data.avatar, data.id);
        }
        return player;
    };
    /*移除玩家
    * @param gid 玩家全局唯一id
    * */
    PlayerMgr.prototype.removePlayer = function (gid) {
        var player = this.getPlayer(gid);
        if (player) {
            RenderMgr.inst.removeRenderObject(player.renderObjId); // 移除渲染对象
            GameUnitMgr.inst.removeGameUnitById(gid); // 移除对象
            PlayerDataMgr.inst.removePlayerData(gid); // 移除玩家数据
        }
    };
    /*获取玩家
     *@param gid number 玩家id
     */
    PlayerMgr.prototype.getPlayer = function (gid) {
        return GameUnitMgr.inst.getGameUnit(gid);
    };
    /*
    * 获取玩家自己
    * */
    PlayerMgr.prototype.getHero = function () {
        return this.getPlayer(PlayerDataMgr.inst.getHeroData().id);
    };
    return PlayerMgr;
}());
PlayerMgr._inst = null;
__reflect(PlayerMgr.prototype, "PlayerMgr");
//# sourceMappingURL=PlayerMgr.js.map