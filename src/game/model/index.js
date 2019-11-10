import CellModel from "./cellModel";

export default class Model {
  constructor() {
    this.viewData = null;
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

  /** After engine has calculated data, update the model */
  updateCellsData(result = []){
    result.forEach(val => {
      let cell = this.grid.collection[ val.row ][ val.col ];
      cell = Object.assign(cell, val);
    })
  }

  /** Toggle a cell's model flag property
   * @param {Number} row
   * @param {Number} col */
  toggleCellFlag(row, col) {
    const cell = this.grid.collection[ row ][ col ];
    cell.isFlagged = !cell.isFlagged;
  }

  /** High order function. Just to reduce amount of repeated code
   * @param {Function} callback
   * @return {Array<CellModel>} */
  getCellsByRule(callback){
    return this.grid.collection.map((row) => {
      return row.filter(callback);
    });
  }

  /** To get all mines on filed
   * @return {Array<CellModel>}*/
  get allMines() {
    return this.getCellsByRule((cell) => cell.isMine);
  }

  /** To get all cells which is not opened yet
   * @return {Array<CellModel>} */
  get cellsToRevealed() {
    return this.getCellsByRule((cell) => !cell.isRevealed);
  }

  /** To get all cell which are going to be set ad flagged at the end of the game
   * @return {Array<CellModel>} */
  get cellsToFlag() {
    return this.getCellsByRule((cell) => !cell.isFlagged);
  }

  /** To check whether game has been won
   * @return {Boolean} */
  get isGameWon() {
    const mines = this.allMines.flat();
    const cellsLeft = this.cellsToRevealed.flat();
    return ( mines.length - cellsLeft.length ) === 0;
  }

  /** To clean model before destroying */
  cleanModel(){
    this.viewData = null;
    this.grid = {
      rows: 0,
      columns: 0,
      gridSize: 0,
      collection: null
    };
  }
}