import Controller from "./controller";
import Model from "./model";
import View from "./view";

/** @class Game
 * Basically Game is a component with its own controller, model and view.
 * All logic goes in controller class. The Game itself acts as wrapper and has some API
 * */
export default class Game {
  constructor() {
    this.controller = null;
    this.gameConfig = null;
    this.viewResources = null;
  }

  initialize() {
    this.controller = new Controller();
    this.controller.initialize(new Model(), new View());
    this.controller.on("restartGame", this.restartGame, this);
  }

  /** As game is being restarted use original data again */
  restartGame() {
    this.useConfig(this.gameConfig);
    this.setResources(this.viewResources);
    this.run();
  }

  useConfig(config) {
    this.gameConfig = config;
    this.controller.useConfig(config);
  }

  setResources(res) {
    this.viewResources = res;
    this.controller.setResources(res);
  }

  resize(sizes) {
    this.controller.resize(sizes);
  }

  update(delta) {
    this.controller.update(delta);
  }

  run() {
    this.controller.run();
  }
}