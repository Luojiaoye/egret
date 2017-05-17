/**
 * Created by confiner.kang on 2017/5/9.
 */
/*弹窗管理器*/
class WindowMgr{
    private _wins:any = null;
    /*窗体exml配置文件根目录*/
    public static UI_EXML_PATH:string = "resource/assets/ui/";

    private constructor(){
        this.init();
    }

   // 初始化管理器
    private init():void{
        this._wins = {};
    }

    /*
    * 初始化弹窗管理器配置
    * @param cfgDir 窗体exml配置文件根目录
    * */
    public initialize(cfgDir:string = "resource/assets/ui/"):void{
        WindowMgr.UI_EXML_PATH = cfgDir;
    }

    /*打开弹窗*/
    public show(winName:string):void{
        let win:IWindow = this.getWindow(winName);
        if(win){
            win.show();
        }
    }

    /*添加窗体*/
    public addWindow(win:IWindow):void{
        this._wins[win.name] = win;
    }

    /*获取弹窗对象
    * @winName 弹窗名字
    * */
    public getWindow(winName:string):IWindow{
        return this._wins[winName];
    }

    /*
    * 隐藏窗体
    * @param winName 弹窗名称
    * @param dispose 是否销毁对象
    * */
    public hide(winName:string, dispose:Boolean = false):void{
        let win:IWindow = <IWindow>this.getWindow(winName);
        if(win){
            win.hide();
            
            if(dispose)
                delete this._wins[winName];
        }
    }

    /*隐藏所有弹窗*/
    public hideWindows():void{
        trace("隐藏弹窗");
        for(var i in this._wins){
            if(this._wins[i])
                this.hide(this._wins[i].name);
        }
    }

    private static _inst:WindowMgr = null;
    /*对外提供单例对象*/
    public static get inst():WindowMgr{
        if(!WindowMgr._inst)
            WindowMgr._inst = new WindowMgr();

        return WindowMgr._inst;
    }
}