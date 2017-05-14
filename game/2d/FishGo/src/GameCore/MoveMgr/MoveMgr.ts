/**
 * Created by confiner on 2017/5/13.
 */
/*移动管理器*/
class MoveMgr{
    // 移动列表[key:gameUnitId value:MoveData]
    private _moveableList:Object = null;
    private constructor(){
        this.init();
    }

    // 更新入口
    public update():void{
        var unit:MoveableGameUnit = null;
        var destX:number = 0;
        var destY:number = 0;
        var data:MoveData = null;
        var target:MoveableGameUnit = null;
        for(let item in this._moveableList){
            data = <MoveData>this._moveableList[item];
            if(!data)
                continue;
            unit = GameUnitMgr.inst.getGameUnit<MoveableGameUnit>(data.id);
            if(!unit)
                continue;

            target = CameraMgr.inst.getTarget<MoveableGameUnit>();
            if(target && target.gameUnitId == unit.gameUnitId && MapMgr.inst.map){
                console.log("当前玩家是摄像机目标");

                destX = unit.x + data.speedX;
                destY = unit.y + data.speedY;

                if(destX < 0 || destX > CameraMgr.inst.getCamera().viewWidth ||
                destY < 0 || destY > CameraMgr.inst.getCamera().viewHeight)
                    continue;

                if(!MapMgr.inst.map.checkWalkAble(destX, destY))
                    continue;   // 不可行走

                // 地图滚动和玩家行走逻辑
                if(data.speedX < 0){
                    if(MapMgr.inst.map.x - data.speedX > 0
                        || !(unit.x > (LayerMgr.inst.stage.stageWidth - CameraMgr.inst.getCamera().focusWidth) * 0.5
                        && unit.x < (LayerMgr.inst.stage.stageWidth + CameraMgr.inst.getCamera().focusWidth) * 0.5))
                        unit.x = destX;
                    else
                        MapMgr.inst.map.x -= data.speedX;
                }
                else if(data.speedX > 0){
                    if(MapMgr.inst.map.x - data.speedX + MapMgr.inst.map.width < CameraMgr.inst.getCamera().viewWidth
                    || !(unit.x > (LayerMgr.inst.stage.stageWidth - CameraMgr.inst.getCamera().focusWidth) * 0.5
                        && unit.x < (LayerMgr.inst.stage.stageWidth + CameraMgr.inst.getCamera().focusWidth) * 0.5))
                        unit.x = destX;
                    else
                        MapMgr.inst.map.x -= data.speedX;
                }

                if(data.speedY < 0){
                    if(MapMgr.inst.map.y - data.speedY > 0
                        || !(unit.y > (LayerMgr.inst.stage.stageHeight - CameraMgr.inst.getCamera().focusHeight) * 0.5
                        && unit.y < (LayerMgr.inst.stage.stageHeight + CameraMgr.inst.getCamera().focusHeight) * 0.5))
                        unit.y = destY;
                    else
                        MapMgr.inst.map.y -= data.speedY;
                }
                else if(data.speedY > 0){
                    if(MapMgr.inst.map.y - data.speedY + MapMgr.inst.map.height < CameraMgr.inst.getCamera().viewHeight
                    || !(unit.y > (LayerMgr.inst.stage.stageHeight - CameraMgr.inst.getCamera().focusHeight) * 0.5
                        && unit.y < (LayerMgr.inst.stage.stageHeight + CameraMgr.inst.getCamera().focusHeight) * 0.5))
                        unit.y = destY;
                    else
                        MapMgr.inst.map.y -= data.speedY;
                }
            }
        }
    }

    /*创建移动单元*/
    public createMoveData<T extends MoveableGameUnit>(gameUnit:T):MoveData{
        if(this.getMoveData(gameUnit.gameUnitId))
            return this.getMoveData(gameUnit.gameUnitId);

        let moveData:MoveData = new MoveData(gameUnit.gameUnitId);
        this._moveableList[gameUnit.gameUnitId] = moveData;
        return moveData;
    }

    /*
    * 删除移动数据
    * @param id 玩家id
    * */
    public removeMoveData(id:number):void{
        let moveData:MoveData = this.getMoveData(id);
        if(moveData){
            this._moveableList[id] = null;
            delete this._moveableList[id];
        }
    }

    /*
     *获取移动数据
     * @param id 玩家id
     **/
    public getMoveData(id:number):MoveData{
        return this._moveableList[id];
    }

    //初始化管理器
    private init():void{
        this._moveableList = {};
    }

    private static _inst:MoveMgr = null;
    /*对外提供单例对象*/
    public static get inst():MoveMgr{
        if(!MoveMgr._inst)
            MoveMgr._inst = new MoveMgr();

        return MoveMgr._inst;
    }
}