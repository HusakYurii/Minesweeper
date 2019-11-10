import CellModel from "./cellModel";

export default class Model {
  constructor() {
    this.viewData = null;
    this.originalData = null;
    this.grid = {
      rows: 0,
      columns: 0,
      gridSize: 0,
      map: null
    };
  }

  /** To set and parse data
   * @param {Object} config - original config data
   * @param {Array<Array>} initializedMap - map which is prepared by Engine */
  addData(config, initializedMap) {
    this.viewData = config.viewData;
    this.originalData = config;

    this.grid = {
      gridSize: config.gridSize,
      rows: initializedMap.length,
      columns: initializedMap[ 0 ].length,
      map: this.convertMap(initializedMap)
    };
  }

  /** To convert raw map data into structured data for cells
   * @param {Array<Array>} initializedMap
   * @return {Array<CellModel>} */
  convertMap(initializedMap) {
    return initializedMap.map((row, rowIndx) => {
      return row.map((val, colIndx) => {
        const isMine = val < 0;
        const text = ( isMine || val === 0 ) ? "" : String(val);
        return new CellModel(isMine, text, rowIndx, colIndx);
      });
    });
  }
}