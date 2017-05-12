/**
 * Created by confiner.kang on 2017/5/8.
 */
/*地图管理器*/
import TMXObjectGroup = tiled.TMXObjectGroup;
class MapMgr{
    private _data:number[][];
    /*地图格子宽*/
    public static GRID_WIDTH:number = 32;
    /*地图格子高*/
    public static GRID_HEIGHT:number = 32;

    private constructor(){
        this.init();
    }

    private init():void{
    }

    /*是否可行走[待优化点 1.与角色逻辑分离 2.地图滚动]*/
    public destVerfy(x:number, y:number):Boolean{
        let gX:number = Math.floor(x / MapMgr.GRID_WIDTH);
        let gY:number = Math.floor(y / MapMgr.GRID_HEIGHT);
        return this._data[gX][gY] == 1;
    }

    /*渲染地图
     * @param id 地图id
     */
    public render(id:number):void{
        // 需要优化点1.提取到renderMgr中 2.使用res方式加载资源 3.实现大地图的切片局部加载方式
        let url: string = GameConfig.MAP_PATH + id.toString() + ".tmx";
        var urlLoader:egret.URLLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var self:MapMgr = this;
        urlLoader.addEventListener(egret.Event.COMPLETE, function (event:egret.Event):void {
            var data:any = egret.XML.parse(event.target.data);
            var tmxTileMap:tiled.TMXTilemap = new tiled.TMXTilemap(LayerMgr.inst.stage.stageWidth, LayerMgr.inst.stage.stageHeight, data, url);
            tmxTileMap.render();
            console.log("地图大小" + tmxTileMap.renderwidth + " : " + tmxTileMap.renderheight)
            var tests:Array<tiled.TMXLayer> = tmxTileMap.getLayers();
            console.log("LayersCnt: " + tests.length);

            let layer:tiled.TMXLayer = tests[1];
            self.parseLayer(layer);
            LayerMgr.inst.mapLayer.addChild(tmxTileMap);
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }

    private parseLayer(layer:tiled.TMXLayer):void{
        console.log("Layer名称： " + layer.name);
        var tiles:Array<Array<tiled.TMXTile>> = layer.layerData;
        let result:string = "";
        if(!this._data)
            this._data = [];
        for(var i:number = 0; i < tiles.length; ++i){
            var list:number[] = [];
            for(var j:number = 0; j < tiles[i].length; ++j){
                let tile:tiled.TMXTile = tiles[i][j];
                if(tile && tile.gid == 18313)
                {
                    result += "1  ";
                    list.push(1);
                }
                else{
                    result+= "0   ";
                    list.push(0);
                }
            }
            this._data.push(list);
            console.log(result);
            result = "";
        }
    }

    private static _inst:MapMgr = null;
    /*对外提供单例对象*/
    public static get inst():MapMgr{
        if(!MapMgr._inst)
            MapMgr._inst = new MapMgr();

        return MapMgr._inst;
    }
}