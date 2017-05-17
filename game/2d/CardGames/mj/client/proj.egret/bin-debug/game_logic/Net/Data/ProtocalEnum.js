var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/17.
 */
/*一级协议枚举*/
var ProtocalEnum = (function () {
    function ProtocalEnum() {
    }
    return ProtocalEnum;
}());
/*登录协议*/
ProtocalEnum.LOGIN = 0x01;
/*玩家信息*/
ProtocalEnum.PLAYER_INFO = 0x02;
/*房间系统*/
ProtocalEnum.ROOM = 0x03;
__reflect(ProtocalEnum.prototype, "ProtocalEnum");
