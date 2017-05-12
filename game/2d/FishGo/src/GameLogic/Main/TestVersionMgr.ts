/**
 * Created by confiner.kang on 2017/5/5.
 */
/*测试版管理器*/
class TestVersionMgr{
    private _hero:Player = null;    // 主角
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

        // 注册主题
        ThemeMgr.inst.registerTheme(()=>{
            console.log("主题注册完成");
        });

        // 初始化输入管理器
        InputMgr.inst.initialize(InputMgr.JOYSTICK_INPUT);  // 摇杆输入

        // 初始化一份玩家数据
        var playerData:PlayerData = new PlayerData();
        playerData.id = 1001;
        playerData.templateId = 1;
        playerData.name = "测试名字";
        playerData.avatar = playerData.templateId + "_player";
        playerData.attack = 1000;
        playerData.defense = 200;
        playerData.gold = 123;
        playerData.money = 321;
        playerData.weaponId = 1;
        playerData.lv = 23;
        // 添加玩家数据
        PlayerDataMgr.inst.addPlayerData(playerData, true); // 英雄玩家

        // 创建一个玩家
        PlayerMgr.inst.createPlayer(playerData.templateId, playerData.id);

        ResourceMgr.inst.loadGroup("home_ui", ()=>{
            // 进入场景
            SceneMgr.inst.enter(6);
        })
    }

    /*开始游戏*/
    public start():void{
        let player:Player = PlayerMgr.inst.getPlayer(1001);   // 获取一个玩家
        if(player)
            player.born(500, 500);

        this._hero = player;
        this._hero.speed = 10;
        /*let player1:Player = PlayerMgr.inst.getPlayer(1002);   // 获取一个玩家
        if(player1)
            player1.born(300, 500);*/
    }

    public update():void{
        let xAxis:number = InputMgr.inst.getAxisX();
        let yAxis:number = InputMgr.inst.getAxisY();
        if(!this._hero)
            return;

        if(yAxis != 0 || xAxis != 0){
            this._hero.speedX = xAxis;
            this._hero.speedY = yAxis;
            this._hero.sp = InputMgr.inst.getTorque();
            this._hero.walk();
        }
        else{
            this._hero.stand()
        }
    }
}