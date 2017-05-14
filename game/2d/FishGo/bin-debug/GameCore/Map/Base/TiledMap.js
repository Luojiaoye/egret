var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner on 2017/5/14.
 */
/*瓦片地图*/
var TiledMap = (function (_super) {
    __extends(TiledMap, _super);
    function TiledMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
     * 初始化
     * */
    TiledMap.prototype.initialize = function () {
        var _this = this;
        var url = GameConfig.MAP_PATH + this.id.toString() + ".tmx";
        var urlLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var data = egret.XML.parse(event.target.data);
            _this._tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            var tests = _this._tmxTileMap.getLayers();
            var layer = tests[1]; // 用于测试
            _this.parseLayer(layer);
            var renderObj = RenderMgr.inst.getRenderObject(_this.renderObjId);
            if (renderObj) {
                renderObj.display = _this._tmxTileMap;
                renderObj.render();
            }
            _this._width = _this._tmxTileMap.renderwidth;
            _this._height = _this._tmxTileMap.renderheight;
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    };
    // [应该在外表工具生成数据]
    TiledMap.prototype.parseLayer = function (layer) {
        var tiles = layer.layerData;
        var mapInfo = [];
        for (var i = 0; i < tiles.length; ++i) {
            var list = [];
            for (var j = 0; j < tiles[i].length; ++j) {
                var tile = tiles[i][j];
                if (tile && tile.gid == 18313)
                    list.push(1);
                else
                    list.push(0);
            }
            mapInfo.push(list);
        }
        this.data = mapInfo;
    };
    /*
     * 销毁对象
     * */
    TiledMap.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._tmxTileMap)
            this._tmxTileMap.destory();
    };
    return TiledMap;
}(Map));
__reflect(TiledMap.prototype, "TiledMap");
//# sourceMappingURL=TiledMap.js.map