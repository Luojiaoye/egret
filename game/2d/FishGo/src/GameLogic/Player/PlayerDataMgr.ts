/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家数据管理器*/
class PlayerDataMgr{
    private _dataPool:Object = null;    // 数据池
    private _heroId:number = 0; // 玩家自己id
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        this._dataPool = {};
    }

    /*
    * 获取玩家自己的角色数据
    * */
    public getHeroData():PlayerData{
        return this.getPlayerData(this._heroId);
    }
    /*
    *删除玩家数据
    * @param id 玩家id
    * */
    public removePlayerData(id:number):void{
        this._dataPool[id] = null;
        delete this._dataPool[id];
    }

    /*
     * 添加玩家数据
     * @param data 玩家数据
     */
    public addPlayerData(data:PlayerData, isHero:Boolean = false):void{
        if(!data || this.getPlayerData(data.id))
            return;

        this._dataPool[data.id] = data;
        if(isHero)
            this._heroId = data.id;
    }

    /* 获取玩家数据
     * @param 玩家id
     * */
    public getPlayerData(id:number):PlayerData{
        return this._dataPool[id];
    }

    private static _inst:PlayerDataMgr = null;
    /*对外提供唯一单例*/
    public static get inst():PlayerDataMgr{
        if(!PlayerDataMgr._inst)
            PlayerDataMgr._inst = new PlayerDataMgr();
        
        return PlayerDataMgr._inst;
    }
}