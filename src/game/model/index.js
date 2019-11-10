import CellModel from "./cellModel";

export default class Model {
  constructor() {
    this.viewData = null;
    this.originalData = null;
    this.grid = {
      rows: 0,
      columns: 0,
      gridSize: 0,
      collection: null
    };
  }

  /** To set and parse data
   * @param {Object} config - original config data
   * @param {Array<Array>} initializedMap - map which is prepared by Engine */
  addData(config, initializedMap) {
    this.viewData = config.viewData;
    this.originalData = config;

    this.grid = {
      gridSize: config.gridSize,
      rows: initializedMap.length,
      columns: initializedMap[ 0 ].length,
      collection: this.convertMap(initializedMap)
    };
  }

  /** To convert raw map data into structured data for cells
   * @param {Array<Array>} initializedMap
   * @return {Array<CellModel>} */
  convertMap(initializedMap) {
    return initializedMap.map((row, rowIndx) => {
      return row.map((val, colIndx) => {
        const isMine = val < 0;
        const text = ( isMine || val === 0 ) ? "" : String(val);
        return new CellModel(isMine, text, rowIndx, colIndx);
      });
    });
  }

  /** Toggle a cell's model flag property
   * @param {Number} row
   * @param {Number} col */
  toggleCellFlag(row, col){
    const cell = this.grid.collection[row][col];
    cell.isFlagged = !cell.isFlagged;
  }

  /** To get all mines on filed
   * @return {Array<CellModel>}*/
  get allMines(){
    return this.grid.collection.map((row) => {
      return row.filter((cell) => cell.isMine);
    })
  }

  isGameWon (){
    const revealedCells = this.grid.collection.map((row) => {
      return row.filter((cell) => cell.isRevealed);
    });

    return revealedCells
  }
}