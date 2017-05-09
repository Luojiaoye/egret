/**
 * Created by confiner.kang on 2017/5/9.
 */
/*可移动的生命游戏对象*/
class MoveableGameUnit extends LifeGameUnit implements IMoveable{
    /*移动速度*/
    public speed:number = 0;

    public constructor(id:number, rid:number){
        super(id, rid);
    }

    /*默认行为*/
    public defaultAction():void{
        console.log("默认行为");
    }
}