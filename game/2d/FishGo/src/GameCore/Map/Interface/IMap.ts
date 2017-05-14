/**
 * Created by confiner on 2017/5/14.
 */
/*地图对象接口*/
interface IMap{
    /*地图id*/
    id:number;
    /*地图的渲染对象id*/
    renderObjId:number;
    /*地图偏移*/
    offset:egret.Point;
    /*地图数据*/
    data:number[][];
    /*x*/
    x:number;
    /*y*/
    y:number;
    /*width*/
    width:number;
    /*height*/
    height:number;
    /*
     * 检测是否可行走
     * @param x 舞台坐标像素
     * @param y 舞台坐标像素
     * */
    checkWalkAble(x:number,y:number):boolean;

    /*
    * 初始化
    * */
    initialize():void;

    /*
    * 销毁
    * */
    dispose():void;
}