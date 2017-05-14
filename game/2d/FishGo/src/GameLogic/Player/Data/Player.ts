/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
class Player extends MoveableGameUnit{
    // 玩家id
    private _id:number = 0;
    // 行为状态
    private _actionStatus:number = ActionType.INVALID;
    // 移动数据
    private _moveData:MoveData = null;
    // 化身
    private _avatar:DragonBoneRenderObject = null;
    // 方向
    private _dir:number = 0;

    public constructor(id:number, gid:number, rid:number){
        super(gid, rid);
        this._id = id;
    }

    /*玩家id*/
    public get id():number{
        return this._id;
    }

    /*覆盖父类的默认行为*/
    public defaultAction(): void {
        this.avatar.display.scaleX = 0.5;
        this.avatar.display.scaleY = 0.5;   // 测试代码

        this.born(this.x, this.y);    // 配置或者服务器的出生点
    }

    /*出生*/
    public born(x:number, y:number):void{
        this.x = x;
        this.y = y;
        if(this.avatar){
            this.avatar.display.x = this.x;
            this.avatar.display.y = this.y;
            this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.born, 0);
        }

        this._moveData = MoveMgr.inst.createMoveData<Player>(this);

        this._actionStatus = ActionType.BORN;
    }

    /*站立*/
    public stand():void{
        if(this._actionStatus == ActionType.SKILL)
            return;

        this._actionStatus = ActionType.STAND;
        this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.stand, 0);
    }

    /*行走*/
    public walk():void{
        if(this._actionStatus == ActionType.SKILL)
            return;

        this._actionStatus = ActionType.WALK;
        this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.walk, 0);
    }

    /*使用技能*/
    public useSkill(skillId:number):void{
        this._actionStatus = ActionType.SKILL;
        let animations:string[] = ["",PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.attack, PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.skill, PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.unique];
        this.playAnimation(animations[skillId]);
    }

    // 播放动画
    private playAnimation(aniName:string, playTimes:number = 1):void{
        if(this.avatar){
            this.avatar.display.scaleX = this._dir < 0 ? -0.5 : 0.5;
            let state:dragonBones.AnimationState = this.avatar.display.animation.getState(aniName);
            if(!state || state && !state.isPlaying){
                this.avatar.display.animation.play(aniName, playTimes);
            }

            if(!this.avatar.display.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)){
                this.avatar.display.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.playComplete, this);
            }
        }
    }

    private playComplete(evt:dragonBones.ArmatureEvent):void{
        this._actionStatus = ActionType.STAND;
    }

    get avatar():DragonBoneRenderObject{
        if(!this._avatar)
            this._avatar = RenderMgr.inst.getRenderObject<DragonBoneRenderObject>(this.renderObjId);

        return this._avatar;
    }

    /*是否是主角*/
    public isHero():Boolean{
        return this.gameUnitId == PlayerDataMgr.inst.getHeroData().id;
    }

    public update():void{
        if(!this.isHero())
            return;

        let xAxis:number = InputMgr.inst.getAxisX();
        let yAxis:number = InputMgr.inst.getAxisY();
        if(this._moveData){
            this._moveData.axisX = xAxis;
            this._moveData.axisY = yAxis;
            this._dir = xAxis == 0 ? this._dir: xAxis;
            this._moveData.speed = this.speed * InputMgr.inst.getTorque();
        }

        // [需要 优化为ActionMgr中去]
        if(yAxis != 0 || xAxis != 0)
            this.walk();
        else
            this.stand()
    }
}

class ActionType{
    /*无效动作*/
    public static INVALID:number = -1;
    /*出生动作*/
    public static BORN:number = 0;
    /*站立动作*/
    public static STAND:number = 1;
    /*行走动作*/
    public static WALK:number =  2;
    /*技能动作*/
    public static SKILL:number = 3;
}