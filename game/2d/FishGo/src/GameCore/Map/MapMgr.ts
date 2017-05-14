/**
 * Created by confiner.kang on 2017/5/8.
 */
/*地图管理器*/
import TMXObjectGroup = tiled.TMXObjectGroup;
class MapMgr{
    private _curMap:IMap;    // 当前地图

    private constructor(){
        this.init();
    }

    private init():void{
    }

    public addMap<T extends IMap>(map:T):void{
        // 暂时只管理一个地图
        this._curMap = map;
    }

    /*
    * 销毁地图
    * */
    public disposeMap():void{
        if(this._curMap){
            this._curMap.dispose();
            this._curMap = null;
        }
    }

    get map():IMap {
        return this._curMap;
    }

    private static _inst:MapMgr = null;
    /*对外提供单例对象*/
    public static get inst():MapMgr{
        if(!MapMgr._inst)
            MapMgr._inst = new MapMgr();

        return MapMgr._inst;
    }
}