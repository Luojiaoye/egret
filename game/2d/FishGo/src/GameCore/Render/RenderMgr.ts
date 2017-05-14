/**
 * Created by confiner.kang on 2017/5/8.
 */
/*渲染管理器*/
class RenderMgr{
    private _renderDic:Object = null;    // 渲染对象字典
    private _dragonBoneFactory:dragonBones.EgretFactory = null;
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        this._renderDic = {};
        this._dragonBoneFactory = new dragonBones.EgretFactory();
    }

    /*
    * 创建地图渲染对象
    * @param id 渲染id
    * @param mapId 地图id
    * */
    public createMapRenderObject<T extends MapRenderObject>(id:number, mapId:number):void{
        if(this._renderDic[id])
            return;

        let renderObj:MapRenderObject = new MapRenderObject(id);
        renderObj.mapId = mapId;
        this._renderDic[id] = renderObj;
    }

    /*
     *创建渲染对象
     * @param id 渲染对象id
     * @param dragonBoneName 龙骨渲染对象名字
     * @param gid 游戏对象id
     */
    public createDragonBoneRenderObject<T extends MoveableGameUnit>(id:number, dragonBoneName:string, gid:number = 0):void{
        if(this._renderDic[id]){
            return;
        }
        else{
            // 没有创建过
            ResourceMgr.inst.loadGroup(dragonBoneName,()=>{
                let renderObj:DragonBoneRenderObject = new DragonBoneRenderObject();
                let armature:dragonBones.Armature = this.createDragonBone(dragonBoneName);
                if(armature){
                    renderObj.initialize(id, armature.display);
                    renderObj.display = this._dragonBoneFactory.buildArmatureDisplay(dragonBoneName);
                }

                if(gid > 0)
                    renderObj.gameUnitId = gid;
                this._renderDic[id] = renderObj;

                // 渲染
                renderObj.render();

                let gameUnit:T = GameUnitMgr.inst.getGameUnit<T>(gid);
                if(gameUnit){
                    gameUnit.defaultAction();
                }
            }, this);
        }
    }

   // 创建龙骨
    private createDragonBone(dragonBoneName:string):dragonBones.Armature{
        let dragonbonesData = RES.getRes(dragonBoneName + "_ske_json");
        let textureData = RES.getRes(dragonBoneName + "_tex_json");
        let texture = RES.getRes(dragonBoneName + "_tex_png");

        this._dragonBoneFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
        this._dragonBoneFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
        return this._dragonBoneFactory.buildArmature(dragonBoneName);
    }

    /*
     *获取渲染对象
     *@渲染对象id
     **/
    public getRenderObject<T extends IRender>(id:number):T{
        return this._renderDic[id];
    }

    /*移除渲染对象
    * @param id 渲染对象id
    * */
    public removeRenderObject(id:number):void{
        let renderObj:RenderObject = this.getRenderObject<RenderObject>(id);
        if(renderObj){
            renderObj.destroy(true);
            this._renderDic[id] = null;
            delete this._renderDic[id];
        }
    }


    private static _inst:RenderMgr = null;
    /*对外提供单例对象*/
    public static get inst():RenderMgr{
        if(!RenderMgr._inst)
            RenderMgr._inst = new RenderMgr();

        return RenderMgr._inst;
    }
}