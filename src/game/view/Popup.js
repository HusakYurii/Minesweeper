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
}