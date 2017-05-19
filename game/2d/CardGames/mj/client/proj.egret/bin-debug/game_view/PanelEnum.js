var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/17.
 */
/*界面枚举*/
var PanelEnum = (function () {
    function PanelEnum() {
    }
    return PanelEnum;
}());
/*登录界面*/
PanelEnum.LOGIN = "LoginView";
/*菜单按钮*/
PanelEnum.MENU = "MainMenuView";
__reflect(PanelEnum.prototype, "PanelEnum");
