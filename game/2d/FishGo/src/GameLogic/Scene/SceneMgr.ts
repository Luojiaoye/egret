/**
 * Created by confiner.kang on 2017/5/8.
 */
/*场景管理器*/
class SceneMgr{
    private _lastSceneId:number = 0;    // 上一次的场景id
    private _currentSceneId:number = 0; // 当前场景id

    private constructor(){
        this.init();
    }

    private init():void{

    }

    /*
     * 进入场景
     * @param id 场景id
     * */
    public enter(id:number):void{
        if(this.verify(id)){
            this._currentSceneId = id;
            // 处理场景的逻辑写在这里

            MapMgr.inst.render(1);
        }
    }

    /*退出场景*/
    public exit(id:number):void{
        // 退出场景的逻辑处理
    }

    // 验证场景id是否有效
    private verify(id:number):Boolean{
        return true;
    }

    private static _inst:SceneMgr = null;
    /*对外提供单例对象*/
    public static get inst():SceneMgr{
        if(!SceneMgr._inst)
            SceneMgr._inst = new SceneMgr();

        return SceneMgr._inst;
    }
}