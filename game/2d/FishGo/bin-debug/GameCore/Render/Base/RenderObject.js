var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*渲染对象*/
var RenderObject = (function () {
    function RenderObject() {
        this._id = 0; // 渲染id
        this._gameUnitId = 0; // 游戏对象id
        this._displayObj = null;
    }
    Object.defineProperty(RenderObject.prototype, "id", {
        /*渲染对象id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "gameUnitId", {
        /*游戏对象id*/
        get: function () {
            return this._gameUnitId;
        },
        /*游戏对象id*/
        set: function (value) {
            this._gameUnitId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "displayObj", {
        /*显示对象*/
        get: function () {
            return this._displayObj;
        },
        enumerable: true,
        configurable: true
    });
    /*
     *初始化渲染对象
     * @param id 渲染对象id
     * @param displayObj 显示对象
     * */
    RenderObject.prototype.initialize = function (id, displayObj) {
        this._id = id;
        this._displayObj = displayObj;
    };
    /* 销毁渲染对象
     * @param dispose 是否释放内存
     */
    RenderObject.prototype.destroy = function (dispose) {
        if (dispose === void 0) { dispose = false; }
        if (!this._displayObj.parent) {
            this._displayObj.parent.removeChild(this._displayObj);
            this._displayObj = null;
        }
        if (dispose) {
            if (this._displayObj["dispose"])
                this._displayObj["dispose"].apply(this._displayObj, true);
        }
    };
    return RenderObject;
}());
__reflect(RenderObject.prototype, "RenderObject");
//# sourceMappingURL=RenderObject.js.map