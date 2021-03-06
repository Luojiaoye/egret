
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"bin-debug/game_core/Window/Base/WindowBase.js",
	"bin-debug/game_logic/Player/Unit/Player.js",
	"bin-debug/game_core/Layer/LayerMgr.js",
	"bin-debug/game_core/Window/Interface/IWindow.js",
	"bin-debug/game_core/Window/WindowMgr.js",
	"bin-debug/game_logic/Card/CardMgr.js",
	"bin-debug/game_logic/Main/GameMgr.js",
	"bin-debug/game_logic/Main/TestVersionMgr.js",
	"bin-debug/game_logic/Player/PlayerMgr.js",
	"bin-debug/game_core/Resource/ResourceMgr.js",
	"bin-debug/game_logic/Rule/RuleMgr.js",
	"bin-debug/game_logic/Scene/SceneMgr.js",
	"bin-debug/game_logic/Scene/Unit/Scene.js",
	"bin-debug/game_logic/Theme/Base/AssetAdapter.js",
	"bin-debug/game_logic/Theme/Base/ThemeAdapter.js",
	"bin-debug/game_logic/Theme/ThemeMgr.js",
	"bin-debug/game_view/login/LoginView.js",
	"bin-debug/game_view/PanelEnum.js",
	"bin-debug/GameEntry.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "GameEntry",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};