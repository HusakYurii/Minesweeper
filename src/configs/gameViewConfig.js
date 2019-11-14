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
      "position": { "x": 300, "y": 0 }
    },
    "flagsCounter": {
      "type": "rect",
      "width": 180,
      "height": 100,
      "radius": 2,
      "color": 0x5c1e1a,
      "position": { "x": -300, "y": 0 }
    },
    "menuButton": {
      "type": "rect",
      "width": 250,
      "height": 100,
      "radius": 25,
      "color": 0x3d3af0,
      "position": { "x": 0, "y": 0 },

      "styles": {
        "fill": "#ffffff",
        "fontFamily": "Helvetica",
        "fontSize": 60,
        "position": { "x": 0, "y": 0 }
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
      "fill": "#0328fc"
    },
    "2": {
      "fill": "#3ec408"
    },
    "3": {
      "fill": "#fa2828"
    },
    "4": {
      "fill": "#06052e"
    },
    "5": {
      "fill": "#000000"
    }
  },
  "popups": {
    "popupBackground": {
      "type": "rect",
      "width": 550,
      "height": 700,
      "radius": 25,
      "color": 0xffffff,
      "position": { "x": 0, "y": 0 }
    },
    "popupStyles": {
      "align": "center",
      "breakWords": true,
      "fill": "#3d3af0",
      "fontFamily": "Helvetica",
      "fontSize": 60,
      "wordWrap": true,
      "wordWrapWidth": 450
    },
    "start": {
      "text": "Here can be some kind of main menu",
      "position": { "x": 0, "y": -100 },
      "buttons": [ {
        "type": "rect",
        "width": 400,
        "height": 100,
        "radius": 25,
        "color": 0x3d3af0,
        "position": { "x": 0, "y": 200 },
        "event": "startGame",
        "styles": {
          "fill": "#ffffff",
          "fontFamily": "Helvetica",
          "fontSize": 50,
          "position": { "x": 0, "y": 0 }
        },
        "text": "Start!"
      } ]
    },
    "lose": {
      "text": "Sorry, you lost! But try again!",
      "position": { "x": 0, "y": -100 },
      "buttons": [ {
        "type": "rect",
        "width": 400,
        "height": 100,
        "radius": 25,
        "color": 0x3d3af0,
        "position": { "x": 0, "y": 200 },
        "event": "restartGame",
        "styles": {
          "fill": "#ffffff",
          "fontFamily": "Helvetica",
          "fontSize": 50,
          "position": { "x": 0, "y": 0 }
        },
        "text": "Try Again?"
      } ]
    },
    "win": {
      "text": "Well done! You are great Minesweeper!",
      "position": { "x": 0, "y": -100 },
      "buttons": [ {
        "type": "rect",
        "width": 400,
        "height": 100,
        "radius": 25,
        "color": 0x3d3af0,
        "position": { "x": 0, "y": 200 },
        "event": "restartGame",
        "styles": {
          "fill": "#ffffff",
          "fontFamily": "Helvetica",
          "fontSize": 50,
          "position": { "x": 0, "y": 0 }
        },
        "text": "Try Again?"
      } ]
    },
    "menu": {
      "text": "Here can be some information or rules",
      "position": { "x": 0, "y": -130 },
      "buttons": [
        {
          "type": "rect",
          "width": 400,
          "height": 100,
          "radius": 25,
          "color": 0x3d3af0,
          "position": { "x": 0, "y": 200 },
          "event": "restartGame",
          "styles": {
            "fill": "#ffffff",
            "fontFamily": "Helvetica",
            "fontSize": 50,
            "position": { "x": 0, "y": 0 }
          },
          "text": "Exit To Menu"
        },
        {
          "type": "rect",
          "width": 400,
          "height": 100,
          "radius": 25,
          "color": 0x3d3af0,
          "position": { "x": 0, "y": 80 },
          "event": "continueGame",
          "styles": {
            "fill": "#ffffff",
            "fontFamily": "Helvetica",
            "fontSize": 50,
            "position": { "x": 0, "y": 0 }
          },
          "text": "Continue"
        }
      ]
    }
  }
};
