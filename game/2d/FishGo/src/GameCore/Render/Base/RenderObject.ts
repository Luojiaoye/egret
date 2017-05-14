/**
 * Created by confiner.kang on 2017/5/8.
 */
/*渲染对象*/
class RenderObject implements IRender{
    private _id:number = 0; // 渲染id
    private _gameUnitId:number = 0; // 游戏对象id
    private _displayObj:egret.DisplayObjectContainer = null;
    private _x:number;
    private _y:number;

    public constructor(){
    }

    /*渲染对象id*/
    get id(): number {
        return this._id;
    }

    /*游戏对象id*/
    get gameUnitId(): number {
        return this._gameUnitId;
    }

    /*游戏对象id*/
    set gameUnitId(value: number) {
        this._gameUnitId = value;
    }

    /*显示对象*/
    get display():egret.DisplayObjectContainer {
        return this._displayObj;
    }

    set display(value:egret.DisplayObjectContainer) {
        this._displayObj = value;
    }

    /*
     *初始化渲染对象
     * @param id 渲染对象id
     * @param displayObj 显示对象
     * */
    public initialize(id:number, displayObj:egret.DisplayObjectContainer):void{
        this._id = id;
        this._displayObj = displayObj;
    }

    /*渲染*/
    public render():void{
        LayerMgr.inst.sceneLayer.addChild(this.display);
    }

    /* 销毁渲染对象
     * @param dispose 是否释放内存
     */
    public destroy(dispose:Boolean = false):void{
        if(!this._displayObj.parent){
            this._displayObj.parent.removeChild(this._displayObj);
            this._displayObj = null;
        }

        if(dispose){
            if(this._displayObj["dispose"])
                this._displayObj["dispose"].apply(this._displayObj, true);
        }
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set x(value: number) {
        this._x = value;
        this.display.x = this._x;
    }

    set y(value: number) {
        this._y = value;
        this.display.y = this._y;
    }
}