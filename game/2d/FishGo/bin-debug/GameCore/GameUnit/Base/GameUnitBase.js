var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/9.
 */
/*游戏对象*/
var GameUnitBase = (function () {
    function GameUnitBase(id, rid) {
        this._gameUnitId = 0; // 游戏对象id
        this._renderObjId = 0; // 渲染对象id
        /*x坐标*/
        this.x = 0;
        /*y坐标*/
        this.y = 0;
        /*层深*/
        this.z = 0;
        this._gameUnitId = id;
        this._renderObjId = rid;
    }
    Object.defineProperty(GameUnitBase.prototype, "gameUnitId", {
        /*游戏对象id*/
        get: function () {
            return this._gameUnitId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUnitBase.prototype, "renderObjId", {
        /*渲染对象id*/
        get: function () {
            return this._renderObjId;
        },
        enumerable: true,
        configurable: true
    });
    return GameUnitBase;
}());
__reflect(GameUnitBase.prototype, "GameUnitBase", ["IGameUnit"]);
//# sourceMappingURL=GameUnitBase.js.map