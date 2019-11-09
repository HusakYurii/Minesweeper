import * as PIXI from "pixi.js";

/**
 * @class Sprite
 * @param {PIXI.Texture} texture - a texture of picture in texture cache
 * @return {PIXI.Sprite} - an instance of a PIXI object
 * */
export default class Sprite extends PIXI.Sprite {
  constructor(texture) {
    super(texture);

    this.anchor.set(0.5);
  }
}
