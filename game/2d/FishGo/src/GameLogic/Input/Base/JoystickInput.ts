/**
 * Created by confiner.kang on 2017/5/11.
 */
/*摇杆输入*/
class JoystickInput extends egret.DisplayObjectContainer implements IInput{
    private _bg:egret.Bitmap = null;
    private _touchBg:egret.Bitmap = null;
    private _btnBg:egret.Bitmap = null;

    private _startPos:egret.Point = null;   // 开始位置
    private _curPos:egret.Point = null; // 当前位置
    private _resetPos:egret.Point = null;  // 重置位置

    private _axisX:number = 0;  // x分量
    private _axisY:number = 0;  // y分量
    private _torque:number = 0; // 力矩值

    private _sensitivity:number = 1;    // 灵密度[需要优化处理]

    public constructor(){
        super();
        this.init();
    }

    // 初始化
    private init():void{
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

        this._sensitivity = this._bg.width >> 1;    // 获取力矩
        this._resetPos = new egret.Point(this._btnBg.x, this._btnBg.y);
        this._touchBg.touchEnabled = true;
        this._touchBg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHandler, this);
    }

    private touchBeginHandler(evt:egret.TouchEvent):void{
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
    }

    //摇杆移动
    private touchMoveHandler(evt: egret.TouchEvent): void {
        // 记录当前位置信息
        if(!this._curPos)
            this._curPos = new egret.Point();
        this._curPos.x = evt.stageX;
        this._curPos.y = evt.stageY;
        var dist: number = egret.Point.distance(this._startPos, this._curPos);
        if (dist <= this._sensitivity)//没有超出范围
        {
            this._btnBg.x = this._resetPos.x + this._curPos.x - this._startPos.x;
            this._btnBg.y = this._resetPos.y + this._curPos.y - this._startPos.y;
        }
        else//超出范围了,计算弧度
        {
            // 有效位置
            let validatePos: egret.Point = egret.Point.interpolate(this._curPos, this._startPos, this._sensitivity / dist);
            this._btnBg.x = this._resetPos.x + validatePos.x - this._startPos.x;
            this._btnBg.y = this._resetPos.y + validatePos.y - this._startPos.y;
        }

        //计算X和Y方向上的分速度倍数
        this._axisX = (this._curPos.x - this._startPos.x) / dist;   //x分量
        this._axisY = (this._curPos.y - this._startPos.y) / dist;   //y分量
        this._torque = Math.min(1, dist / this._sensitivity);//力度分量
    }

    //取消摇杆
    private cancelHandler(evt: egret.TouchEvent): void {
        console.log("退出了");
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.cancelHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancelHandler, this);
        egret.Tween.removeTweens(this._btnBg);
        egret.Tween.get(this._btnBg).to({ x: this._resetPos.x, y: this._resetPos.y, visible:false}, 50, egret.Ease.backOut);
        this._axisX = 0;
        this._axisY = 0;
        this._torque = 0;
    }

    /*x输入量*/
    public get axisX():number{
        return this._axisX;
    }

    /*y输入量*/
    public get axisY():number{
        return this._axisY;
    }

    /*力矩值*/
    public get torque():number{
        return this._torque;
    }
}