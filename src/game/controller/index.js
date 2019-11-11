import { Emitter } from "../../../shared/sources/extensions";
import Engine from "./engine";
import { gameConfig, gameViewConfig } from "../../configs";

export default class Controller extends Emitter {
  constructor() {
    super();

    this.model = null;
    this.view = null;
  }

  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  useConfig({ gameConfig, gameViewConfig }) {
    const initializedMap = Engine.initializeMap(gameConfig);
    this.model.addData(gameConfig, initializedMap);

    const { flagsLeft } = this.model;
    const { timing } = gameConfig;

    this.view.setViewData({
      ...gameViewConfig,
      flags: flagsLeft,
      timing
    });
  }

  setResources(res) {
    this.view.setResources(res);
  }

  resize({ width, height }) {
    const isLanscape = width > height;
    this.view.position.set(width / 2, height / 2);
    this.view.rotation = isLanscape ? -Math.PI/2 : 0;
  }

  update(delta) {
    this.view.update(delta);
  }

  run() {
    const { grid } = this.model;
    this.view.creteGrid(grid);
    this.view.addInteractivity();
    this.view.on("flagRequested", this.onFlagRequested, this);
    this.view.on("clickOnCell", this.onClickOnCell, this);
    this.view.once("restartGame", this.onRestartGame, this);

    this.view.createHeader();
  }

  onRestartGame() {
    this.view.cleanView();
    this.model.cleanModel();
    this.view.off("flagRequested", this.onFlagRequested, this);
    this.view.off("clickOnCell", this.onClickOnCell, this);
    this.emit("restartGame");
  }

  /** To react on user interactivity and
   * update model and view */
  onFlagRequested({ row, col }) {

    this.model.toggleCellFlag(row, col);

    if(this.model.flagsLeft < 0){
      this.model.toggleCellFlag(row, col);
    } else {
      this.view.toggleCellFlag(row, col);
      this.view.updateFlagsNumber(this.model.flagsLeft)
    }
  }

  /** To react on user interactivity and use engine to calculate game's data,
   *  update model and view */
  onClickOnCell({ row, col }) {
    const { grid: { collection } } = this.model;
    const result = Engine.checkSelectedCell(collection, row, col);

    if ( result === Engine.MINE ) {
      this.view.gameOver(false);
      this.view.revealCells(this.model.allMines.flat());
    } else if ( this.model.isGameWon ) {
      this.model.updateCellsData(result);
      this.view.revealCells(result);
      this.view.gameOver(false);
      this.view.flagMines(this.model.totFlaggedCells.flat());
    } else {
      this.model.updateCellsData(result);
      this.view.revealCells(result);
    }
  }
}