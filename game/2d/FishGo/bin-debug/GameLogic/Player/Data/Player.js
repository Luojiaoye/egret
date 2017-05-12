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
        // x速度
        _this.speedX = 0;
        // y速度
        _this.speedY = 0;
        // 使用技能中
        _this._useCD = false;
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
        console.log("玩家：" + this._id);
        this.born(this.x, this.y); // 配置或者服务器的出生点
    };
    /*出生*/
    Player.prototype.born = function (x, y) {
        this.x = x;
        this.y = y;
        console.log("玩家出生");
        if (this.avatar) {
            this.avatar.armatureDisplay.x = this.x;
            this.avatar.armatureDisplay.y = this.y;
            var aniName = this._id == 2 ? "Move" : "steady";
            this.playAnimation(aniName, 0);
        }
    };
    /*站立*/
    Player.prototype.stand = function () {
        if (this._useCD)
            return;
        console.log("玩家站立");
        var aniName = this._id == 2 ? "Move" : "steady";
        this.playAnimation(aniName, 0);
    };
    /*行走*/
    Player.prototype.walk = function () {
        if (this._useCD)
            return;
        var aniName = this._id == 2 ? "Move" : "steady2";
        this.playAnimation(aniName, 0);
        if (this.avatar) {
            this.avatar.armatureDisplay.scaleX = this.speedX < 0 ? -0.5 : 0.5;
            var destX = this.avatar.armatureDisplay.x + this.speedX * this.speed * this.sp;
            var destY = this.avatar.armatureDisplay.y + this.speedY * this.speed * this.sp;
            if (MapMgr.inst.destVerfy(destX, destY)) {
                this.avatar.armatureDisplay.x = destX;
                this.avatar.armatureDisplay.y = destY;
            }
        }
    };
    /*使用技能*/
    Player.prototype.useSkill = function (skillId) {
        this._useCD = true;
        var animations = ["steady", "attack1", "attack1_+1", "attack2"];
        this.playAnimation(animations[skillId]);
    };
    // 播放动画
    Player.prototype.playAnimation = function (aniName, playTimes) {
        if (playTimes === void 0) { playTimes = 1; }
        if (this.avatar) {
            var state = this.avatar.armatureDisplay.animation.getState(aniName);
            if (!state || state && !state.isPlaying) {
                this.avatar.armatureDisplay.animation.play(aniName, playTimes);
                console.log("动画名称： " + aniName + " 播放次数： " + playTimes);
            }
            if (!this.avatar.armatureDisplay.armature.hasEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE)) {
                this.avatar.armatureDisplay.armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.playComplete, this);
            }
        }
    };
    Player.prototype.playComplete = function (evt) {
        console.log("播放完动画：");
        this._useCD = false;
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
    /*是否是主角*/
    Player.prototype.isHero = function () {
        return this.gameUnitId == PlayerDataMgr.inst.getHeroData().id;
    };
    return Player;
}(MoveableGameUnit));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map