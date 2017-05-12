/**
 * Created by confiner.kang on 2017/5/8.
 */
/*资源管理器*/
class ResourceMgr{
    private _callbacks:Object = null;   // 回调字典

    private constructor(){
        this.init();
    }

    // 初始化
    private init():void{
        this._callbacks = {};
    }

    /*
     * 初始化资源管理器
     * @param 配置文件[必须唯一resource文件夹下]
     */
    public initialize(config:string = "resource.json"):void{
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/" + config, "resource/");
    }

    /*
     * 加载资源组
     * @param groupName 资源组名
     * @param callback 回调函数
     * @param obj 当前对象
     * @param args 回调函数的参数
     * */
    public loadGroup(groupName:string, callback:Function, obj?:any, args?:any):void{
        if(RES.isGroupLoaded(groupName)){
            if(callback)
                callback.call(obj, args);
        }
        else{
            this._callbacks[groupName] = {"func":callback, "inst":obj, "args":args};
            RES.loadGroup(groupName);
        }
    }

    /*
    * 获取资源
    * @param key 资源键值
    * */
    public getRes(key:string):any{
        return RES.getRes(key);
    }

    // 配置文件加载完成
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }

    // 资源组加载完成
    private onResourceLoadComplete(event: RES.ResourceEvent){
        if(this._callbacks[event.groupName] && this._callbacks[event.groupName].func){
            this._callbacks[event.groupName].func.call(this._callbacks[event.groupName].inst, this._callbacks[event.groupName].args);
            delete this._callbacks[event.groupName];
        }
    }

    // 资源组加载出错
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    // 资源组加载出错
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
    }

    // 资源组加载进度
    private onResourceProgress(event: RES.ResourceEvent) {
        console.log("当前：" + event.itemsLoaded + "总大小：" + event.itemsTotal)
    }

    private static _inst:ResourceMgr = null;
    /*对外提供单例对象*/
    public static get inst():ResourceMgr{
        if(!ResourceMgr._inst)
            ResourceMgr._inst = new ResourceMgr();

        return ResourceMgr._inst;
    }
}