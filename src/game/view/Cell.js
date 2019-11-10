import { Factory } from "../../../shared/sources/libs";

/**
 * @class Cell
 * To hold cell's data and display different cell's states
 * */
export default class Cell extends Factory.Sprite {

  /**
   * @param {PIXI.Texture} texture
   * @param {CellModel} model*/
  constructor(texture, { col, row, text, isMine, isRevealed, isFlagged }) {
    super(texture);

    this.col = col;
    this.row = row;
    this.text = text;
    this.isMine = isMine;
    this.isRevealed = isRevealed;
    this.isFlagged = isFlagged;
  }

  changeState(texture) {
    this.texture = texture;
    this.isRevealed = true;
    if ( !this.isMine ) {
      this.addChild(new Factory.Text(this.text));
    }
  }
}