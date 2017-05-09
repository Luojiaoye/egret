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
     * */
    public loadGroup(groupName:string):void{
        if(RES.isGroupLoaded(groupName))
            return;

        RES.loadGroup(groupName);
    }

    // 配置文件加载完成
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }

    // 资源组加载完成
    private onResourceLoadComplete(event: RES.ResourceEvent){
        if(this._callbacks[event.groupName]){
            this._callbacks[event.groupName].apply();
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