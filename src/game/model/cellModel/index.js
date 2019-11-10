/**
 * @class CellModel
 * To hold cell's data separately
 * */
export default class CellModel {
  constructor(isMine, text, row, col) {
    this.col = col;
    this.row = row;
    this.text = text;
    this.isMine = isMine;
    this.revealed = false;
    this.isFlaged = false;
  }
}