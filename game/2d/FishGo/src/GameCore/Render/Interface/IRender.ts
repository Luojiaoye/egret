/**
 * Created by confiner on 2017/5/14.
 */
/*渲染借口*/
interface IRender{
    /*渲染id*/
    id:number;

    /*显示对象*/
    display:egret.DisplayObjectContainer;

    /*x*/
    x:number;
    /*y*/
    y:number

    /*渲染*/
    render():void;
}