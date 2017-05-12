/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
class Player extends MoveableGameUnit{
    // 玩家id
    private _id:number = 0;
    // x速度
    public speedX:number = 0;
    // y速度
    public speedY:number = 0;
    // 使用技能中
    private _useCD:boolean = false;

    // 化身
    private _avatar:DragonBoneRenderObject = null;

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
        console.log("玩家：" + this._id);
        this.born(this.x, this.y);    // 配置或者服务器的出生点
    }

    /*出生*/
    public born(x:number, y:number):void{
        this.x = x;
        this.y = y;
        console.log("玩家出生");
        if(this.avatar){
            this.avatar.armatureDisplay.x = this.x;
            this.avatar.armatureDisplay.y = this.y;
            let aniName:string = this._id == 2 ? "Move" : "steady";
            this.playAnimation(aniName, 0);
        }
    }

    /*站立*/
    public stand():void{
        if(this._useCD)
            return;

        console.log("玩家站立");
        let aniName:string = this._id == 2 ? "Move" : "steady";
        this.playAnimation(aniName, 0);
    }

    /*行走*/
    public walk():void{
        if(this._useCD)
            return;

        let aniName:string = this._id == 2 ? "Move" : "steady2";
        this.playAnimation(aniName, 0);
        if(this.avatar){
            this.avatar.armatureDisplay.scaleX = this.speedX < 0 ? -0.5 : 0.5;

            let destX:number = this.avatar.armatureDisplay.x + this.speedX * this.speed * this.sp;
            let destY:number = this.avatar.armatureDisplay.y + this.speedY * this.speed * this.sp;
            if(MapMgr.inst.destVerfy(destX, destY)){
                this.avatar.armatureDisplay.x =　destX;
                this.avatar.armatureDisplay.y = destY;
            }
        }
    }

    /*使用技能*/
    public useSkill(skillId:number):void{
        this._useCD = true;
        let animations:string[] = ["steady", "attack1", "attack1_+1", "attack2"];
        this.playAnimation(animations[skillId]);
    }

    // 播放动画
    private playAnimation(aniName:string, playTimes:number = 1):void{
        if(this.avatar){
            let state:dragonBones.AnimationState = this.avatar.armatureDisplay.animation.getState(aniName);
            if(!state || state && !state.isPlaying){
                this.avatar.armatureDisplay.animation.play(aniName, playTimes);
                console.log("动画名称： " + aniName + " 播放次数： " + playTimes);
            }

            if(!this.avatar.armatureDisplay.armature.hasEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE)){
                this.avatar.armatureDisplay.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.playComplete, this);
            }
        }
    }

    private playComplete(evt:dragonBones.ArmatureEvent):void{
        console.log("播放完动画：");
        this._useCD = false;
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
}