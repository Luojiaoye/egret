var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*场景管理器*/
var SceneMgr = (function () {
    function SceneMgr() {
        this._lastSceneId = 0; // 上一次的场景id
        this._currentSceneId = 0; // 当前场景id
        this.init();
    }
    SceneMgr.prototype.init = function () {
    };
    /*
     * 进入场景
     * @param id 场景id
     * */
    SceneMgr.prototype.enter = function (id) {
        if (this.verify(id)) {
            this._currentSceneId = id;
            // 处理场景的逻辑写在这里
            MapMgr.inst.render(1);
        }
    };
    /*退出场景*/
    SceneMgr.prototype.exit = function (id) {
        // 退出场景的逻辑处理
    };
    // 验证场景id是否有效
    SceneMgr.prototype.verify = function (id) {
        return true;
    };
    Object.defineProperty(SceneMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!SceneMgr._inst)
                SceneMgr._inst = new SceneMgr();
            return SceneMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return SceneMgr;
}());
SceneMgr._inst = null;
__reflect(SceneMgr.prototype, "SceneMgr");
//# sourceMappingURL=SceneMgr.js.map