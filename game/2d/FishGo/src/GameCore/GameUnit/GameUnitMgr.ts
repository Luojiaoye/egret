/**
 * Created by confiner.kang on 2017/5/9.
 */
/*游戏对象管理器*/
class GameUnitMgr{
    private _gameUnits:Object = null;   // 缓存所有游戏对象
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        this._gameUnits = {};
    }

    /*
    * 创建游戏对象
    * @id游戏对象id
    * @rid游戏渲染对象id
    */
    public createGameUnit<T extends IGameUnit>(id:number, rid:number):T {
        if(this._gameUnits[id])
            return this._gameUnits[id];

        let tmp:IGameUnit = new GameUnitBase(id, rid);
        let gameUnit:T = <T> tmp;
        this._gameUnits[id] = gameUnit;
        return gameUnit;
    }

    /*
    * 添加游戏对象
    * @param gameUnit 游戏对象
    * */
    public addGameUnit<T extends IGameUnit>(gameUnit:T):void{
        if(!gameUnit)
            return;

        if(this._gameUnits[gameUnit.gameUnitId])
            return;

        this._gameUnits[gameUnit.gameUnitId] = gameUnit;
    }

    /*
    * 获取游戏对象
    * @param id 游戏对象id
    * */
    public getGameUnit<T extends IGameUnit>(id:number):T{
        return <T>this._gameUnits[id];
    }

    /*
     *移除游戏对象
     * @param id 游戏对象id
     * */
    public removeGameUnitById(id:number):void{
        if(!this._gameUnits[id])
            return;

        this._gameUnits[id] = null;
        delete this._gameUnits[id];
    }

    /*
     *移除游戏对象
     * @param gameUnit 游戏对象
     * */
    public removeGameUnit<T extends IGameUnit>(gameUnit:T):void{
        if(!gameUnit)
            return;

        this.removeGameUnitById(gameUnit.gameUnitId);
    }

    private  static _inst:GameUnitMgr = null;

    /*对外提供单例对象*/
    public static get inst():GameUnitMgr{
        if(!GameUnitMgr._inst)
            GameUnitMgr._inst = new GameUnitMgr();

        return GameUnitMgr._inst;
    }
}