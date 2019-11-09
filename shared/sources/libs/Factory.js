import {
  Container,
  Graphics,
  Sprite,
  Text
} from "../extensions/index";

/**
 * @static
 * @class Factory
 * Can be used as an abstract Factory or be extended
 * */
export default class Factory {
  static get Container() {
    return Container;
  }

  static get Graphics() {
    return Graphics;
  }

  static get Sprite() {
    return Sprite;
  }

  static get Text() {
    return Text;
  }
}