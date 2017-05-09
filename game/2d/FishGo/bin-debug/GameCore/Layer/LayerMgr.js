var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*层级管理器*/
var Sprite = egret.Sprite;
var LayerMgr = (function () {
    function LayerMgr() {
        this._stage = null; // 舞台对象
        this._mapLayer = null; // 地图层
        this._sceneLayer = null; // 场景层
        this._sceneEffectLayer = null; // 场景特效层
        this._uiLayer = null; // ui层
        this._maskLayer = null; // 遮罩层
        this.init();
    }
    // 初始化管理器
    LayerMgr.prototype.init = function () {
        this._stage = egret.MainContext.instance.stage;
        this._mapLayer = new Sprite();
        this._sceneLayer = new Sprite();
        this._sceneEffectLayer = new Sprite();
        this._uiLayer = new Sprite();
        this._maskLayer = new Sprite();
        this._stage.addChild(this._mapLayer);
        this._stage.addChild(this._sceneLayer);
        this._stage.addChild(this._sceneEffectLayer);
        this._stage.addChild(this._uiLayer);
        this._stage.addChild(this._maskLayer);
    };
    Object.defineProperty(LayerMgr.prototype, "mapLayer", {
        /*获取地图层*/
        get: function () {
            return this._mapLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerMgr.prototype, "sceneLayer", {
        /*获取场景层*/
        get: function () {
            return this._sceneLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerMgr.prototype, "sceneEffectLayer", {
        /*获取场景特效层*/
        get: function () {
            return this._sceneEffectLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerMgr.prototype, "uiLayer", {
        /*获取ui层*/
        get: function () {
            return this._uiLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerMgr.prototype, "maskLayer", {
        /*获取遮罩层*/
        get: function () {
            return this._maskLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!LayerMgr._inst)
                LayerMgr._inst = new LayerMgr();
            return LayerMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return LayerMgr;
}());
LayerMgr._inst = null;
__reflect(LayerMgr.prototype, "LayerMgr");
//# sourceMappingURL=LayerMgr.js.map