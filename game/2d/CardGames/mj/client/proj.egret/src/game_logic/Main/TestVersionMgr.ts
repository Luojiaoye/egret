/**
 * Created by confiner.kang on 2017/5/16.
 */
/*测试版本管理器*/
class TestVersionMgr{
    public static DEBUG:boolean = true;

    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    /*开始游戏*/
    public start():void{
        // 注册主题[优化点：1.与预加载资源合并使用加载界面（注意场景资源）]
        ThemeMgr.inst.registerTheme(this.themeLoadComplete)
        // 初始化资源管理器
        ResourceMgr.inst.initialize();
    }

    // 主题加载完成
    private themeLoadComplete():void{
        trace("主题加载完成");

        // 预加载资源
        ResourceMgr.inst.loadGroup("theme_ui", ()=>{
            trace("主题ui加载资源完成");
            let loginView:LoginView = new LoginView(PanelEnum.LOGIN);
            WindowMgr.inst.show(loginView.name);    // 显示界面
        });

        // 创建玩家
        let player:Player = PlayerMgr.inst.createPlayer(1);
        player.gender = false;
        player.born(50, 420);
    }

    private static _inst:TestVersionMgr = null;
    /*对外提供唯一单例*/
    public static get inst():TestVersionMgr{
        if(!TestVersionMgr._inst)
            TestVersionMgr._inst = new TestVersionMgr();

        return TestVersionMgr._inst;
    }
}

var trace = function (info) {
    if(TestVersionMgr.DEBUG)
        console.log(info);
}