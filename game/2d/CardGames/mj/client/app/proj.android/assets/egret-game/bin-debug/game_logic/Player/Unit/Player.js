var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
var Player = (function () {
    function Player() {
    }
    return Player;
}());
__reflect(Player.prototype, "Player");
