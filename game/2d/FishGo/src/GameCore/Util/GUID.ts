/**
 * Created by confiner.kang on 2017/5/8.
 */
/*全局唯一id生成器*/
class GUID{
    private static _guid:number = 0;

    /* 生成唯一id*/
    public static build():number{
        return ++this._guid;
    }
}