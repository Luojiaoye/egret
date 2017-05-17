/**
 * Created by confiner.kang on 2017/5/16.
 */
/*场景对象*/
class Scene{
    private _id:number; // 场景id
    private _ready:Boolean = false;
    public constructor(id:number){
        this._id = id;
    }

    /*场景id*/
    public get id(): number {
        return this._id;
    }

    /*渲染场景*/
    public build():void{
        if(this._ready)
            return;

        trace("渲染场景");
        let bg:egret.Bitmap = new egret.Bitmap();
        var map:string = "hall_bg_jpg";
        bg.texture = ResourceMgr.inst.getRes(map);
        LayerMgr.inst.sceneLayer.addChild(bg);
        trace("绘制地图");
        this._ready = true;
    }

    /*销毁*/
    public dispose():void{
        this._ready = false;
        LayerMgr.inst.sceneLayer.removeChildren();
    }
}