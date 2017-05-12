var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/12.
 */
/*技能操作界面*/
var SkillOperationView = (function (_super) {
    __extends(SkillOperationView, _super);
    function SkillOperationView(winName, exml) {
        if (exml === void 0) { exml = null; }
        return _super.call(this, winName, exml) || this;
    }
    SkillOperationView.prototype.initView = function () {
    };
    SkillOperationView.prototype.initEvent = function () {
        this.normalSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.bigSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.littleSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    SkillOperationView.prototype.touchHandler = function (evt) {
        var skillId = 0;
        switch (evt.currentTarget) {
            case this.normalSkill:
                console.log("使用普通技能");
                skillId = 2;
                break;
            case this.bigSkill:
                console.log("使用大招");
                skillId = 3;
                break;
            case this.littleSkill:
                console.log("使用小技能");
                skillId = 1;
                break;
        }
        // [优化点：SkillMgr管理技能]
        var player = PlayerMgr.inst.getHero(); // 此处直接获取玩家用于测试
        if (player) {
            player.useSkill(skillId);
        }
    };
    SkillOperationView.prototype.removeEvent = function () {
        this.normalSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.bigSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.littleSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    SkillOperationView.prototype.dispose = function () {
    };
    return SkillOperationView;
}(WindowBase));
__reflect(SkillOperationView.prototype, "SkillOperationView");
//# sourceMappingURL=SkillOperationView.js.map