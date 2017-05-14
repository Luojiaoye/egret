/**
 * Created by confiner.kang on 2017/5/9.
 */
/*游戏对象*/
class GameUnitBase implements IGameUnit{
    private _gameUnitId:number = 0; // 游戏对象id
    private _renderObjId:number = 0;    // 渲染对象id

    public constructor(id:number, rid:number){
        this._gameUnitId = id;
        this._renderObjId = rid;
    }

    /*x坐标*/
    private _x:number = 0;
    /*y坐标*/
    private _y:number = 0;

    /*层深*/
    public z:number = 0;

    /*游戏对象id*/
    public get gameUnitId():number{
        return this._gameUnitId;
    }

    /*渲染对象id*/
    public get renderObjId():number{
        return this._renderObjId;
    }

    /*x坐标*/
    public get x(): number {
        return this._x;
    }

    /*x坐标*/
    public set x(value: number) {
        this._x = value;
        let renderObj:RenderObject = RenderMgr.inst.getRenderObject<RenderObject>(this._renderObjId);
        if(renderObj)
            renderObj.x = this._x;
    }

    /*y坐标*/
    public get y(): number {
        return this._y;
    }

    /*y坐标*/
    public set y(value: number) {
        this._y = value;
        let renderObj:RenderObject = RenderMgr.inst.getRenderObject<RenderObject>(this._renderObjId);
        if(renderObj)
            renderObj.y = this._y;
    }
}