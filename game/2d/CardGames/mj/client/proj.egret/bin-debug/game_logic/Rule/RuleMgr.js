var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/16.
 */
/*规则管理器*/
var RuleMgr = (function () {
    function RuleMgr() {
        this.init();
    }
    // 初始化管理器
    RuleMgr.prototype.init = function () {
    };
    Object.defineProperty(RuleMgr, "inst", {
        /*对外提供唯一单例*/
        get: function () {
            if (!RuleMgr._inst)
                RuleMgr._inst = new RuleMgr();
            return RuleMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return RuleMgr;
}());
RuleMgr._inst = null;
__reflect(RuleMgr.prototype, "RuleMgr");
