/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家对象*/
import Bitmap = egret.Bitmap;
class Player{
    private _id:number;
    public gender:boolean;  // 女为true 男为false
    public name:string;     // 名称
    private _x:number;
    private _y:number;

    public constructor(id:number){
        this._id = id;
    }

    /*出生*/
    public born(x:number, y:number):void{
        this._x = x;
        this._y = y;
    }


    /*渲染玩家*/
    public render():void{
        let head:Bitmap = new egret.Bitmap();
        head.x = this._x;
        head.y = this._y;
        head.texture = ResourceMgr.inst.getRes("head" + (this.gender ? 1 : 0) + "_png");
        LayerMgr.inst.sceneLayer.addChild(head);
    }
}