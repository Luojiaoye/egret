var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*渲染管理器*/
var RenderMgr = (function () {
    function RenderMgr() {
        this._renderDic = null; // 渲染对象字典
        this._dragonBoneFactory = null;
        this.init();
    }
    // 初始化管理器
    RenderMgr.prototype.init = function () {
        this._renderDic = {};
        this._dragonBoneFactory = new dragonBones.EgretFactory();
    };
    /*
    * 创建地图渲染对象
    * @param id 渲染id
    * @param mapId 地图id
    * */
    RenderMgr.prototype.createMapRenderObject = function (id, mapId) {
        if (this._renderDic[id])
            return;
        var renderObj = new MapRenderObject(id);
        renderObj.mapId = mapId;
        this._renderDic[id] = renderObj;
    };
    /*
     *创建渲染对象
     * @param id 渲染对象id
     * @param dragonBoneName 龙骨渲染对象名字
     * @param gid 游戏对象id
     */
    RenderMgr.prototype.createDragonBoneRenderObject = function (id, dragonBoneName, gid) {
        var _this = this;
        if (gid === void 0) { gid = 0; }
        if (this._renderDic[id]) {
            return;
        }
        else {
            // 没有创建过
            ResourceMgr.inst.loadGroup(dragonBoneName, function () {
                var renderObj = new DragonBoneRenderObject();
                var armature = _this.createDragonBone(dragonBoneName);
                if (armature) {
                    renderObj.initialize(id, armature.display);
                    renderObj.display = _this._dragonBoneFactory.buildArmatureDisplay(dragonBoneName);
                }
                if (gid > 0)
                    renderObj.gameUnitId = gid;
                _this._renderDic[id] = renderObj;
                // 渲染
                renderObj.render();
                var gameUnit = GameUnitMgr.inst.getGameUnit(gid);
                if (gameUnit) {
                    gameUnit.defaultAction();
                }
            }, this);
        }
    };
    // 创建龙骨
    RenderMgr.prototype.createDragonBone = function (dragonBoneName) {
        var dragonbonesData = RES.getRes(dragonBoneName + "_ske_json");
        var textureData = RES.getRes(dragonBoneName + "_tex_json");
        var texture = RES.getRes(dragonBoneName + "_tex_png");
        this._dragonBoneFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
        this._dragonBoneFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        return this._dragonBoneFactory.buildArmature(dragonBoneName);
    };
    /*
     *获取渲染对象
     *@渲染对象id
     **/
    RenderMgr.prototype.getRenderObject = function (id) {
        return this._renderDic[id];
    };
    /*移除渲染对象
    * @param id 渲染对象id
    * */
    RenderMgr.prototype.removeRenderObject = function (id) {
        var renderObj = this.getRenderObject(id);
        if (renderObj) {
            renderObj.destroy(true);
            this._renderDic[id] = null;
            delete this._renderDic[id];
        }
    };
    Object.defineProperty(RenderMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!RenderMgr._inst)
                RenderMgr._inst = new RenderMgr();
            return RenderMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return RenderMgr;
}());
RenderMgr._inst = null;
__reflect(RenderMgr.prototype, "RenderMgr");
//# sourceMappingURL=RenderMgr.js.map