/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家管理器 */

class PlayerMgr{
    private static _inst:PlayerMgr = null;
    private _players:Array<number> = null;

    private constructor(){
        this.init();
    }

    // 初始化方法
    private init():void{
        this._players = new Array<number>();
    }
    
    /* 提供单例对象PlayerMgr */
    public static get inst():PlayerMgr{
        if(!PlayerMgr._inst)
            PlayerMgr._inst = new PlayerMgr();
        return PlayerMgr._inst;
    }

    /*
    * 更新*/
    public update():void{
        let player:Player = null;
        for(let id of this._players){
            player = this.getPlayer(id);
            if(!player)
                continue;
            player.update();
        }
    }

    /*
     *创建一个玩家
     *@param id 玩家模板id
     *@param gid 玩家全局唯一id
     */
    public createPlayer(id:number, gid:number):Player{
        let player:Player = this.getPlayer(gid);
        if(!player){
            let rid:number = GUID.build();   // 客户端维护的渲染id
            player = new Player(id, gid, rid);
            this._players.push(gid);
            GameUnitMgr.inst.addGameUnit<Player>(player);
            let playerData:PlayerData = PlayerDataMgr.inst.getPlayerData(gid);
            RenderMgr.inst.createDragonBoneRenderObject<Player>(rid, playerData.avatar,gid);
        }
        return player;
    }

    /*
    * 创建玩家
    * @param data PlayerData 玩家数据
    * */
    public createPlayerByData(data:PlayerData):Player{
        let player:Player = this.getPlayer(data.id);
        if(!player){
            let rid:number = GUID.build();   // 客户端维护的渲染id
            player = new Player(data.id, data.templateId, rid);
            this._players.push(data.id);
            GameUnitMgr.inst.addGameUnit<Player>(player);
            RenderMgr.inst.createDragonBoneRenderObject<Player>(rid, data.avatar,data.id);
        }
        return player;
    }

    /*移除玩家
    * @param gid 玩家全局唯一id
    * */
    public removePlayer(gid:number):void{
        let player:Player = this.getPlayer(gid);
        if(player){
            RenderMgr.inst.removeRenderObject(player.renderObjId);  // 移除渲染对象
            GameUnitMgr.inst.removeGameUnitById(gid);   // 移除对象
            PlayerDataMgr.inst.removePlayerData(gid);   // 移除玩家数据
            if(this._players.indexOf(gid) > -1)
                this._players.slice(this._players.indexOf(gid), 1);
        }
    }

    /*获取玩家
     *@param gid number 玩家id
     */
    public getPlayer(gid:number):Player{
        return GameUnitMgr.inst.getGameUnit<Player>(gid);
    }

    /*
    * 获取玩家自己
    * */
    public getHero():Player{
        return this.getPlayer(PlayerDataMgr.inst.getHeroData().id);
    }
}