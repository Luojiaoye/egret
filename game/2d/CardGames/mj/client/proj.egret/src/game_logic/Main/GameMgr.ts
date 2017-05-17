/**
 * Created by confiner.kang on 2017/5/16.
 */
/*游戏管理器*/
class GameMgr{
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    /*开始游戏*/
    public start():void{
        trace("开始游戏");
        // 无服务器交互暂时使用测试版本管理器来执行游戏逻辑
        TestVersionMgr.inst.start();
    }

    /*暂停游戏*/
    public pause():void{
    }

    /*退出游戏*/
    public exit():void{

    }

    /*保存游戏 [单机版本预留]*/
    public save():void{

    }

    private static _inst:GameMgr = null;
    /*对外提供唯一单例*/
    public static get inst():GameMgr{
        if(!GameMgr._inst)
            GameMgr._inst = new GameMgr();

        return GameMgr._inst;
    }
}