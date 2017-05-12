var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*全局唯一id生成器*/
var GUID = (function () {
    function GUID() {
    }
    /* 生成唯一id*/
    GUID.build = function () {
        return ++this._guid;
    };
    return GUID;
}());
GUID._guid = 0;
__reflect(GUID.prototype, "GUID");
//# sourceMappingURL=GUID.js.map