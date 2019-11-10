import { Factory } from "../../../shared/sources/libs";
import Cell from "./Cell";

export default class View extends Factory.Container {
  constructor() {
    super();

    this.pointersIDs = [];
    this.isDoubleTap = false;
    this.isPointerdown = false;
    this.isFlagRequested = false;
    this.doubleTapTimeout = 0;
    this.flagTimeout = 0;
    this.timePassed = 0;

    this.grid = null;
    this.resPack = null;
  }

  setResources(res) {
    this.resPack = res;
  }

  setTimingData({ flagRequestTimeout, doubleTapTimeout }) {
    this.doubleTapTimeout = doubleTapTimeout;
    this.flagTimeout = flagRequestTimeout;
  }

  /** @param {Number} delta time which is set by PIXI.Tiker*/
  update(delta) {
    /* To make sure that it was click to reveal the cell
    * timePassed must be less than flagTimeout */
    if ( this.isPointerdown ) {
      this.timePassed += ( delta * 16.777 ); // to convert it to ms
      this.isFlagRequested = ( this.timePassed > this.flagTimeout );
    }
  }

  /** To create actual grid of cells
   * @param {Object} model data for the grid */
  creteGrid({ map, rows, columns, gridSize }) {
    this.grid = new Factory.Container();
    const texture = this.resPack.get("closed");

    const { width, height } = texture;
    const gridWidth = ( ( columns * width ) - width );
    const gridHeight = ( ( rows * height ) - height );

    this.grid.scale.set(gridSize / gridWidth);
    this.addChild(this.grid);

    this.grid.cells = map.map((row, i) => {
      return row.map((cellModel, j) => {
        const x = ( gridWidth / 2 ) - ( width * j );
        const y = ( gridHeight / 2 ) - ( height * i );
        const cell = new Cell(texture, cellModel);
        cell.position.set(x, y);
        return cell;
      });
    });

    this.grid.cells.forEach(row => {
      row.forEach(cell => this.grid.addChild(cell));
    });
  }

  /** Turn interactivity on for mobile devices and PC separately */
  addInteractivity() {
    this.grid.interactive = true;
    /* device events */
    this.grid.on("touchstart", this.onTouchStart, this);
    this.grid.on("touchend", this.onTouchEnd, this);

    /* PC events */
    this.grid.on("click", this.onClick, this);
    this.grid.on("rightclick", this.onRightClick, this);
  }

  /** For touch start event on mobile devices
   * @param {Event} */
  onTouchStart({ data }) {
    if ( this.isPointerdown ) return;
    this.isPointerdown = true;

    this.pointersIDs.push(data.pointerId);
  }

  /** For touch end event on mobile devices
   * @param {Event} */
  onTouchEnd({ data }) {
    if ( !this.pointersIDs.includes(data.pointerId) ) return;
    this.isPointerdown = false;
    this.timePassed = 0;

    const { x, y } = data.getLocalPosition(this.grid);
    const { row, col } = this.convertLocToIndex(x, y);

    if ( this.isFlagRequested ) {
      this.emit("flagRequested", { row, col });
    } else {
      this.emit("clickOnCell", { row, col });
    }
  }

  /** For mouse left click on PC
   *  @param {Event} */
  onClick({data}) {
    const { x, y } = data.getLocalPosition(this.grid);
    const { row, col } = this.convertLocToIndex(x, y);
    this.emit("clickOnCell", { row, col });
  }

  /** For mouse right click on PC
   *  @param {Event} */
  onRightClick({data}) {
    const { x, y } = data.getLocalPosition(this.grid);
    const { row, col } = this.convertLocToIndex(x, y);
    this.emit("flagRequested", { row, col });
  }

  /** To convert coordinated where user has clicked to an actual row and col of
   * a cell on the grid
   * @param {Number} x - x coordinate of a touch / click
   * @param {Number} y - y coordinate of a touch / click
   * @return {Object} {row, col} converted data */
  convertLocToIndex(x, y) {
    const { width, height, cells, scale } = this.grid;

    const rows = cells.length;
    const columns = cells[ 0 ].length;

    const yPitch = height / rows;
    const xPitch = width / columns;

    const translatedX = ( width / 2 ) + ( x * scale.x );
    const translatedY = ( height / 2 ) + ( y * scale.y );

    const row = Math.floor(translatedY / yPitch);
    const col = Math.floor(translatedX / xPitch);

    return { row, col };
  }

}