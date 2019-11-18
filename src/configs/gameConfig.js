/* Main config for the game grid. Game designer can use these to set the game
 * Just make sure the `setGridManually` is set to `true` for that,
  * otherwise grid will be set as default 9 by 9 with 10 mines on it */
export default {
  "name": "Minesweeper",
  "debuggerMode": true,
  "setGridManually": false,
  // basically it is a with of a square
  "gridSize": 800,
  "defaultGrid": {
    "minesAmount": 10,
    "columns": 9,
    "rows": 9
  },
  "grid": [
    [-1, 0, 0, 0,-1, 0,-1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0, 0, 0, 0, 0,-1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0,-1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0,-1, 0, 0,-1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0,-1, 0, 0, 0, 0, 0, 0, 0 ],
    [-1, 0, 0, 0, 0,-1, 0, 0, 0, 0 ]
  ],
  // applicable only for mobile devices, time in `ms`
  "timing": {
    "flagRequestTimeout": 200,
    "popupTimeout": 1000
  }
};