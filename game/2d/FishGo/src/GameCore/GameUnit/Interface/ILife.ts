/**
 * Created by confiner.kang on 2017/5/9.
 */
/*生命对象接口*/
interface ILife{
    /*生命值*/
    hp:number;
    /*魔法值*/
    mp:number;
    /*体力值*/
    sp:number;

    // 默认的行为
    defaultAction():void;
}