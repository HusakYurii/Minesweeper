import { Factory } from "../../../shared/sources/libs";

/**
 * @class Popup extends PIXI.Container
 * */
export default class Popup extends Factory.Container {

  constructor({ button, ...popup }, isWinStatus) {
    super();

    const status = isWinStatus ? "win" : "lose";

    const popupIcon = Factory.createFromGraphics(popup);
    const popupText = Factory.createTextFromConfig(popup.text[ status ], popup.styles);
    popupIcon.addChild(popupText);

    const popupButton = Factory.createFromGraphics(button);
    const buttonText = Factory.createTextFromConfig(button.text, button.styles);
    popupButton.addChild(buttonText);

    this.addChild(popupIcon, popupButton);

    popupButton.interactive = true;
    popupButton.once("pointerdown", () => {
      this.emit("onButtonClick");
    });
  }

  // static fromConfig({ width, height, radius, color, position: { x, y } = {} } = {}) {
  //   const texture = new Factory.Graphics()
  //     .beginFill(color)
  //     .drawRoundedRect(0, 0, width, height, radius)
  //     .endFill()
  //     .generateTexture();
  //
  //   const sprite = new Factory.Sprite(texture);
  //   sprite.position.set(x, y);
  //   return sprite;
  // }
  //
  // static createText(text, { position: { x, y }, ...styles } = {}) {
  //   const txt = new Factory.Text(text, styles);
  //   txt.position.set(x, y);
  //   return txt;
  // }
}