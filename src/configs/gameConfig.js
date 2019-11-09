/* Main config for the game grid. Game designer can use these to set the game
 * Just make sure the `setGridManually` is set to `true` for that,
  * otherwise grid will be set as default 9 by 9 with 10 mines on it */
export default {
  "name": "Minesweeper",
  "debuggerMode": true,
  "defaultGrid": {
    "minesAmount": 10,
    "columns": 9,
    "rows": 9
  },
  "setGridManually": true,
  "grid": [
    [-1, 0, 0, 0,-1, 0, 0,-1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0, 0, 0, 0, 0,-1, 0, 0, 0 ],
    [ 0, 0, 0,-1, 0, 0, 0, 0, 0, 0 ],
    [ 0,-1, 0, 0, 0, 0,-1, 0,-1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0,-1, 0, 0,-1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0,-1, 0, 0, 0, 0, 0, 0, 0 ],
    [-1, 0, 0, 0, 0, 0,-1, 0, 0, 0 ]
  ],
  "popup": {
    "winPopup": {

    },
    "losePopup": {

    }
  }

};