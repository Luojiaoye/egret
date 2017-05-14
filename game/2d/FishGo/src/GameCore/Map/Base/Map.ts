/**
 * Created by confiner on 2017/5/14.
 */
/*地图对象*/
class Map implements IMap{
    private _id:number;
    private _rid:number;
    private _x:number = 0;
    private _y:number = 0;
    private _data:number[][];
    private _gw:number; // 格子宽
    private _gh:number; // 格子高
    private _offset:egret.Point;    // 偏移量
    protected _width:number;  // 宽度
    protected  _height:number;    // 高度


    public constructor(id:number, gridWidth:number, gridHeight:number){
        this._id = id;
        this._gw = gridWidth;
        this._gh = gridHeight;
    }

    /*地图id*/
    public get id():number{
        return this._id;
    }

    set x(value: number) {
        this._x = value;
        let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
        if(renderObj)
            renderObj.x = this._x;
        // let lastX:number = this._x;
        // this._x = value;
        // if(!this.testWalk()){
        //     console.log("xMap 行走失败");
        //     this._x = lastX;
        // }
        // else{
        //     console.log("xMap 行走成功" + this._x);
        //     let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
        //     if(renderObj)
        //         renderObj.x = this._x;
        // }
    }

    set y(value: number) {
        this._y = value;
        let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
        if(renderObj)
            renderObj.y = this._y;

        // let lastY:number = this._y;
        // this._y = value;
        // if(!this.testWalk()){
        //     console.log("yMap 行走失败");
        //     this._y = lastY;
        // }
        // else{
        //     console.log("yMap 行走成功" + this._y);
        //     let renderObj:MapRenderObject = RenderMgr.inst.getRenderObject<MapRenderObject>(this.renderObjId);
        //     if(renderObj)
        //         renderObj.y = this._y;
        // }
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    // 测试行走
    private testWalk():Boolean{
        return this.checkWalkAble(this._x, this._y);
    }

    /*
    * 地图偏移*/
    public get offset():egret.Point{
        return this._offset;
    }

    /*
    * 地图数据
    **/
    public set data(value: number[][]) {
        this._data = value;
    }

    /*
    * 检测是否可行走
    * @param x 舞台坐标像素
    * @param y 舞台坐标像素
    * */
    public checkWalkAble(x:number,y:number):boolean{
        if(!this._data)
            return false;

        let gX:number = Math.floor((x - this._x) / this._gw);
        let gY:number = Math.floor((y - this._y) / this._gh);
        console.log("gx:(" + gX + ", " + gY + ")")
        return this._data[gX][gY] == 1;
    }

    /*地图渲染对象id*/
    public get renderObjId():number{
        return this._rid;
    }

    /*地图渲染对象id*/
    public set renderObjId(rid:number){
        this._rid = rid;
    }

    /*
     * 初始化
     * */
    public initialize():void{

    }

    /*
    * 销毁对象
    * */
    public dispose():void{
        if(this._data){
            this._data.length = 0;
            this._data = null;
        }
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}