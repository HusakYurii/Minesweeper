import CellModel from "./cellModel";

export default class Model {
  constructor() {
    this.originalData = null;
    this.grid = {
      rows: 0,
      columns: 0,
      gridSize: 0,
      map: null
    };
  }

  parseConfig(config) {
    this.originalData = config;

  }
}