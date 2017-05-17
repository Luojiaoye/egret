var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*卡牌管理器*/
var CardMgr = (function () {
    function CardMgr() {
        this.init();
    }
    // 初始化管理器
    CardMgr.prototype.init = function () {
    };
    Object.defineProperty(CardMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!CardMgr._inst)
                CardMgr._inst = new CardMgr();
            return CardMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return CardMgr;
}());
CardMgr._inst = null;
__reflect(CardMgr.prototype, "CardMgr");
