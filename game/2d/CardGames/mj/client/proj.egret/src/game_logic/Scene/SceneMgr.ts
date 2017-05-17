/**
 * Created by confiner.kang on 2017/5/16.
 */
/*场景管理器*/
class SceneMgr{
    private _scene:Scene = null;    // 当前场景

    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    /*
    * 进入场景
    * @param id 场景id
    * */
    public enter(id:number):void{
        // 隐藏所有界面
        WindowMgr.inst.hideWindows();

        trace("进入场景" + id);
        if(this.verify(id)){
            this._scene = new Scene(id);
            this._scene.build();
        }
        else
            trace("场景不合法" + id)
    }

    // 验证场景的合法性
    private verify(id:number):boolean{
        return true;
    }

    private static _inst:SceneMgr = null;
    /*对外提供唯一单例*/
    public static get inst():SceneMgr{
        if(!SceneMgr._inst)
            SceneMgr._inst = new SceneMgr();

        return SceneMgr._inst;
    }
}