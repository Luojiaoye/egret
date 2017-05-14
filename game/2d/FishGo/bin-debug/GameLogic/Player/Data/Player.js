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
        // 行为状态
        _this._actionStatus = ActionType.INVALID;
        // 移动数据
        _this._moveData = null;
        // 化身
        _this._avatar = null;
        // 方向
        _this._dir = 0;
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
        this.avatar.display.scaleX = 0.5;
        this.avatar.display.scaleY = 0.5; // 测试代码
        this.born(this.x, this.y); // 配置或者服务器的出生点
    };
    /*出生*/
    Player.prototype.born = function (x, y) {
        this.x = x;
        this.y = y;
        if (this.avatar) {
            this.avatar.display.x = this.x;
            this.avatar.display.y = this.y;
            this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.born, 0);
        }
        this._moveData = MoveMgr.inst.createMoveData(this);
        this._actionStatus = ActionType.BORN;
    };
    /*站立*/
    Player.prototype.stand = function () {
        if (this._actionStatus == ActionType.SKILL)
            return;
        this._actionStatus = ActionType.STAND;
        this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.stand, 0);
    };
    /*行走*/
    Player.prototype.walk = function () {
        if (this._actionStatus == ActionType.SKILL)
            return;
        this._actionStatus = ActionType.WALK;
        this.playAnimation(PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.walk, 0);
    };
    /*使用技能*/
    Player.prototype.useSkill = function (skillId) {
        this._actionStatus = ActionType.SKILL;
        var animations = ["", PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.attack, PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.skill, PlayerDataMgr.inst.getPlayerData(this.gameUnitId).actionAni.unique];
        this.playAnimation(animations[skillId]);
    };
    // 播放动画
    Player.prototype.playAnimation = function (aniName, playTimes) {
        if (playTimes === void 0) { playTimes = 1; }
        if (this.avatar) {
            this.avatar.display.scaleX = this._dir < 0 ? -0.5 : 0.5;
            var state = this.avatar.display.animation.getState(aniName);
            if (!state || state && !state.isPlaying) {
                this.avatar.display.animation.play(aniName, playTimes);
            }
            if (!this.avatar.display.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                this.avatar.display.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.playComplete, this);
            }
        }
    };
    Player.prototype.playComplete = function (evt) {
        this._actionStatus = ActionType.STAND;
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
    Player.prototype.update = function () {
        if (!this.isHero())
            return;
        var xAxis = InputMgr.inst.getAxisX();
        var yAxis = InputMgr.inst.getAxisY();
        if (this._moveData) {
            this._moveData.axisX = xAxis;
            this._moveData.axisY = yAxis;
            this._dir = xAxis == 0 ? this._dir : xAxis;
            this._moveData.speed = this.speed * InputMgr.inst.getTorque();
        }
        // [需要 优化为ActionMgr中去]
        if (yAxis != 0 || xAxis != 0)
            this.walk();
        else
            this.stand();
    };
    return Player;
}(MoveableGameUnit));
__reflect(Player.prototype, "Player");
var ActionType = (function () {
    function ActionType() {
    }
    return ActionType;
}());
/*无效动作*/
ActionType.INVALID = -1;
/*出生动作*/
ActionType.BORN = 0;
/*站立动作*/
ActionType.STAND = 1;
/*行走动作*/
ActionType.WALK = 2;
/*技能动作*/
ActionType.SKILL = 3;
__reflect(ActionType.prototype, "ActionType");
//# sourceMappingURL=Player.js.map