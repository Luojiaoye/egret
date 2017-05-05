/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家管理器 */

class PlayerMgr{
    private static _inst:PlayerMgr = null;

    // 玩家列表
    private _players:Array<Player> = null;

    private constructor(){
        this.init();
    }

    // 初始化方法
    private init():void{
        this._players = new Array<Player>();
    }
    
    /* 提供单例对象PlayerMgr */
    public static get inst():PlayerMgr{
        if(!PlayerMgr._inst)
            PlayerMgr._inst = new PlayerMgr();
        return PlayerMgr._inst;
    }

    /*创建一个玩家*/
    public createPlayer(id:number):Player{
        let player = this.getPlayer(id);
        if(!player){
            player = new Player(id);
            this._players.push(player);
        }
        return player;
    }

    /*获取玩家
     *@param id number 玩家id
     */
    public getPlayer(id:number):Player{
        for(let i=0; i < this._players.length; ++i){
            if(this._players[i].id == id)
                return this._players[i];
        }

        return null;
    }

}