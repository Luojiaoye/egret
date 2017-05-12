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
    /*是否可行走[待优化点 1.与角色逻辑分离 2.地图滚动]*/
    MapMgr.prototype.destVerfy = function (x, y) {
        var gX = Math.floor(x / MapMgr.GRID_WIDTH);
        var gY = Math.floor(y / MapMgr.GRID_HEIGHT);
        return this._data[gX][gY] == 1;
    };
    /*渲染地图
     * @param id 地图id
     */
    MapMgr.prototype.render = function (id) {
        // 需要优化点1.提取到renderMgr中 2.使用res方式加载资源 3.实现大地图的切片局部加载方式
        var url = GameConfig.MAP_PATH + id.toString() + ".tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var self = this;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            var tmxTileMap = new tiled.TMXTilemap(LayerMgr.inst.stage.stageWidth, LayerMgr.inst.stage.stageHeight, data, url);
            tmxTileMap.render();
            console.log("地图大小" + tmxTileMap.renderwidth + " : " + tmxTileMap.renderheight);
            var tests = tmxTileMap.getLayers();
            console.log("LayersCnt: " + tests.length);
            var layer = tests[1];
            self.parseLayer(layer);
            LayerMgr.inst.mapLayer.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    };
    MapMgr.prototype.parseLayer = function (layer) {
        console.log("Layer名称： " + layer.name);
        var tiles = layer.layerData;
        var result = "";
        if (!this._data)
            this._data = [];
        for (var i = 0; i < tiles.length; ++i) {
            var list = [];
            for (var j = 0; j < tiles[i].length; ++j) {
                var tile = tiles[i][j];
                if (tile && tile.gid == 18313) {
                    result += "1  ";
                    list.push(1);
                }
                else {
                    result += "0   ";
                    list.push(0);
                }
            }
            this._data.push(list);
            console.log(result);
            result = "";
        }
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
/*地图格子宽*/
MapMgr.GRID_WIDTH = 32;
/*地图格子高*/
MapMgr.GRID_HEIGHT = 32;
MapMgr._inst = null;
__reflect(MapMgr.prototype, "MapMgr");
//# sourceMappingURL=MapMgr.js.map