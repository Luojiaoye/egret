var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by confiner.kang on 2017/5/5.
 */
/*玩家显示对象*/
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(id, gid, rid) {
        var _this = _super.call(this, gid, rid) || this;
        // 玩家id
        _this._id = 0;
        // 化身
        _this._avatar = null;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(Player.prototype, "id", {
        /*玩家id*/
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    /*覆盖父类的默认行为*/
    Player.prototype.defaultAction = function () {
        this.born();
    };
    /*出生*/
    Player.prototype.born = function () {
        console.log(dragonBones.DragonBones.VERSION);
        console.log("玩家出生");
        if (this.avatar) {
            this.avatar.armatureDisplay.x = 500;
            this.avatar.armatureDisplay.y = 400;
            this.avatar.armatureDisplay.animation.play("steady2");
        }
    };
    /*站立*/
    Player.prototype.stand = function () {
        console.log("玩家站立");
    };
    Object.defineProperty(Player.prototype, "avatar", {
        get: function () {
            if (!this._avatar)
                this._avatar = RenderMgr.inst.getRenderObject(this.renderObjId);
            return this._avatar;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(MoveableGameUnit));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map