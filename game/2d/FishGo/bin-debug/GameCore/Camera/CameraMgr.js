var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/13.
 */
/*摄像机管理器*/
var CameraMgr = (function () {
    function CameraMgr() {
        this._target = null; //  目标对象
        this._camera = null; // 摄像机
        this.init();
    }
    // 初始化管理器
    CameraMgr.prototype.init = function () {
    };
    /*
    * 创建摄像机
    * @param type 默认摄像机类型
    * @param width 视窗宽度
    * @param heigh 视窗高度
    * */
    CameraMgr.prototype.createCamera = function (type, width, height) {
        if (type === void 0) { type = Camera.TYPE_DEFAULT; }
        this._camera = new Camera(type);
        this._camera.viewWidth = width;
        this._camera.viewHeight = height;
        return this._camera;
    };
    /*获取摄像机*/
    CameraMgr.prototype.getCamera = function () {
        return this._camera;
    };
    /*
    * 设置目标对象
    * @param target 目标
    * */
    CameraMgr.prototype.setTarget = function (target) {
        this._target = target;
    };
    /*
    * 获取目标对象
    * */
    CameraMgr.prototype.getTarget = function () {
        return this._target;
    };
    Object.defineProperty(CameraMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!CameraMgr._inst)
                CameraMgr._inst = new CameraMgr();
            return CameraMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return CameraMgr;
}());
CameraMgr._inst = null;
__reflect(CameraMgr.prototype, "CameraMgr");
//# sourceMappingURL=CameraMgr.js.map