var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*游戏入口*/
var GameEntry = (function (_super) {
    __extends(GameEntry, _super);
    function GameEntry() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GameEntry.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 开始游戏
        GameMgr.inst.start();
    };
    return GameEntry;
}(egret.DisplayObjectContainer));
__reflect(GameEntry.prototype, "GameEntry");
