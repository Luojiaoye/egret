var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/11.
 */
/*输入管理器*/
var InputMgr = (function () {
    function InputMgr() {
        this._curInput = null; // 当前输入负责对象
        this.init();
    }
    // 初始化管理器
    InputMgr.prototype.init = function () {
    };
    /*
    * 初始化输入方式
    * @param type 输入方式
    * */
    InputMgr.prototype.initialize = function (type) {
        var _this = this;
        if (type === void 0) { type = InputMgr.DEFAULT_INPUT; }
        if (type == InputMgr.JOYSTICK_INPUT) {
            ResourceMgr.inst.loadGroup(type, function () {
                _this._curInput = new JoystickInput();
                var joystick = _this._curInput;
                joystick.scaleX *= 0.5;
                joystick.scaleY *= 0.5;
                joystick.y = LayerMgr.inst.stage.stageHeight - joystick.height * 0.5;
                LayerMgr.inst.maskLayer.addChild(joystick); // 暂时添加在遮罩层
            });
        }
    };
    /*获取x方向输入值*/
    InputMgr.prototype.getAxisX = function () {
        return this._curInput ? this._curInput.axisX : 0;
    };
    /*获取y方向输入值*/
    InputMgr.prototype.getAxisY = function () {
        return this._curInput ? this._curInput.axisY : 0;
    };
    /*获取力矩*/
    InputMgr.prototype.getTorque = function () {
        return this._curInput ? this._curInput.torque : 0;
    };
    Object.defineProperty(InputMgr, "inst", {
        /*对外提供单例管理器*/
        get: function () {
            if (!InputMgr._inst)
                InputMgr._inst = new InputMgr();
            return InputMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return InputMgr;
}());
/*默认方式的输入*/
InputMgr.DEFAULT_INPUT = "default";
/*虚拟摇杆的输入*/
InputMgr.JOYSTICK_INPUT = "joystick";
InputMgr._inst = null;
__reflect(InputMgr.prototype, "InputMgr");
//# sourceMappingURL=InputMgr.js.map