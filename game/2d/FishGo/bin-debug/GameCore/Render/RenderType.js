var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*渲染类型*/
var RenderType = (function () {
    function RenderType() {
        /*渲染玩家*/
        this.PLAYER = "player";
        /*渲染怪物*/
        this.MONSTER = "master";
        /*渲染地图*/
        this.MAP = "map";
    }
    return RenderType;
}());
__reflect(RenderType.prototype, "RenderType");
//# sourceMappingURL=RenderType.js.map