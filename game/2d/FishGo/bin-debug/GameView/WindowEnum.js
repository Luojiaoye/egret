var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/9.
 */
/*弹窗枚举*/
var WindowEnum = (function () {
    function WindowEnum() {
    }
    return WindowEnum;
}());
/*玩家头像信息面板*/
WindowEnum.HEAD_INFO = "PlayerHeadInfoView";
/*技能操作界面*/
WindowEnum.SKILL_OPERATION = "SkillOperationView";
__reflect(WindowEnum.prototype, "WindowEnum");
//# sourceMappingURL=WindowEnum.js.map