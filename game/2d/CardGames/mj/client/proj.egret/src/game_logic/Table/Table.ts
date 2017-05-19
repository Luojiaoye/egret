/**
 * Created by confiner.kang on 2017/5/19.
 */
/*牌桌对象*/
class Table{
    private _id:number;

    private _mcData:any;
    private _mcTexture:egret.Texture;

    public constructor(id:number){
        this._id = id;
    }

    /*洗牌*/
    public shuffle():void{

    }

    /*掷骰子*/
    public rollDice():void{
        this.load(this.initMovieClip);
    }

    public dispose():void{
        // 销毁应该利用框架来处理
    }

    private initMovieClip():void {
        /*** 本示例关键代码段开始 ***/
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);

        var dish:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("dish"));
        LayerMgr.inst.sceneLayer.addChild(dish);
        dish.play(-1);
        dish.x = (LayerMgr.inst.stage.stageWidth - dish.width) >> 1;
        dish.y = (LayerMgr.inst.stage.stageHeight - dish.height) >> 1;

        var dice:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("dice"));
        LayerMgr.inst.sceneLayer.addChild(dice);
        dice.play(-1);
        dice.x = (LayerMgr.inst.stage.stageWidth - dice.width) >> 1;
        dice.y = (LayerMgr.inst.stage.stageHeight - dice.height) >> 1;

        // dice.addEventListener(egret.Event.COMPLETE, function (e:egret.Event):void {
        //     egret.log("play over!")
        // }, this);
        //
        // var count:number = 0;
        // dice.addEventListener(egret.Event.LOOP_COMPLETE, function (e:egret.Event):void {
        //     egret.log("play times:" + ++count);
        // }, this);
        // dice.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e:egret.MovieClipEvent):void {
        //     egret.log("frameLabel:" + e.frameLabel);
        // }, this);
        //
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent):void {
        //     count = 0;
        //     dice.gotoAndPlay(1, 3);
        // }, this);
    }

    protected load(callback:Function):void {
        var count:number = 0;
        var self = this;

        var check = function () {
            count++;
            if (count == 2) {
                callback.call(self);
            }
        }

        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;

            this._mcTexture = loader.data;

            check();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        var request = new egret.URLRequest("resource/assets/atlas/table.png");
        loader.load(request);

        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(e) {
            var loader = e.currentTarget;

            this._mcData = JSON.parse(loader.data);

            check();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("resource/assets/atlas/table.json");
        loader.load(request);
    }
}
