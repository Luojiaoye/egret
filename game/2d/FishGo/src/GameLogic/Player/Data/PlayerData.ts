/**
 * Created by confiner.kang on 2017/5/5.
 */
/* 玩家数据对象 */
class PlayerData{
    /*玩家id*/
    public id:number;
    /*玩家模板id [对应Player的id]*/
    public templateId:number;
    /*玩家名字*/
    public name:String;

    /*外显id [优化点：外显表配置]*/
    public avatar:string;   // 暂时直接去avatar路径

    /*货币信息 [优化点：可以提取出去]*/
    private _gold:number;
    private _money:number;

    /*属性信息 [优化点：可以提取出去]*/
    /*攻击力*/
    public attack:number;
    /*防御力*/
    public defense:number;
    // 等级
    private _lv:number;

    /*装备以及道具只持有引用，对应的管理器去处理逻辑*/
    private _weaponId:number;

    /*元宝*/
    public get gold(): number {
        return this._gold;
    }

    public set gold(value:number) {
        this._gold = value;
    }

    /*金币*/
    public get money(): number {
        return this._money;
    }

    public set money(value: number) {
        this._money = value;
    }

    /*当前使用的武器id*/
    public get weaponId(): number {
        return this._weaponId;
    }

    public set weaponId(value: number) {
        this._weaponId = value;
    }

    /*等级*/
    public set lv(value: number) {
        this._lv = value;
    }
    public get lv(): number {
        return this._lv;
    }
}