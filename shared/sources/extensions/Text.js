import * as PIXI from "pixi.js";

/**
 * @class Text
 * @param {Object|PIXI.TextStyle} [styles] - styles for text
 * @return {PIXI.Text} - an instance of PIXI.Text object
 * */
export default class Text extends PIXI.Text {
  constructor(text, styles) {
    super(text, styles);
  }

  /** We do not heed to change it directly
   * @param {String} text */
  changeText(text) {
    this.text = text;
  }
}