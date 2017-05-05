var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(id) {
        var _this = _super.call(this) || this;
        // 玩家id
        _this._id = 0;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(Player.prototype, "id", {
        /*玩家id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    /*出生*/
    Player.prototype.born = function () {
        console.log("玩家出生");
    };
    /*站立*/
    Player.prototype.stand = function () {
        console.log("玩家站立");
    };
    return Player;
}(egret.DisplayObjectContainer));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map