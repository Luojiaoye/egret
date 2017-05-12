var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by confiner.kang on 2017/5/8.
 */
/*游戏配置类*/
var GameConfig = (function () {
    function GameConfig() {
    }
    return GameConfig;
}());
/*地图资源路径*/
GameConfig.MAP_PATH = "resource/assets/map/";
/*ui界面配置exml路径*/
GameConfig.UI_EXML_PATH = "resource/assets/ui/";
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map