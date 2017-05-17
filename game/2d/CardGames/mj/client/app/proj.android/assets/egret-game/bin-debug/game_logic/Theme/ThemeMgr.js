var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/11.
 */
/*主题管理器*/
var ThemeMgr = (function () {
    function ThemeMgr() {
        this._theme = null; // 主题
        this._callback = null;
        this.init();
    }
    // 初始化管理器
    ThemeMgr.prototype.init = function () {
        //注入自定义的素材解析器
        LayerMgr.inst.stage.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        LayerMgr.inst.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
    };
    /*
    *注册主题
    * @注册完成的回调
    * @param theme 主题配置
    * */
    ThemeMgr.prototype.registerTheme = function (callback, theme) {
        if (theme === void 0) { theme = "resource/assets/theme/theme.json"; }
        this._theme = new eui.Theme(theme, LayerMgr.inst.stage);
        this._callback = callback;
        this._theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    };
    /**
     * 主题文件加载完成,开始预回调
     */
    ThemeMgr.prototype.onThemeLoadComplete = function () {
        if (this._callback)
            this._callback.call(null);
    };
    Object.defineProperty(ThemeMgr, "inst", {
        get: function () {
            if (!ThemeMgr._inst)
                ThemeMgr._inst = new ThemeMgr();
            return ThemeMgr._inst;
        },
        enumerable: true,
        configurable: true
    });
    return ThemeMgr;
}());
ThemeMgr._inst = null;
__reflect(ThemeMgr.prototype, "ThemeMgr");
