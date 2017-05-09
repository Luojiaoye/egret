var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*地图管理器*/
var MapMgr = (function () {
    function MapMgr() {
    }
    /*渲染地图
     * @param id 地图id
     */
    MapMgr.prototype.render = function (id) {
        // 需要优化点1.提取到renderMgr中 2.使用res方式加载资源 3.实现大地图的切片局部加载方式
        var url = GameConfig.MAP_PATH + id.toString() + ".tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            tmxTileMap.render();
            LayerMgr.inst.mapLayer.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    };
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