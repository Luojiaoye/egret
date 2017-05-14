var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家数据对象 */
var PlayerData = (function () {
    function PlayerData() {
    }
    Object.defineProperty(PlayerData.prototype, "gold", {
        /*元宝*/
        get: function () {
            return this._gold;
        },
        set: function (value) {
            this._gold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "money", {
        /*金币*/
        get: function () {
            return this._money;
        },
        set: function (value) {
            this._money = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "weaponId", {
        /*当前使用的武器id*/
        get: function () {
            return this._weaponId;
        },
        set: function (value) {
            this._weaponId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerData.prototype, "lv", {
        get: function () {
            return this._lv;
        },
        /*等级*/
        set: function (value) {
            this._lv = value;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
var ActionAni = (function () {
    function ActionAni() {
        // 出生
        this.born = "born";
        // 站立
        this.stand = "stand";
        // 行走
        this.walk = "walk";
        // 普通攻击
        this.attack = "attack";
        // 受击
        this.damage = "defense";
        // 死亡
        this.death = "death";
        // 技能攻击
        this.skill = "skill";
        // 大招攻击
        this.unique = "unique";
    }
    return ActionAni;
}());
__reflect(ActionAni.prototype, "ActionAni");
//# sourceMappingURL=PlayerData.js.map