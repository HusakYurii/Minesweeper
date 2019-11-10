import Engine from "./engine";


export default class Controller {
  constructor() {
    this.model = null;
    this.view = null;
  }

  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  useConfig(config) {
    const initializeedMap = Engine.initializeMap(config);
    this.model.parseConfig(config);
  }

  setResources(res) {
    this.view.setResources(res);
  }

  resize({ width, height }) {
    this.view.position.set(width / 2, height / 2);
  }

  update(delta) {

  }

  run() {

  }
}