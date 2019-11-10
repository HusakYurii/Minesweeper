import { getRndInt, isValid, isMine } from "./helpers";

/**
 * @class Engine
 * This class is not a display object
 * This class will be used as math engine which will analyze grid
 * and return data based on analysis
 * */
export default class Engine {

  /**
   * @scope {Engine}
   * Ti initialize the grid and count empty cells and number of cells around mines
   * @param {Boolean} setGridManually
   * @param {Object} defaultGrid - data for default game grid
   * @param {Array<Array>} grid - grid which is used in a case of manually inputted grid data
   * @return {Array<Array>}
   * */
  static initializeMap({ setGridManually, defaultGrid, grid }) {
    let map = [];
    if ( setGridManually ) {
      map = this.copyGrid(grid);
    } else {
      map = this.addMines(this.createGrid(defaultGrid), defaultGrid);
    }
    return this.analyzeMap(map);
  }

  /** To copy original grid map, so we will not mutate it but work with the copy
   * @param {Array<Array>} grid */
  static copyGrid(grid) {
    return grid.reduce((acc, arr) => {
      acc.push([ ...arr ]);
      return acc;
    }, []);
  }

  /** To create grid map from default data to work with
   * @param {Number} columns - number of columns specified by default
   * @param {Number} rows - number of rows specified by default
   * @return {Array<Array>} */
  static createGrid({ columns, rows }) {
    return Array.from({ length: rows }, () => {
      return Array.from({ length: columns }, () => 0);
    });
  }

  /** Add mines to the grid
   * @param {Array<Array>} arr - created grid from default data
   * @param {Number} minesAmount - number of mines
   * @param {Number} columns
   * @param {Number} rows
   * @return {Array<Array>} */
  static addMines(arr, { columns, rows, minesAmount }) {
    const history = [];
    let num = 0;

    while ( num < minesAmount ) {
      const row = getRndInt(0, rows);
      const col = getRndInt(0, columns);
      const wasChosen = history.some(val => ( val.row === row && val.col === col ));
      if ( !wasChosen ) {
        num += 1;
        arr[ row ][ col ] = -1;
        history.push({ row, col });
      }
    }

    return arr;
  }

  /** To count and set amount of empty cells and how many mines can be around of a cell
   * @param {Array<Array>} arr - initialized grid map
   * @return {Array<Array>} new grid map
   * */
  static analyzeMap(arr) {
    return arr.map((row, rowIndx) => {
      return row.map((val, colIndx) => {
        if ( isMine(arr, rowIndx, colIndx) ) return val;
        else return this.countMines(arr, rowIndx, colIndx);
      });
    });
  }

  /** To count how many mine are around the given cell
   * @param {Array<Array>} arr
   * @param {Number} rowIndx
   * @param {Number} colIndx
   * @return {Number} amount of mines */
  static countMines(arr, rowIndx, colIndx) {
    let mines = 0;

    [ -1, 0, +1 ].forEach((rowOffset) => {
      [ -1, 0, +1 ].forEach((colOffset) => {
        const currRow = rowIndx + rowOffset;
        const currCol = colIndx + colOffset;
        if ( isValid(arr, currRow, currCol) && isMine(arr, currRow, currCol) ) {
          mines += 1;
        }
      });
    });

    return mines;
  }

  static checkSelectedCell(map, row, col) {
    return isMine(map, row, col) ? "mine" : this.scanField(map, row, col);
  }

  static scanField(arr, row, col){

  }
}