/**
 * Created by confiner.kang on 2017/5/12.
 */
/*玩家头像信息面板*/
class PlayerHeadInfoView extends WindowBase{
    private lblLv:eui.Label;
    private lblGold:eui.Label;
    private lblLvMoney:eui.Label;
    private lblLvAttack:eui.Label;
    private lblAttackTitle:eui.Label;
    private _data:PlayerData = null;
    public constructor(winName: string, exml: string = null) {
        super(winName, exml);
    }

    initView(): void {
        this._data = PlayerDataMgr.inst.getHeroData();
        this.lblLv.text = "" + this._data.lv;
        this.lblGold.text = "" + this._data.gold;
        this.lblLvMoney.text = "" + this._data.money;
        this.lblLvAttack.text = "" + this._data.attack;
        this.lblAttackTitle.text = "" + this._data.name;
    }

    initEvent(): void {
    }

    removeEvent(): void {
    }

    dispose(): void {
    }
}