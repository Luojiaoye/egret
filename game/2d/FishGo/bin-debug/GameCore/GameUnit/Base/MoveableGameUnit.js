var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/9.
 */
/*可移动的生命游戏对象*/
var MoveableGameUnit = (function (_super) {
    __extends(MoveableGameUnit, _super);
    function MoveableGameUnit(id, rid) {
        var _this = _super.call(this, id, rid) || this;
        /*移动速度*/
        _this.speed = 0;
        return _this;
    }
    return MoveableGameUnit;
}(LifeGameUnit));
__reflect(MoveableGameUnit.prototype, "MoveableGameUnit", ["IMoveable"]);
//# sourceMappingURL=MoveableGameUnit.js.map