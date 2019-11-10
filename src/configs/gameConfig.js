/* Main config for the game grid. Game designer can use these to set the game
 * Just make sure the `setGridManually` is set to `true` for that,
  * otherwise grid will be set as default 9 by 9 with 10 mines on it */
export default {
  "name": "Minesweeper",
  "debuggerMode": true,
  "setGridManually": true,
  // basically it is a with of a square
  "gridSize": 750,
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
  "viewData": {
    "timing": {
      "flagRequestTimeout": 200,
      "popupTimeout": 1000,
    },
    "styles": {
      "common": {
        "fontFamily": "Helvetica",
        "fontSize": 70,
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
      },
      "5": {
        "fill": "#000000",
      }
    },
    "popup": {
      "type": "roundedRect",
      "width": 550,
      "height": 700,
      "radius": 25,
      "color": 0xffffff,
      "position": {"x": 0,"y": 0},

      "button": {
        "type": "roundedRect",
        "width": 400,
        "height": 100,
        "radius": 25,
        "color": 0x3d3af0,
        "position": {"x": 0,"y": 200},

        "styles": {
          "fill": "#ffffff",
          "fontFamily": "Helvetica",
          "fontSize": 50,
          "position": {"x": 0,"y": 0}
        },
        "text": "Try again?"
      },

      "styles": {
        "align": "center",
        "breakWords": true,
        "fill": "#3d3af0",
        "fontFamily": "Helvetica",
        "fontSize": 60,
        "wordWrap": true,
        "wordWrapWidth": 450,
        "position": {"x": 0,"y": -100}
      },
      "text": {
        "win": "Well done! You are great Minesweeper!",
        "lose": "Sorry, you lost! But try again!"
      }
    }
  }
};