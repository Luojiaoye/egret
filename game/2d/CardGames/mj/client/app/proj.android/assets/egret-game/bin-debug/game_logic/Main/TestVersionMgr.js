var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*测试版本管理器*/
var TestVersionMgr = (function () {
    function TestVersionMgr() {
        this.init();
    }
    // 初始化管理器
    TestVersionMgr.prototype.init = function () {
    };
    /*开始游戏*/
    TestVersionMgr.prototype.start = function () {
        // 注册主题[优化点：1.与预加载资源合并使用加载界面（注意场景资源）]
        ThemeMgr.inst.registerTheme(this.themeLoadComplete);
        // 初始化资源管理器
        ResourceMgr.inst.initialize();
    };
    // 主题加载完成
    TestVersionMgr.prototype.themeLoadComplete = function () {
        trace("主题加载完成");
        // 预加载资源
        ResourceMgr.inst.loadGroup("theme_ui", function () {
            trace("主题ui加载资源完成");
            var loginView = new LoginView(PanelEnum.LOGIN);
            WindowMgr.inst.show(loginView.name); // 显示界面
        });
    };
    Object.defineProperty(TestVersionMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!TestVersionMgr._inst)
                TestVersionMgr._inst = new TestVersionMgr();
            return TestVersionMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return TestVersionMgr;
}());
TestVersionMgr.DEBUG = true;
TestVersionMgr._inst = null;
__reflect(TestVersionMgr.prototype, "TestVersionMgr");
var trace = function (info) {
    if (TestVersionMgr.DEBUG)
        console.log(info);
};
