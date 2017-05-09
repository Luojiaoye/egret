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
    public x:number = 0;
    /*y坐标*/
    public y:number = 0;
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
}