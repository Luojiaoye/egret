/**
 * Created by confiner on 2017/5/13.
 */
/*摄像机管理器*/
class CameraMgr{
    private _target:IGameUnit = null;   //  目标对象
    private _camera:Camera = null;  // 摄像机

    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    /*
    * 创建摄像机
    * @param type 默认摄像机类型
    * @param width 视窗宽度
    * @param heigh 视窗高度
    * */
    public createCamera(type:number = Camera.TYPE_DEFAULT, width?:number, height?:number):Camera{
        this._camera = new Camera(type);
        this._camera.viewWidth = width;
        this._camera.viewHeight = height;
        return this._camera;
    }

    /*获取摄像机*/
    public getCamera():Camera{
        return this._camera;
    }

    /*
    * 设置目标对象
    * @param target 目标
    * */
    public setTarget<T extends IGameUnit>(target:T):void{
        this._target = target;
    }

    /*
    * 获取目标对象
    * */
    public getTarget<T extends IGameUnit>():T{
        return <T>this._target;
    }

    private static _inst:CameraMgr = null;
    /*对外提供唯一单例*/
    public static get inst():CameraMgr{
        if(!CameraMgr._inst)
            CameraMgr._inst = new CameraMgr();

        return CameraMgr._inst;
    }
}