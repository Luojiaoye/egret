/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家数据管理器*/
class PlayerMgr{
    private _dataPool:Object = null;    // 数据池
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        this._dataPool = {};
    }

    /*创建玩家*/
    public createPlayer(id:number):Player{
        if(this._dataPool[id])
            return this._dataPool[id];

        let player:Player = new Player(id);
        this._dataPool[id] = player;
        return player;
    }

    /*获取玩家*/
    public getPlayer(id:number):Player{
        return this._dataPool[id];
    }

    private static _inst:PlayerMgr = null;
    /*对外提供唯一单例*/
    public static get inst():PlayerMgr{
        if(!PlayerMgr._inst)
            PlayerMgr._inst = new PlayerMgr();
        
        return PlayerMgr._inst;
    }
}