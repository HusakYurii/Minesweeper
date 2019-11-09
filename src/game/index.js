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
  }

  initialize(){
    this.controller = new Controller();
    this.controller.initialize(new Model(), new View())
  }

  useConfig(config){
    this.controller.useConfig(config);
  }

  setResources(res){
    this.controller.setResources(res);
  }

  resize(sizes){
    this.controller.resize(sizes);
  }

  update(delta){
    this.controller.update(delta);
  }

  run(){
    this.controller.run();
  }
}