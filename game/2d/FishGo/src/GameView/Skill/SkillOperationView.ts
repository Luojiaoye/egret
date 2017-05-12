/**
 * Created by confiner.kang on 2017/5/12.
 */
/*技能操作界面*/
class SkillOperationView extends WindowBase{
    private normalSkill:eui.Image;
    private bigSkill:eui.Image;
    private littleSkill:eui.Image;

    constructor(winName: string, exml: string = null) {
        super(winName, exml);
    }

    initView(): void {
    }

    initEvent(): void {
        this.normalSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.bigSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.littleSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    }

    private touchHandler(evt:egret.TouchEvent):void{
        let skillId:number = 0;
        switch (evt.currentTarget){
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
        let player:Player = PlayerMgr.inst.getHero();   // 此处直接获取玩家用于测试
        if(player){
            player.useSkill(skillId);
        }
    }

    removeEvent(): void {
        this.normalSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.bigSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.littleSkill.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    }

    dispose(): void {
    }
}