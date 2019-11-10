/* Main config for the game grid. Game designer can use these to set the game
 * Just make sure the `setGridManually` is set to `true` for that,
  * otherwise grid will be set as default 9 by 9 with 10 mines on it */
export default {
  "name": "Minesweeper",
  "debuggerMode": false,
  "setGridManually": false,
  // basically it is a with of a square
  "gridSize": 700,
  "defaultGrid": {
    "minesAmount": 10,
    "columns": 9,
    "rows": 9
  },
  "grid": [
    [-1, 0, 0, 0,-1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0, 0, 0, 0, 0,-1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0,-1, 0, 0,-1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0,-1 ],
    [ 0, 0,-1, 0, 0, 0, 0, 0, 0, 0 ],
    [-1, 0, 0, 0, 0, -1, 0, 0, 0, 0 ]
  ],
  // applicable only for mobile devices, time in `ms`
  "viewData": {
    "timing": {
      "flagRequestTimeout": 200,
      "doubleTapTimeout": 100
    },
    "styles": {
      "common": {
        "fontFamily": "Helvetica",
        "fontSize": 60,
        "fontWeight": "bold"
      },
      "1": {
        "fill": "#0328fc",
      },
      "2": {
        "fill": "#3ec408",
      },
      "3": {
        "fill": "#fa2828",
      },
      "4": {
        "fill": "#06052e",
      }
    }
  },
  "popup": {
    "winPopup": {

    },
    "losePopup": {

    }
  }

};