var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/14.
 */
/*地图对象*/
var Map = (function () {
    function Map(id, gridWidth, gridHeight) {
        this._x = 0;
        this._y = 0;
        this._id = id;
        this._gw = gridWidth;
        this._gh = gridHeight;
    }
    Object.defineProperty(Map.prototype, "id", {
        /*地图id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            var renderObj = RenderMgr.inst.getRenderObject(this.renderObjId);
            if (renderObj)
                renderObj.x = this._x;
            // let lastX:number = this._x;
            // this._x = value;
            // if(!this.testWalk()){
            //     console.log("xMap 行走失败");
            //     this._x = lastX;
            // }
            // else{
            //     console.log("xMap 行走成功" + this._x);
            //     let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
            //     if(renderObj)
            //         renderObj.x = this._x;
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            var renderObj = RenderMgr.inst.getRenderObject(this.renderObjId);
            if (renderObj)
                renderObj.y = this._y;
            // let lastY:number = this._y;
            // this._y = value;
            // if(!this.testWalk()){
            //     console.log("yMap 行走失败");
            //     this._y = lastY;
            // }
            // else{
            //     console.log("yMap 行走成功" + this._y);
            //     let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
            //     if(renderObj)
            //         renderObj.y = this._y;
            // }
        },
        enumerable: true,
        configurable: true
    });
    // 测试行走
    Map.prototype.testWalk = function () {
        return this.checkWalkAble(this._x, this._y);
    };
    Object.defineProperty(Map.prototype, "offset", {
        /*
        * 地图偏移*/
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "data", {
        /*
        * 地图数据
        **/
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    /*
    * 检测是否可行走
    * @param x 舞台坐标像素
    * @param y 舞台坐标像素
    * */
    Map.prototype.checkWalkAble = function (x, y) {
        if (!this._data)
            return false;
        var gX = Math.floor((x - this._x) / this._gw);
        var gY = Math.floor((y - this._y) / this._gh);
        console.log("gx:(" + gX + ", " + gY + ")");
        return this._data[gX][gY] == 1;
    };
    Object.defineProperty(Map.prototype, "renderObjId", {
        /*地图渲染对象id*/
        get: function () {
            return this._rid;
        },
        /*地图渲染对象id*/
        set: function (rid) {
            this._rid = rid;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * 初始化
     * */
    Map.prototype.initialize = function () {
    };
    /*
    * 销毁对象
    * */
    Map.prototype.dispose = function () {
        if (this._data) {
            this._data.length = 0;
            this._data = null;
        }
    };
    Object.defineProperty(Map.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    return Map;
}());
__reflect(Map.prototype, "Map", ["IMap"]);
//# sourceMappingURL=Map.js.map