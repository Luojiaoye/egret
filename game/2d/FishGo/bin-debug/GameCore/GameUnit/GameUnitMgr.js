var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/9.
 */
/*游戏对象管理器*/
var GameUnitMgr = (function () {
    function GameUnitMgr() {
        this._gameUnits = null; // 缓存所有游戏对象
        this.init();
    }
    // 初始化管理器
    GameUnitMgr.prototype.init = function () {
        this._gameUnits = {};
    };
    /*
    * 创建游戏对象
    * @id游戏对象id
    * @rid游戏渲染对象id
    */
    GameUnitMgr.prototype.createGameUnit = function (id, rid) {
        if (this._gameUnits[id])
            return this._gameUnits[id];
        var tmp = new GameUnitBase(id, rid);
        var gameUnit = tmp;
        this._gameUnits[id] = gameUnit;
        return gameUnit;
    };
    /*
    * 添加游戏对象
    * @param gameUnit 游戏对象
    * */
    GameUnitMgr.prototype.addGameUnit = function (gameUnit) {
        if (!gameUnit)
            return;
        if (this._gameUnits[gameUnit.gameUnitId])
            return;
        this._gameUnits[gameUnit.gameUnitId] = gameUnit;
    };
    /*
    * 获取游戏对象
    * @param id 游戏对象id
    * */
    GameUnitMgr.prototype.getGameUnit = function (id) {
        return this._gameUnits[id];
    };
    /*
     *移除游戏对象
     * @param id 游戏对象id
     * */
    GameUnitMgr.prototype.removeGameUnitById = function (id) {
        if (!this._gameUnits[id])
            return;
        this._gameUnits[id] = null;
        delete this._gameUnits[id];
    };
    /*
     *移除游戏对象
     * @param gameUnit 游戏对象
     * */
    GameUnitMgr.prototype.removeGameUnit = function (gameUnit) {
        if (!gameUnit)
            return;
        this.removeGameUnitById(gameUnit.gameUnitId);
    };
    Object.defineProperty(GameUnitMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!GameUnitMgr._inst)
                GameUnitMgr._inst = new GameUnitMgr();
            return GameUnitMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return GameUnitMgr;
}());
GameUnitMgr._inst = null;
__reflect(GameUnitMgr.prototype, "GameUnitMgr");
//# sourceMappingURL=GameUnitMgr.js.map