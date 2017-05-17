var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*场景对象*/
var Scene = (function () {
    function Scene(id) {
        this._ready = false;
        this._id = id;
    }
    Object.defineProperty(Scene.prototype, "id", {
        /*场景id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    /*渲染场景*/
    Scene.prototype.build = function () {
        if (this._ready)
            return;
        trace("渲染场景");
        var bg = new egret.Bitmap();
        var map = "hall_bg_jpg";
        bg.texture = ResourceMgr.inst.getRes(map);
        LayerMgr.inst.sceneLayer.addChild(bg);
        trace("绘制地图");
        this._ready = true;
    };
    /*销毁*/
    Scene.prototype.dispose = function () {
        this._ready = false;
        LayerMgr.inst.sceneLayer.removeChildren();
    };
    return Scene;
}());
__reflect(Scene.prototype, "Scene");
