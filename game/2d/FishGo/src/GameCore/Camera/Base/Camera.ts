/**
 * Created by confiner on 2017/5/13.
 */
/*摄像机对象*/
class Camera{
    /*默认摄像机*/
    public static TYPE_DEFAULT:number = 1;
    private _type:number;   // 摄像机类型
    /*视窗宽度*/
    public viewWidth:number;
    /*视窗高度*/
    public viewHeight:number;

    /*焦点宽度*/
    public focusWidth:number;
    /*焦点高度*/
    public focusHeight:number;

    public constructor(type:number = Camera.TYPE_DEFAULT){
        this._type = type;
    }

    /*摄像机类型*/
    public get type():number{
        return this._type;
    }
}