var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*测试版管理器*/
var TestVersionMgr = (function () {
    function TestVersionMgr() {
    }
    Object.defineProperty(TestVersionMgr, "inst", {
        /*提供单例对象*/
        get: function () {
            if (!TestVersionMgr._inst)
                TestVersionMgr._inst = new TestVersionMgr();
            return TestVersionMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    /*初始化*/
    TestVersionMgr.prototype.initialize = function () {
        // 资源预加载｛场景资源 角色资源 怪物资源｝
        // 进入场景
        SceneMgr.inst.enter(1);
        // 初始化一份玩家数据
        var data = new PlayerData();
        data.id = 1;
        data.name = "zhansan";
        var templateId = 1;
        var gameUnitId = 10001; // 服务器下发的
        // 创建一个玩家
        PlayerMgr.inst.createPlayer(templateId, gameUnitId);
    };
    return TestVersionMgr;
}());
TestVersionMgr._inst = null;
__reflect(TestVersionMgr.prototype, "TestVersionMgr");
//# sourceMappingURL=TestVersionMgr.js.map