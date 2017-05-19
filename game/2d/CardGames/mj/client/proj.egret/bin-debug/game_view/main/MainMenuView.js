var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/19.
 */
/*菜单界面*/
var MainMenuView = (function (_super) {
    __extends(MainMenuView, _super);
    function MainMenuView(winName, exml) {
        if (exml === void 0) { exml = null; }
        return _super.call(this, winName, exml) || this;
    }
    MainMenuView.prototype.initView = function () {
        this.x = LayerMgr.inst.stage.stageWidth - this.width;
        this.y = 20;
    };
    MainMenuView.prototype.initEvent = function () {
    };
    MainMenuView.prototype.removeEvent = function () {
    };
    MainMenuView.prototype.dispose = function () {
    };
    return MainMenuView;
}(WindowBase));
__reflect(MainMenuView.prototype, "MainMenuView");
