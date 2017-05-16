
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/tiled/tiled.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/eui/eui.js",
	"bin-debug/GameCore/GameUnit/Base/GameUnitBase.js",
	"bin-debug/GameCore/GameUnit/Base/LifeGameUnit.js",
	"bin-debug/GameCore/GameUnit/Base/MoveableGameUnit.js",
	"bin-debug/GameCore/Map/Base/Map.js",
	"bin-debug/GameCore/Render/Base/RenderObject.js",
	"bin-debug/GameCore/Window/Base/WindowBase.js",
	"bin-debug/GameCore/Util/GUID.js",
	"bin-debug/GameCore/GameUnit/Interface/ILife.js",
	"bin-debug/GameCore/GameUnit/Interface/IMoveable.js",
	"bin-debug/GameCore/Layer/LayerMgr.js",
	"bin-debug/GameCore/Camera/Base/Camera.js",
	"bin-debug/GameCore/Map/Base/TiledMap.js",
	"bin-debug/GameCore/Map/Interface/IMap.js",
	"bin-debug/GameCore/Map/MapMgr.js",
	"bin-debug/GameCore/MoveMgr/Base/MoveData.js",
	"bin-debug/GameCore/MoveMgr/MoveMgr.js",
	"bin-debug/GameCore/Render/Base/DragonBoneRenderObject.js",
	"bin-debug/GameCore/Render/Base/MapRenderObject.js",
	"bin-debug/GameCore/GameUnit/Base/IGameUnit.js",
	"bin-debug/GameCore/Render/Interface/IRender.js",
	"bin-debug/GameCore/Render/RenderMgr.js",
	"bin-debug/GameCore/Render/RenderType.js",
	"bin-debug/GameCore/Resource/ResourceMgr.js",
	"bin-debug/GameView/WindowEnum.js",
	"bin-debug/GameCore/GameUnit/GameUnitMgr.js",
	"bin-debug/GameCore/Window/Interface/IWindow.js",
	"bin-debug/GameCore/Window/WindowMgr.js",
	"bin-debug/GameEntry.js",
	"bin-debug/GameLogic/Input/Base/JoystickInput.js",
	"bin-debug/GameLogic/Input/InputMgr.js",
	"bin-debug/GameLogic/Input/Interface/IInput.js",
	"bin-debug/GameLogic/Main/GameConfig.js",
	"bin-debug/GameLogic/Main/GameMgr.js",
	"bin-debug/GameLogic/Main/TestVersionMgr.js",
	"bin-debug/GameLogic/Player/Data/Player.js",
	"bin-debug/GameLogic/Player/Data/PlayerData.js",
	"bin-debug/GameLogic/Player/PlayerDataMgr.js",
	"bin-debug/GameLogic/Player/PlayerMgr.js",
	"bin-debug/GameLogic/Scene/SceneData/SceneData.js",
	"bin-debug/GameLogic/Scene/SceneMgr.js",
	"bin-debug/GameLogic/Theme/Base/AssetAdapter.js",
	"bin-debug/GameLogic/Theme/Base/ThemeAdapter.js",
	"bin-debug/GameLogic/Theme/ThemeMgr.js",
	"bin-debug/GameView/Home/PlayerHeadInfoView.js",
	"bin-debug/GameView/Skill/SkillOperationView.js",
	"bin-debug/GameCore/Camera/CameraMgr.js",
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
		contentWidth: 1280,
		contentHeight: 960,
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