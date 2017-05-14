var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/13.
 */
/*移动数据单元*/
var MoveData = (function () {
    function MoveData(id) {
        this._id = id;
    }
    Object.defineProperty(MoveData.prototype, "id", {
        /*移动对象id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoveData.prototype, "speedX", {
        /*获取x方向速度*/
        get: function () {
            return this.axisX * this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoveData.prototype, "speedY", {
        /*获取y方向速度*/
        get: function () {
            return this.axisY * this.speed;
        },
        enumerable: true,
        configurable: true
    });
    return MoveData;
}());
__reflect(MoveData.prototype, "MoveData");
//# sourceMappingURL=MoveData.js.map