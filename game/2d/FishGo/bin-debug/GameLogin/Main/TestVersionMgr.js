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
        // 初始化一份玩家数据
        var data = new PlayerData();
        data.id = 1;
        data.name = "zhansan";
        // 创建一个玩家
        PlayerMgr.inst.createPlayer(1);
    };
    return TestVersionMgr;
}());
TestVersionMgr._inst = null;
__reflect(TestVersionMgr.prototype, "TestVersionMgr");
//# sourceMappingURL=TestVersionMgr.js.map