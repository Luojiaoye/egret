/**
 * Created by confiner.kang on 2017/5/16.
 */
/*规则管理器*/
class RuleMgr{
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    private static _inst:RuleMgr = null;
    /*对外提供唯一单例*/
    public static get inst():RuleMgr{
        if(!RuleMgr._inst)
            RuleMgr._inst = new RuleMgr();

        return RuleMgr._inst;
    }
}