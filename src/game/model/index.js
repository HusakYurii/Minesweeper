const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
};

export default class Model {
  constructor() {
    this.originalData = null;
    this.grid = null;
  }

  parseConfig(config) {
    const { setGridManually, grid, defaultGrid } = config;
    this.originalData = config;

    if ( setGridManually ) {
      this.grid = Model.copyGrid(grid);
    } else {
      const grid = Model.createGrid(defaultGrid);
      this.grid = Model.addMines(grid, defaultGrid);
    }
  }

  /** To copy original grid map, so we will not mutate the it but work with copy */
  static copyGrid(grid) {
    return grid.reduce((acc, arr) => {
      acc.push([ ...arr ]);
      return acc;
    }, []);
  }

  /** To create grid map to work with */
  static createGrid({columns, rows}) {
    return Array.from({ length: rows }, () => {
      return Array.from({ length: columns }, () => 0);
    });
  }

  /** Add mines to the grid */
  static addMines(grid, {columns, rows, minesAmount}) {
    const history = [];
    let num = 0;

    while(num < minesAmount) {
      const row = getRndInt(0, rows);
      const col = getRndInt(0, columns);
      const wasChosen = history.some(val => (val.row === row && val.col === col) );
      if(!wasChosen) {
        num += 1;
        grid[row][col] = -1;
        history.push({row, col});
      }
    }
  }
}