var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner on 2017/5/13.
 */
/*移动管理器*/
var MoveMgr = (function () {
    function MoveMgr() {
        // 移动列表[key:gameUnitId value:MoveData]
        this._moveableList = null;
        this.init();
    }
    // 更新入口
    MoveMgr.prototype.update = function () {
        var unit = null;
        var destX = 0;
        var destY = 0;
        var data = null;
        var target = null;
        for (var item in this._moveableList) {
            data = this._moveableList[item];
            if (!data)
                continue;
            unit = GameUnitMgr.inst.getGameUnit(data.id);
            if (!unit)
                continue;
            target = CameraMgr.inst.getTarget();
            if (target && target.gameUnitId == unit.gameUnitId && MapMgr.inst.map) {
                console.log("当前玩家是摄像机目标");
                destX = unit.x + data.speedX;
                destY = unit.y + data.speedY;
                if (destX < 0 || destX > CameraMgr.inst.getCamera().viewWidth ||
                    destY < 0 || destY > CameraMgr.inst.getCamera().viewHeight)
                    continue;
                if (!MapMgr.inst.map.checkWalkAble(destX, destY))
                    continue; // 不可行走
                // 地图滚动和玩家行走逻辑
                if (data.speedX < 0) {
                    if (MapMgr.inst.map.x - data.speedX > 0
                        || !(unit.x > (LayerMgr.inst.stage.stageWidth - CameraMgr.inst.getCamera().focusWidth) * 0.5
                            && unit.x < (LayerMgr.inst.stage.stageWidth + CameraMgr.inst.getCamera().focusWidth) * 0.5))
                        unit.x = destX;
                    else
                        MapMgr.inst.map.x -= data.speedX;
                }
                else if (data.speedX > 0) {
                    if (MapMgr.inst.map.x - data.speedX + MapMgr.inst.map.width < CameraMgr.inst.getCamera().viewWidth
                        || !(unit.x > (LayerMgr.inst.stage.stageWidth - CameraMgr.inst.getCamera().focusWidth) * 0.5
                            && unit.x < (LayerMgr.inst.stage.stageWidth + CameraMgr.inst.getCamera().focusWidth) * 0.5))
                        unit.x = destX;
                    else
                        MapMgr.inst.map.x -= data.speedX;
                }
                if (data.speedY < 0) {
                    if (MapMgr.inst.map.y - data.speedY > 0
                        || !(unit.y > (LayerMgr.inst.stage.stageHeight - CameraMgr.inst.getCamera().focusHeight) * 0.5
                            && unit.y < (LayerMgr.inst.stage.stageHeight + CameraMgr.inst.getCamera().focusHeight) * 0.5))
                        unit.y = destY;
                    else
                        MapMgr.inst.map.y -= data.speedY;
                }
                else if (data.speedY > 0) {
                    if (MapMgr.inst.map.y - data.speedY + MapMgr.inst.map.height < CameraMgr.inst.getCamera().viewHeight
                        || !(unit.y > (LayerMgr.inst.stage.stageHeight - CameraMgr.inst.getCamera().focusHeight) * 0.5
                            && unit.y < (LayerMgr.inst.stage.stageHeight + CameraMgr.inst.getCamera().focusHeight) * 0.5))
                        unit.y = destY;
                    else
                        MapMgr.inst.map.y -= data.speedY;
                }
            }
        }
    };
    /*创建移动单元*/
    MoveMgr.prototype.createMoveData = function (gameUnit) {
        if (this.getMoveData(gameUnit.gameUnitId))
            return this.getMoveData(gameUnit.gameUnitId);
        var moveData = new MoveData(gameUnit.gameUnitId);
        this._moveableList[gameUnit.gameUnitId] = moveData;
        return moveData;
    };
    /*
    * 删除移动数据
    * @param id 玩家id
    * */
    MoveMgr.prototype.removeMoveData = function (id) {
        var moveData = this.getMoveData(id);
        if (moveData) {
            this._moveableList[id] = null;
            delete this._moveableList[id];
        }
    };
    /*
     *获取移动数据
     * @param id 玩家id
     **/
    MoveMgr.prototype.getMoveData = function (id) {
        return this._moveableList[id];
    };
    //初始化管理器
    MoveMgr.prototype.init = function () {
        this._moveableList = {};
    };
    Object.defineProperty(MoveMgr, "inst", {
        /*对外提供单例对象*/
        get: function () {
            if (!MoveMgr._inst)
                MoveMgr._inst = new MoveMgr();
            return MoveMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return MoveMgr;
}());
MoveMgr._inst = null;
__reflect(MoveMgr.prototype, "MoveMgr");
//# sourceMappingURL=MoveMgr.js.map