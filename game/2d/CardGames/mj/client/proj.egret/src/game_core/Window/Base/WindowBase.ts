/**
 * Created by confiner.kang on 2017/5/9.
 */
abstract class WindowBase extends eui.Panel implements IWindow{
    private _name:string = null;
    public constructor(winName:string, exml:string = null){
        super();
        this._name = winName;
        this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = exml ? exml : WindowMgr.UI_EXML_PATH + this._name + ".exml";
        trace("exml:" + this.skinName);
        WindowMgr.inst.addWindow(this);
    }

    // ui加载完成
    private uiCompHandler():void {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.initView();
        this.initEvent();
    }

    /*隐藏*/
    hide():void{
        trace("隐藏界面");
        this.close();
    }
    /*显示*/
    show():void{
        // 添加到ui层
        LayerMgr.inst.uiLayer.addChild(this);
    }

    /*获取弹窗名字*/
    public get name():string{
        return this._name;
    }

    /*初始化界面*/
    abstract initView():void;

    /*初始化事件*/
    abstract initEvent():void;

    /*移除事件*/
    abstract removeEvent():void;

    /*销毁界面*/
    abstract dispose():void;
}