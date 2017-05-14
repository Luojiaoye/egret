/**
 * Created by confiner on 2017/5/14.
 */
/*瓦片地图*/
class TiledMap extends Map{
    private _tmxTileMap:tiled.TMXTilemap;

    /*
     * 初始化
     * */
    public initialize():void{
        let url: string = GameConfig.MAP_PATH + this.id.toString() + ".tmx";
        var urlLoader:egret.URLLoader = new egret.URLLoader();
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        urlLoader.addEventListener(egret.Event.COMPLETE, (event:egret.Event)=> {
            var data:any = egret.XML.parse(event.target.data);
            this._tmxTileMap = new tiled.TMXTilemap(2000, 2000, data, url);
            var tests:Array<tiled.TMXLayer> = this._tmxTileMap.getLayers();
            let layer:tiled.TMXLayer = tests[1];    // 用于测试
            this.parseLayer(layer);
            let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
            if(renderObj){
                renderObj.display = this._tmxTileMap;
                renderObj.render();
            }
            this._width = this._tmxTileMap.renderwidth;
            this._height = this._tmxTileMap.renderheight;
        }, url);
        urlLoader.load(new egret.URLRequest(url));
    }

    // [应该在外表工具生成数据]
    private parseLayer(layer:tiled.TMXLayer):void{
        var tiles:Array<Array<tiled.TMXTile>> = layer.layerData;
        let mapInfo:number[][] = [];
        for(var i:number = 0; i < tiles.length; ++i){
            var list:number[] = [];
            for(var j:number = 0; j < tiles[i].length; ++j){
                let tile:tiled.TMXTile = tiles[i][j];
                if(tile && tile.gid == 18313)
                    list.push(1);
                else
                    list.push(0);
            }
            mapInfo.push(list);
        }

        this.data = mapInfo;
    }

    /*
     * 销毁对象
     * */
    public dispose():void{
        super.dispose();
        if(this._tmxTileMap)
            this._tmxTileMap.destory();
    }
}