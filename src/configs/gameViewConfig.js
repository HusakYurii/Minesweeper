export default {
  "header": {
    "type": "rect",
    "width": 840,
    "height": 140,
    "radius": 20,
    "color": 0xe3e4e4,

    "timer": {
      "type": "rect",
      "width": 180,
      "height": 100,
      "radius": 2,
      "color": 0x5c1e1a,
      "position": {"x": 300,"y": 0},
    },
    "flagsCounter": {
      "type": "rect",
      "width": 180,
      "height": 100,
      "radius": 2,
      "color": 0x5c1e1a,
      "position": {"x": -300,"y": 0},
    },
    "menuButton": {
      "type": "rect",
      "width": 250,
      "height": 100,
      "radius": 25,
      "color": 0x3d3af0,
      "position": {"x": 0,"y": 0},

      "styles": {
        "fill": "#ffffff",
        "fontFamily": "Helvetica",
        "fontSize": 60,
        "position": {"x": 0,"y": 0}
      },
      "text": "Menu"
    }
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
    "type": "rect",
    "width": 550,
    "height": 700,
    "radius": 25,
    "color": 0xffffff,
    "position": {"x": 0,"y": 0},

    "button": {
      "type": "rect",
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