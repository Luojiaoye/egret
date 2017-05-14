/**
 * Created by confiner on 2017/5/13.
 */
/*移动数据单元*/
class MoveData{
    private _id:number;
    /*x方向量*/
    public axisX:number;
    /*y方向量*/
    public axisY:number;
    /*速度*/
    public speed:number;

    public constructor(id:number){
        this._id = id;
    }

    /*移动对象id*/
    public get id(): number {
        return this._id;
    }

    /*获取x方向速度*/
    public get speedX():number{
        return this.axisX * this.speed;
    }

    /*获取y方向速度*/
    public get speedY():number{
        return this.axisY * this.speed;
    }
}