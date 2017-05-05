/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
class Player extends egret.DisplayObjectContainer{
    // 玩家id
    private _id:number = 0;

    public constructor(id:number){
        super();
        this._id = id;
    }

    /*玩家id*/
    public get id():number{
        return this._id;
    }

    /*出生*/
    public born():void{
        console.log("玩家出生");
    }

    /*站立*/
    public stand():void{
        console.log("玩家站立");
    }
}