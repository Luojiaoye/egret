var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*场景数据[暂时用于替代模板数据]*/
var SceneData = (function () {
    function SceneData() {
        this.id = 0; // 场景id
        this.mapId = 0; // 地图id
    }
    return SceneData;
}());
__reflect(SceneData.prototype, "SceneData");
//# sourceMappingURL=SceneData.js.map