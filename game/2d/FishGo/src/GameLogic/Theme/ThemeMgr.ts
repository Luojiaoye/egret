/**
 * Created by confiner.kang on 2017/5/11.
 */
/*主题管理器*/
class ThemeMgr{
    private _theme:eui.Theme = null;    // 主题
    private _callback:Function = null;
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
        //注入自定义的素材解析器
        LayerMgr.inst.stage.registerImplementation("eui.IAssetAdapter",new AssetAdapter());
        LayerMgr.inst.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
    }

    /*
    *注册主题
    * @注册完成的回调
    * @param theme 主题配置
    * */
    public registerTheme(callback:Function, theme:string = "resource/assets/theme/theme.json"):void{
        this._theme = new eui.Theme(theme, LayerMgr.inst.stage);
        this._callback = callback;
        this._theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    }

    /**
     * 主题文件加载完成,开始预回调
     */
    private onThemeLoadComplete(): void {
        if(this._callback)
            this._callback.call(null);
    }

    private static _inst:ThemeMgr = null;
    public static get inst():ThemeMgr{
        if(!ThemeMgr._inst)
            ThemeMgr._inst = new ThemeMgr();

        return ThemeMgr._inst;
    }
}