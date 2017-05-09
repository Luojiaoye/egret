/**
 * Created by confiner.kang on 2017/5/9.
 */
/*生命游戏对象*/
class LifeGameUnit extends GameUnitBase implements ILife{
    /*生命值*/
    public mp:number = 0;
    /*魔法值*/
    public hp:number = 0;
    /*体力值*/
    public sp:number = 0;
    
    public constructor(id:number, rid:number){
        super(id, rid);
    }
}