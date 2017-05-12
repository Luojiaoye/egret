var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家头像信息面板*/
var PlayerHeadInfoView = (function (_super) {
    __extends(PlayerHeadInfoView, _super);
    function PlayerHeadInfoView(winName, exml) {
        if (exml === void 0) { exml = null; }
        var _this = _super.call(this, winName, exml) || this;
        _this._data = null;
        return _this;
    }
    PlayerHeadInfoView.prototype.initView = function () {
        this._data = PlayerDataMgr.inst.getHeroData();
        this.lblLv.text = "" + this._data.lv;
        this.lblGold.text = "" + this._data.gold;
        this.lblLvMoney.text = "" + this._data.money;
        this.lblLvAttack.text = "" + this._data.attack;
        this.lblAttackTitle.text = "" + this._data.name;
    };
    PlayerHeadInfoView.prototype.initEvent = function () {
    };
    PlayerHeadInfoView.prototype.removeEvent = function () {
    };
    PlayerHeadInfoView.prototype.dispose = function () {
    };
    return PlayerHeadInfoView;
}(WindowBase));
__reflect(PlayerHeadInfoView.prototype, "PlayerHeadInfoView");
//# sourceMappingURL=PlayerHeadInfoView.js.map