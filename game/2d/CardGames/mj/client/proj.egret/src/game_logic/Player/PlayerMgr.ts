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

    private static _inst:PlayerMgr = null;
    /*对外提供唯一单例*/
    public static get inst():PlayerMgr{
        if(!PlayerMgr._inst)
            PlayerMgr._inst = new PlayerMgr();
        
        return PlayerMgr._inst;
    }
}