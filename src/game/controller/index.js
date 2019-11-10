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
    const { grid, viewData } = this.model;
    this.view.creteGrid(grid);
    this.view.addInteractivity();
    this.view.setViewData(viewData);
    this.view.on("flagRequested", this.onFlagRequested, this);
    this.view.on("clickOnCell", this.onClickOnCell, this);
  }

  onFlagRequested({ row, col }) {
    this.model.toggleCellFlag(row, col);
    this.view.toggleCellFlag(row, col);
  }

  onClickOnCell({ row, col }) {
    const { grid: { collection } } = this.model;
    const result = Engine.checkSelectedCell(collection, row, col);

    if ( result === Engine.MINE ) {
      this.view.showPopUp(true);
      this.view.revealCells(this.model.allMines.flat())
    } else {
      this.view.revealCells(result);
    }
  }
}