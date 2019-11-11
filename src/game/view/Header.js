import { Factory } from "../../../shared/sources/libs";

const MAP = {"0": "zero","1": "one","2": "two","3": "three","4": "four","5": "five","6": "six","7": "seven","8": "eight","9": "nine"};

/** @class Header
 * @extends PIXI.Container
 * Game's View Header
 * */
export default class Header extends Factory.Container {
  constructor({ header, textures }) {
    super();

    this._resPack = textures;
    this._timeCounter = 0;
    this._timer = 0;

    this.flagsCounter = null;
    this.menuButton = null;
    this.gameTimer = null;

    this.initializeHeader(header);
  }

  initializeHeader(header) {
    const { flagsCounter, menuButton, timer, ...bgCnfig } = header;
    const headerBackground = Factory.createFromGraphics(bgCnfig);

    this.flagsCounter = Factory.createFromGraphics(flagsCounter);
    this.gameTimer = Factory.createFromGraphics(timer);

    const { styles, text, ...buttonCnfig } = menuButton;
    const buttonText = Factory.createTextFromConfig(text, styles);
    this.menuButton = Factory.createFromGraphics(buttonCnfig);
    this.menuButton.addChild(buttonText);

    this.addChild(headerBackground, this.flagsCounter, this.gameTimer, this.menuButton);
  }

  createSetOfDigits(who) {
    const { width, height } = who;
    const digitW = width / 3;
    const digitH = height;

    who.digits = "000".split("").map((number, i) => {
      const digit = new Factory.Sprite(this._resPack.get(MAP[ number ]));
      digit.width = digitW * 0.9;
      digit.height = digitH * 0.9;
      digit.x = -( width - digitW ) / 2 + ( digitW * i );
      return who.addChild(digit);
    });
  }

  updateFlagsNumber(numb = 0) {
    if ( !this.flagsCounter.digits ) {
      this.createSetOfDigits(this.flagsCounter);
    }
    this.updateNumbers(this.flagsCounter, numb);
  }

  updateTimeNumber(numb = 0){
    if ( !this.gameTimer.digits ) {
      this.createSetOfDigits(this.gameTimer);
    }
    this.updateNumbers(this.gameTimer, numb);
  }

  updateNumbers(counter, numb){
    numb = numb >= 100 ? String(numb) : numb >= 10 ? `0${numb}` : `00${numb}`;

    String(numb).split("").forEach((val, i) => {
      counter.digits[i].texture = this._resPack.get(MAP[ val ]);
    });
  }

  update(delta) {
    const time = delta * 16.777;
    this._timer += time;
    if(this._timer >= 1000){
      this._timer = 0;
      this._timeCounter += 1;
      this.updateTimeNumber(this._timeCounter);
    }
  }
}