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
    this.model.addData(config, initializeedMap);
  }

  setResources(res) {
    this.view.setResources(res);
  }

  resize({ width, height }) {
    this.view.position.set(width / 2, height / 2);
  }

  update(delta) {
    this.view.update(delta);
  }

  run() {
    const { grid, viewTimingData } = this.model;
    this.view.creteGrid(grid);
    this.view.addInteractivity();
    this.view.setTimingData(viewTimingData);
    this.view.on("flagRequested", this.onFlagRequested ,this);
    this.view.on("clickOnCell", this.onClickOnCell ,this);
  }

  onFlagRequested({row, col}){
    console.log("Controller, onFlagRequested... ", row, col);
  }
  onClickOnCell({row, col}){
    console.log("Controller, onClickOnCell... ", row, col);
  }
}