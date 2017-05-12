/**
 * Created by confiner.kang on 2017/5/9.
 */
/*窗体接口*/
interface IWindow{
    /*初始化界面*/
    initView():void;
    /*初始化事件*/
    initEvent():void;
    /*移除事件*/
    removeEvent():void;
    /*销毁界面*/
    dispose():void;
    /*隐藏*/
    hide():void;
    /*显示*/
    show():void;
    /*弹窗名字*/
    name:string;
}