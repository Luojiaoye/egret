var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*资源管理器*/
var ResourceMgr = (function () {
    function ResourceMgr() {
        this._callbacks = null; // 回调字典
        this.init();
    }
    // 初始化
    ResourceMgr.prototype.init = function () {
        this._callbacks = {};
    };
    /*
     * 初始化资源管理器
     * @param 配置文件[必须唯一resource文件夹下]
     */
    ResourceMgr.prototype.initialize = function (config) {
        if (config === void 0) { config = "resource.json"; }
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/" + config, "resource/");
    };
    /*
     * 加载资源组
     * @param groupName 资源组名
     * @param callback 回调函数
     * @param obj 当前对象
     * @param args 回调函数的参数
     * */
    ResourceMgr.prototype.loadGroup = function (groupName, callback, obj, args) {
        if (RES.isGroupLoaded(groupName)) {
            if (callback)
                callback.call(obj, args);
        }
        else {
            this._callbacks[groupName] = { "func": callback, "inst": obj, "args": args };
            RES.loadGroup(groupName);
        }
    };
    /*
    * 获取资源
    * @param key 资源键值
    * */
    ResourceMgr.prototype.getRes = function (key) {
        return RES.getRes(key);
    };
    // 配置文件加载完成
    ResourceMgr.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    };
    // 资源组加载完成
    ResourceMgr.prototype.onResourceLoadComplete = function (event) {
        if (this._callbacks[event.groupName] && this._callbacks[event.groupName].func) {
            this._callbacks[event.groupName].func.call(this._callbacks[event.groupName].inst, this._callbacks[event.groupName].args);
            delete this._callbacks[event.groupName];
        }
    };
    // 资源组加载出错
    ResourceMgr.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    // 资源组加载出错
    ResourceMgr.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
    };
    // 资源组加载进度
    ResourceMgr.prototype.onResourceProgress = function (event) {
        console.log("当前：" + event.itemsLoaded + "总大小：" + event.itemsTotal);
    };
    Object.defineProperty(ResourceMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!ResourceMgr._inst)
                ResourceMgr._inst = new ResourceMgr();
            return ResourceMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return ResourceMgr;
}());
ResourceMgr._inst = null;
__reflect(ResourceMgr.prototype, "ResourceMgr");
//# sourceMappingURL=ResourceMgr.js.map