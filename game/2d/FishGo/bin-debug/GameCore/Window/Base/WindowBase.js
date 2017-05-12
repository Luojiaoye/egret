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
var WindowBase = (function (_super) {
    __extends(WindowBase, _super);
    function WindowBase(winName, exml) {
        if (exml === void 0) { exml = null; }
        var _this = _super.call(this) || this;
        _this._name = null;
        _this._name = winName;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = exml ? exml : GameConfig.UI_EXML_PATH + _this._name + ".exml";
        WindowMgr.inst.addWindow(_this);
        return _this;
    }
    // ui加载完成
    WindowBase.prototype.uiCompHandler = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.initView();
        this.initEvent();
    };
    /*隐藏*/
    WindowBase.prototype.hide = function () {
        this.close();
    };
    /*显示*/
    WindowBase.prototype.show = function () {
        // 添加到ui层
        LayerMgr.inst.uiLayer.addChild(this);
    };
    Object.defineProperty(WindowBase.prototype, "name", {
        /*获取弹窗名字*/
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return WindowBase;
}(eui.Panel));
__reflect(WindowBase.prototype, "WindowBase", ["IWindow"]);
//# sourceMappingURL=WindowBase.js.map