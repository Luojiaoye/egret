/**
 * Created by confiner on 2017/5/14.
 */
/*地图渲染对象*/
class MapRenderObject implements IRender{
    // id
    private _id:number;
    // 地图id
    private _mapId:number;
    // 显示对象
    private _display:tiled.TMXTilemap;
    // x
    private _x:number;
    // y
    private _y:number;

    public constructor(id:number){
        this._id = id;
    }

    public get id():number{
        // 渲染对象id
        return this._id;
    }

    /*渲染*/
    public render(): void {
        this.display.render();
        LayerMgr.inst.mapLayer.addChild(this.display);
    }

    set mapId(value: number) {
        this._mapId = value;
    }
    get mapId(): number {
        return this._mapId;
    }
    set display(value: tiled.TMXTilemap) {
        this._display = value;
    }
    get display(): tiled.TMXTilemap {
        return this._display;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set x(value: number) {
        this._x = value;
        this.display.x = this._x;
    }

    set y(value: number) {
        this._y = value;
        this.display.y = this._y;
    }
}