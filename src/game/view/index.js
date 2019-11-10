import { Factory } from "../../../shared/sources/libs";
import Cell from "./Cell";
import Popup from "./Popup";

/**
 * @class View
 * @extends PIXI.Container
 * Game's View
 * */
export default class View extends Factory.Container {
  constructor() {
    super();

    this.pointersIDs = [];
    this.isPointerdown = false;
    this.isFlagRequested = false;
    this.flagTimeout = 0;
    this.timePassed = 0;

    this.viewConfig = null;
    this.grid = null;
    this.resPack = null;
    this.popUp = null;

    this.isGameOver = false;
    this.gameStatus = false;
  }

  setResources(res) {
    this.resPack = res;
  }

  setViewData(data) {
    this.viewConfig = data;
    const { timing } = data;
    this.flagTimeout = timing.flagRequestTimeout;
    this.popupTimout = timing.popupTimeout;
  }

  /** @param {Number} delta time which is set by PIXI.Tiker*/
  update(delta) {
    /* To make sure that it was long tap to reveal the cell
    * timePassed must be less than flagTimeout */
    if ( this.isPointerdown ) {
      this.timePassed += ( delta * 16.777 ); // to convert it to ms
      this.isFlagRequested = ( this.timePassed > this.flagTimeout );
    }

    if ( this.isGameOver && !this.popUp ) {
      this.popupTimout -= delta * 16.777;
      if ( this.popupTimout <= 0 ) {
        this.showPopUp();
      }
    }
  }

  /** To create actual grid of cells
   * @param {Object} model data for the grid */
  creteGrid({ collection, rows, columns, gridSize }) {
    this.grid = new Factory.Container();
    const texture = this.resPack.get("closed");

    const { width, height } = texture;
    const gridWidth = ( ( columns * width ) - width );
    const gridHeight = ( ( rows * height ) - height );

    this.grid.scale.set(gridSize / gridWidth);
    this.addChild(this.grid);

    this.grid.cells = collection.map((row, i) => {
      return row.map((cellModel, j) => {
        const x = -( gridWidth / 2 ) + ( width * j );
        const y = -( gridHeight / 2 ) + ( height * i );
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

  /** Turn all interactivity off */
  removeInteractivity() {
    this.grid.interactive = false;
    this.grid.off("touchstart", this.onTouchStart, this);
    this.grid.off("touchend", this.onTouchEnd, this);
    this.grid.off("click", this.onClick, this);
    this.grid.off("rightclick", this.onRightClick, this);
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
    this.pointersIDs = [];
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
  onClick({ data }) {
    const { x, y } = data.getLocalPosition(this.grid);
    const { row, col } = this.convertLocToIndex(x, y);
    this.emit("clickOnCell", { row, col });
  }

  /** For mouse right click on PC
   *  @param {Event} */
  onRightClick({ data }) {
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

  /** To reveal all cells which were collected by engine
   * @param {Array} cells */
  revealCells(cells) {
    cells.forEach(({ row, col }) => {
      const cell = this.grid.cells[ row ][ col ];
      cell.reveal(this.resPack, this.viewConfig.styles);
    });
  }

  /** Toggle a single cell (not) to be flagged
   * @param {Number} row
   * @param {Number} col */
  toggleCellFlag(row, col) {
    const cell = this.grid.cells[ row ][ col ];
    cell.toggleFlag(this.resPack);
  }

  /** To set flags on cells
   * @param {Array} cells */
  flagMines(cells) {
    cells.forEach(({ row, col }) => {
      this.toggleCellFlag(row, col);
    });
  }

  /** To disable view class at the end of the game */
  gameOver(isWinStatus) {
    this.removeInteractivity();
    this.gameStatus = isWinStatus;
    this.isGameOver = true;
  }

  /** To show pup-up at the end */
  showPopUp() {
    const { popup } = this.viewConfig;
    this.popUp = new Popup(popup, this.gameStatus);
    this.popUp.once("onButtonClick", () => {
      this.emit("restartGame");
    });

    this.addChild(this.popUp);
  }

  /** To clean view data before destroying */
  cleanView(){
    this.grid.removeChildren();
    this.removeChildren();

    this.pointersIDs = [];
    this.isPointerdown = false;
    this.isFlagRequested = false;
    this.flagTimeout = 0;
    this.timePassed = 0;

    this.viewConfig = null;
    this.grid = null;
    this.resPack = null;
    this.popUp = null;

    this.isGameOver = false;
    this.gameStatus = false;
  }
}