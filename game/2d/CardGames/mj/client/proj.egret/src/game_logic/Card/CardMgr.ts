/**
 * Created by confiner.kang on 2017/5/16.
 */
/*卡牌管理器*/
class CardMgr{
    private constructor(){
        this.init();
    }

    // 初始化管理器
    private init():void{
    }

    private static _inst:CardMgr = null;
    /*对外提供唯一单例*/
    public static get inst():CardMgr{
        if(!CardMgr._inst)
            CardMgr._inst = new CardMgr();

        return CardMgr._inst;
    }
}