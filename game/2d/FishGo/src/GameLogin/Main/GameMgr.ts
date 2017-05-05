/**
 * Created by confiner.kang on 2017/5/5.
 */
// 游戏管理器
class GameMgr
{
    private constructor(){
        this.init();
    }

    private init():void{

    }

    private static _inst:GameMgr = null;
    public static get inst():GameMgr{
        if(this._inst == null)
            this._inst = new GameMgr();

        return this._inst;
    }

    /* 开始游戏 */
    public start():void{
        console.log("开始游戏");
        TestVersionMgr.inst.initialize(); // 初始化测试版的数据

        let player:Player = PlayerMgr.inst.getPlayer(1);   // 获取一个玩家
        if(player)
            player.born();
    }

    /* 暂停游戏 */
    public pause():void{
        console.log("暂停游戏");
    }

    /* 退出游戏*/
    public exit():void{
        console.log("结束游戏");
    }
}