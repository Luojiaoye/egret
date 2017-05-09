/**
 * Created by confiner.kang on 2017/5/8.
 */
/*地图管理器*/
class MapMgr{
    private constructor(){

    }


    /*渲染地图
     * @param id 地图id
     */
    public render(id:number):void{
        // 需要优化点1.提取到renderMgr中 2.使用res方式加载资源 3.实现大地图的切片局部加载方式
        let url: string = GameConfig.MAP_PATH + id.toString() + ".tmx";
        var urlLoader:egret.URLLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event:egret.Event):void {
            var data:any = egret.XML.parse(event.target.data);
            var tmxTileMap:tiled.TMXTilemap = new tiled.TMXTilemap(2000, 2000, data, url);
            tmxTileMap.render();
            LayerMgr.inst.mapLayer.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }

    private static _inst:MapMgr = null;
    /*对外提供单例对象*/
    public static get inst():MapMgr{
        if(!MapMgr._inst)
            MapMgr._inst = new MapMgr();

        return MapMgr._inst;
    }
}