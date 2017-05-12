/**
 * Created by confiner.kang on 2017/5/11.
 */
/*输入管理器*/
class InputMgr{
    private _curInput:IInput = null;    // 当前输入负责对象

    /*默认方式的输入*/
    public static DEFAULT_INPUT:string = "default";
    /*虚拟摇杆的输入*/
    public static JOYSTICK_INPUT:string = "joystick";

    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{

    }

    /*
    * 初始化输入方式
    * @param type 输入方式
    * */
    public initialize(type:string = InputMgr.DEFAULT_INPUT):void{
        if(type == InputMgr.JOYSTICK_INPUT){
            ResourceMgr.inst.loadGroup(type, ()=>{
                this._curInput = new JoystickInput();
                let joystick:egret.DisplayObjectContainer = <egret.DisplayObjectContainer><any>this._curInput;
                joystick.scaleX *= 0.5;
                joystick.scaleY *= 0.5;
                joystick.y = LayerMgr.inst.stage.stageHeight - joystick.height * 0.5;
                LayerMgr.inst.maskLayer.addChild(joystick);   // 暂时添加在遮罩层
            });
        }
    }

    /*获取x方向输入值*/
    public getAxisX():number{
        return this._curInput ? this._curInput.axisX : 0;
    }

    /*获取y方向输入值*/
    public getAxisY():number{
        return this._curInput ? this._curInput.axisY : 0;
    }

    /*获取力矩*/
    public getTorque():number{
        return this._curInput ? this._curInput.torque : 0;
    }

    private static _inst:InputMgr = null;
    /*对外提供单例管理器*/
    public static get inst():InputMgr{
        if(!InputMgr._inst)
            InputMgr._inst = new InputMgr();

        return InputMgr._inst;
    }
}