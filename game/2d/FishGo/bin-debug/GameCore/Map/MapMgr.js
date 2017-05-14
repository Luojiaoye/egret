var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*地图管理器*/
var TMXObjectGroup = tiled.TMXObjectGroup;
var MapMgr = (function () {
    function MapMgr() {
        this.init();
    }
    MapMgr.prototype.init = function () {
    };
    MapMgr.prototype.addMap = function (map) {
        // 暂时只管理一个地图
        this._curMap = map;
    };
    /*
    * 销毁地图
    * */
    MapMgr.prototype.disposeMap = function () {
        if (this._curMap) {
            this._curMap.dispose();
            this._curMap = null;
        }
    };
    Object.defineProperty(MapMgr.prototype, "map", {
        get: function () {
            return this._curMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!MapMgr._inst)
                MapMgr._inst = new MapMgr();
            return MapMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return MapMgr;
}());
MapMgr._inst = null;
__reflect(MapMgr.prototype, "MapMgr");
//# sourceMappingURL=MapMgr.js.map