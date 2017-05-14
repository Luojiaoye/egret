var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/14.
 */
/*地图渲染对象*/
var MapRenderObject = (function () {
    function MapRenderObject(id) {
        this._id = id;
    }
    Object.defineProperty(MapRenderObject.prototype, "id", {
        get: function () {
            // 渲染对象id
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    /*渲染*/
    MapRenderObject.prototype.render = function () {
        this.display.render();
        LayerMgr.inst.mapLayer.addChild(this.display);
    };
    Object.defineProperty(MapRenderObject.prototype, "mapId", {
        get: function () {
            return this._mapId;
        },
        set: function (value) {
            this._mapId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapRenderObject.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (value) {
            this._display = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapRenderObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            this.display.x = this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapRenderObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            this.display.y = this._y;
        },
        enumerable: true,
        configurable: true
    });
    return MapRenderObject;
}());
__reflect(MapRenderObject.prototype, "MapRenderObject", ["IRender"]);
//# sourceMappingURL=MapRenderObject.js.map