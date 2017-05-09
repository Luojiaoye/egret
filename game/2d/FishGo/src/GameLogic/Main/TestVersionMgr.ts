/**
 * Created by confiner.kang on 2017/5/5.
 */
/*测试版管理器*/
class TestVersionMgr{
    private constructor(){
    }

    private static _inst:TestVersionMgr = null;

    /*提供单例对象*/
    public static get inst():TestVersionMgr{
        if(!TestVersionMgr._inst)
            TestVersionMgr._inst = new TestVersionMgr();

        return TestVersionMgr._inst;
    }

    /*初始化*/
    public initialize():void{
        // 资源预加载｛场景资源 角色资源 怪物资源｝
        // 进入场景
        SceneMgr.inst.enter(1);

        // 初始化一份玩家数据
        let data:PlayerData = new PlayerData();
        data.id = 1;
        data.name = "zhansan";

        let templateId:number = 1;
        let gameUnitId:number = 10001;    // 服务器下发的
        // 创建一个玩家
        PlayerMgr.inst.createPlayer(templateId, gameUnitId);
    }
}