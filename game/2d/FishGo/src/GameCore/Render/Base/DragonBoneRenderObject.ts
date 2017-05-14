/**
 * Created by confiner.kang on 2017/5/8.
 */
/*骨骼动画渲染对象*/
class DragonBoneRenderObject extends RenderObject implements  IRender{
    private _armatureDisplay:dragonBones.EgretArmatureDisplay = null;   // 龙骨显示对象
    public constructor(){
        super();
    }

    /*显示对象*/
    public get display():dragonBones.EgretArmatureDisplay{
        return this._armatureDisplay;
    }

    /*显示对象*/
    public set display(value:dragonBones.EgretArmatureDisplay) {
        this._armatureDisplay = value;
    }

    /*渲染*/
    public render():void{
        // 添加到舞台
        LayerMgr.inst.sceneLayer.addChild(this.display);
    }

    /* 销毁渲染对象
     * @param dispose 是否释放内存
     */
    public destroy(dispose:Boolean = false):void{
        super.destroy(dispose);
        if(this._armatureDisplay && this._armatureDisplay.parent){
            this._armatureDisplay.parent.removeChild(this._armatureDisplay);
            this._armatureDisplay.dispose(true);
            this._armatureDisplay = null;
        }
    }
}