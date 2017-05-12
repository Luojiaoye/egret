var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/11.
 */
/*摇杆输入*/
var JoystickInput = (function (_super) {
    __extends(JoystickInput, _super);
    function JoystickInput() {
        var _this = _super.call(this) || this;
        _this._bg = null;
        _this._touchBg = null;
        _this._btnBg = null;
        _this._startPos = null; // 开始位置
        _this._curPos = null; // 当前位置
        _this._resetPos = null; // 重置位置
        _this._axisX = 0; // x分量
        _this._axisY = 0; // y分量
        _this._torque = 0; // 力矩值
        _this._sensitivity = 1; // 灵密度[需要优化处理]
        _this.init();
        return _this;
    }
    // 初始化
    JoystickInput.prototype.init = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = ResourceMgr.inst.getRes("joystic_bg_png");
        this.addChild(this._bg);
        this._touchBg = new egret.Bitmap();
        this._touchBg.texture = ResourceMgr.inst.getRes("joystic_btn_touch_png");
        this.addChild(this._touchBg);
        this._touchBg.x = (this._bg.width - this._touchBg.width) >> 1;
        this._touchBg.y = (this._bg.height - this._touchBg.height) >> 1;
        this._btnBg = new egret.Bitmap();
        this._btnBg.texture = ResourceMgr.inst.getRes("joystick_btn_active_png");
        this.addChild(this._btnBg);
        this._btnBg.x = (this._bg.width - this._btnBg.width) >> 1;
        this._btnBg.y = (this._bg.height - this._btnBg.height) >> 1;
        // this._btnBg.visible = false;
        this._sensitivity = this._bg.width >> 1; // 获取力矩
        this._resetPos = new egret.Point(this._btnBg.x, this._btnBg.y);
        this._touchBg.touchEnabled = true;
        this._touchBg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHandler, this);
    };
    JoystickInput.prototype.touchBeginHandler = function (evt) {
        // 记录当前触屏的位置
        console.log("touch事件");
        this._btnBg.visible = true;
        if (this._startPos == null)
            this._startPos = new egret.Point();
        this._startPos.x = evt.stageX;
        this._startPos.y = evt.stageY;
        // 处理拖动以及释放
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.cancelHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.cancelHandler, this);
    };
    //摇杆移动
    JoystickInput.prototype.touchMoveHandler = function (evt) {
        // 记录当前位置信息
        if (!this._curPos)
            this._curPos = new egret.Point();
        this._curPos.x = evt.stageX;
        this._curPos.y = evt.stageY;
        var dist = egret.Point.distance(this._startPos, this._curPos);
        if (dist <= this._sensitivity) {
            this._btnBg.x = this._resetPos.x + this._curPos.x - this._startPos.x;
            this._btnBg.y = this._resetPos.y + this._curPos.y - this._startPos.y;
        }
        else {
            // 有效位置
            var validatePos = egret.Point.interpolate(this._curPos, this._startPos, this._sensitivity / dist);
            this._btnBg.x = this._resetPos.x + validatePos.x - this._startPos.x;
            this._btnBg.y = this._resetPos.y + validatePos.y - this._startPos.y;
        }
        //计算X和Y方向上的分速度倍数
        this._axisX = (this._curPos.x - this._startPos.x) / dist; //x分量
        this._axisY = (this._curPos.y - this._startPos.y) / dist; //y分量
        this._torque = Math.min(1, dist / this._sensitivity); //力度分量
    };
    //取消摇杆
    JoystickInput.prototype.cancelHandler = function (evt) {
        console.log("退出了");
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.cancelHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancelHandler, this);
        egret.Tween.removeTweens(this._btnBg);
        egret.Tween.get(this._btnBg).to({ x: this._resetPos.x, y: this._resetPos.y, visible: false }, 50, egret.Ease.backOut);
        this._axisX = 0;
        this._axisY = 0;
        this._torque = 0;
    };
    Object.defineProperty(JoystickInput.prototype, "axisX", {
        /*x输入量*/
        get: function () {
            return this._axisX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoystickInput.prototype, "axisY", {
        /*y输入量*/
        get: function () {
            return this._axisY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoystickInput.prototype, "torque", {
        /*力矩值*/
        get: function () {
            return this._torque;
        },
        enumerable: true,
        configurable: true
    });
    return JoystickInput;
}(egret.DisplayObjectContainer));
__reflect(JoystickInput.prototype, "JoystickInput", ["IInput"]);
//# sourceMappingURL=JoystickInput.js.map