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
/*生命游戏对象*/
var LifeGameUnit = (function (_super) {
    __extends(LifeGameUnit, _super);
    function LifeGameUnit(id, rid) {
        var _this = _super.call(this, id, rid) || this;
        /*生命值*/
        _this.mp = 0;
        /*魔法值*/
        _this.hp = 0;
        /*体力值*/
        _this.sp = 0;
        return _this;
    }
    /*默认行为*/
    LifeGameUnit.prototype.defaultAction = function () {
        console.log("默认行为");
    };
    return LifeGameUnit;
}(GameUnitBase));
__reflect(LifeGameUnit.prototype, "LifeGameUnit", ["ILife"]);
//# sourceMappingURL=LifeGameUnit.js.map