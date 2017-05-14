var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*骨骼动画渲染对象*/
var DragonBoneRenderObject = (function (_super) {
    __extends(DragonBoneRenderObject, _super);
    function DragonBoneRenderObject() {
        var _this = _super.call(this) || this;
        _this._armatureDisplay = null; // 龙骨显示对象
        return _this;
    }
    Object.defineProperty(DragonBoneRenderObject.prototype, "display", {
        /*显示对象*/
        get: function () {
            return this._armatureDisplay;
        },
        /*显示对象*/
        set: function (value) {
            this._armatureDisplay = value;
        },
        enumerable: true,
        configurable: true
    });
    /*渲染*/
    DragonBoneRenderObject.prototype.render = function () {
        // 添加到舞台
        LayerMgr.inst.sceneLayer.addChild(this.display);
    };
    /* 销毁渲染对象
     * @param dispose 是否释放内存
     */
    DragonBoneRenderObject.prototype.destroy = function (dispose) {
        if (dispose === void 0) { dispose = false; }
        _super.prototype.destroy.call(this, dispose);
        if (this._armatureDisplay && this._armatureDisplay.parent) {
            this._armatureDisplay.parent.removeChild(this._armatureDisplay);
            this._armatureDisplay.dispose(true);
            this._armatureDisplay = null;
        }
    };
    return DragonBoneRenderObject;
}(RenderObject));
__reflect(DragonBoneRenderObject.prototype, "DragonBoneRenderObject");
//# sourceMappingURL=DragonBoneRenderObject.js.map