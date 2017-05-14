var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/13.
 */
/*摄像机对象*/
var Camera = (function () {
    function Camera(type) {
        if (type === void 0) { type = Camera.TYPE_DEFAULT; }
        this._type = type;
    }
    Object.defineProperty(Camera.prototype, "type", {
        /*摄像机类型*/
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return Camera;
}());
/*默认摄像机*/
Camera.TYPE_DEFAULT = 1;
__reflect(Camera.prototype, "Camera");
//# sourceMappingURL=Camera.js.map