/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
class Player extends MoveableGameUnit{
    // 玩家id
    private _id:number = 0;
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
        this.born();
    }

    /*出生*/
    public born():void{
        console.log(dragonBones.DragonBones.VERSION);
        console.log("玩家出生");
        if(this.avatar){
            this.avatar.armatureDisplay.x = 500;
            this.avatar.armatureDisplay.y = 400;
            this.avatar.armatureDisplay.animation.play("steady2");
        }
    }

    /*站立*/
    public stand():void{
        console.log("玩家站立");
    }

    get avatar():DragonBoneRenderObject{
        if(!this._avatar)
            this._avatar = RenderMgr.inst.getRenderObject<DragonBoneRenderObject>(this.renderObjId);

        return this._avatar;
    }
}