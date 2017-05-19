/**
 * Created by confiner.kang on 2017/5/16.
 */
/*场景对象*/
class Scene{
    private _id:number; // 场景id
    private _ready:Boolean = false;
    public constructor(id:number){
        this._id = id;
        // JSON.parse();
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
        var map:string = "1001_png";//"hall_bg_jpg";
        bg.texture = ResourceMgr.inst.getRes(map);
        LayerMgr.inst.sceneLayer.addChild(bg);
        trace("绘制地图");
        this._ready = true;

        // 添加桌子
        let table:Table = new Table(1);
        table.rollDice();

        // 添加玩家
        let player:Player = PlayerMgr.inst.getPlayer(1);
        if(player)
            player.render();
    }

    /*销毁*/
    public dispose():void{
        this._ready = false;
        LayerMgr.inst.sceneLayer.removeChildren();
    }
}