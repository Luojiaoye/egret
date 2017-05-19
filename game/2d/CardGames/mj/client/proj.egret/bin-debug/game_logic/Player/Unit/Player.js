var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家对象*/
var Bitmap = egret.Bitmap;
var Player = (function () {
    function Player(id) {
        this._id = id;
    }
    /*出生*/
    Player.prototype.born = function (x, y) {
        this._x = x;
        this._y = y;
    };
    /*渲染玩家*/
    Player.prototype.render = function () {
        var head = new egret.Bitmap();
        head.x = this._x;
        head.y = this._y;
        head.texture = ResourceMgr.inst.getRes("head" + (this.gender ? 1 : 0) + "_png");
        LayerMgr.inst.sceneLayer.addChild(head);
    };
    return Player;
}());
__reflect(Player.prototype, "Player");
