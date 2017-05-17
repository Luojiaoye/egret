var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*场景管理器*/
var SceneMgr = (function () {
    function SceneMgr() {
        this._scene = null; // 当前场景
        this.init();
    }
    // 初始化管理器
    SceneMgr.prototype.init = function () {
    };
    /*
    * 进入场景
    * @param id 场景id
    * */
    SceneMgr.prototype.enter = function (id) {
        // 隐藏所有界面
        WindowMgr.inst.hideWindows();
        trace("进入场景" + id);
        if (this.verify(id)) {
            this._scene = new Scene(id);
            this._scene.build();
        }
        else
            trace("场景不合法" + id);
    };
    // 验证场景的合法性
    SceneMgr.prototype.verify = function (id) {
        return true;
    };
    Object.defineProperty(SceneMgr, "inst", {
        /*对外提供唯一单例*/
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
