/**
 * Created by confiner.kang on 2017/5/19.
 */
/*菜单界面*/
class MainMenuView extends WindowBase{

    constructor(winName: string, exml: string = null) {
        super(winName, exml);
    }

    initView(): void {
        this.x = LayerMgr.inst.stage.stageWidth - this.width;
        this.y = 20;
    }

    initEvent(): void {
    }

    removeEvent(): void {
    }

    dispose(): void {
    }
}