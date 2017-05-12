/**
 * Created by confiner.kang on 2017/5/5.
 */
// 游戏管理器
class GameMgr
{
    private _timer:egret.Timer = null;
    private constructor(){
        this.init();
    }

    private init():void{
        this._timer = new egret.Timer(50, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.beat, this);
        this._timer.start();
    }

    // 心跳包
    private beat(evt:egret.TimerEvent):void{
        TestVersionMgr.inst.update();
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

        ResourceMgr.inst.initialize();  // 初始化资源管理器

        // 加载必须加载的资源
        // ResourceMgr.inst.loadGroup("main_ui", this.onResourceLoadComplete, this);

        TestVersionMgr.inst.initialize(); // 初始化测试版的数据

        TestVersionMgr.inst.start();    // 开始游戏
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