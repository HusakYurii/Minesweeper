import { Factory } from "../../../shared/sources/libs";

/**
 * @class Popup extends Container
 * */
export default class Popup extends Factory.Container {

  constructor({ button, ...popup }, isWinStatus) {
    super();

    const status = isWinStatus ? "win" : "lose";

    const popupIcon = Popup.fromConfig(popup);
    const popupText = Popup.createText(popup.text[ status ], popup.styles);
    popupIcon.addChild(popupText);

    const popupButton = Popup.fromConfig(button);
    const buttonText = Popup.createText(button.text, button.styles);
    popupButton.addChild(buttonText);

    this.addChild(popupIcon, popupButton);

    popupButton.interactive = true;
    popupButton.once("pointerdown", () => {
      this.emit("onButtonClick");
    });
  }

  static fromConfig({ width, height, radius, color, position: { x, y } = {} } = {}) {
    const texture = new Factory.Graphics()
      .beginFill(color)
      .drawRoundedRect(0, 0, width, height, radius)
      .endFill()
      .generateTexture();

    const sprite = new Factory.Sprite(texture);
    sprite.position.set(x, y);
    return sprite;
  }

  static createText(text, { position: { x, y }, ...styles } = {}) {
    const txt = new Factory.Text(text, styles);
    txt.position.set(x, y);
    return txt;
  }
}