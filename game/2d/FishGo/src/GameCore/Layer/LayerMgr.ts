/**
 * Created by confiner.kang on 2017/5/8.
 */
/*层级管理器*/
import Sprite = egret.Sprite;
class LayerMgr{
    private _stage:egret.Stage = null;  // 舞台对象
    private _mapLayer:Sprite = null;    // 地图层
    private _sceneLayer:Sprite = null;  // 场景层
    private _sceneEffectLayer:Sprite = null;    // 场景特效层
    private _uiLayer:Sprite = null; // ui层
    private _maskLayer:Sprite = null;   // 遮罩层

    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
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
    }

    /*获取舞台对象*/
    public get stage():egret.Stage{
        return this._stage;
    }

    /*获取地图层*/
    get mapLayer(): egret.Sprite {
        return this._mapLayer;
    }

    /*获取场景层*/
    get sceneLayer(): egret.Sprite {
        return this._sceneLayer;
    }

    /*获取场景特效层*/
    get sceneEffectLayer(): egret.Sprite {
        return this._sceneEffectLayer;
    }

    /*获取ui层*/
    get uiLayer(): egret.Sprite {
        return this._uiLayer;
    }

    /*获取遮罩层*/
    get maskLayer(): egret.Sprite {
        return this._maskLayer;
    }

    private static _inst:LayerMgr = null;
    /*对外提供单例对象*/
    public static get inst():LayerMgr{
        if(!LayerMgr._inst)
            LayerMgr._inst = new LayerMgr();

        return LayerMgr._inst;
    }
}