 ### Minesweeper game using PIXI.js
 - [x] Playable in both desktop and mobile browsers;
 - [x] 9x9 grid by default;
 - [x] 10 mines by default;

  ## Interaction tips for PC
  - Left click to clear a tile;
  - Right click to flag a tile as a bomb

  ##  Interaction tips for mobile devices
  - Tap on screen to clear a tile
  - Tap and hold a little to flag a tile as a bomb


 To check the game follow steps described below
 1. clone or download this repository
 2. run ``` npm i ``` to install all packages
 3. run ``` npm run init ``` it will create dist folder with the game's files and run live server on port 8080
 4. open the game in the browser following *http://localhost:8080/*

 ## How to configure the game
 To configure the game parameters go to ``` src/configs/gameConfig.js ``` file
 Before changing grid sizes, tiles amount, mine amount etc, make sure ``` setGridManually ``` value is set to ``` true ```

|       Option    |   value    |             description               |
| --------------- | ---------- | ------------------------------------- |
| setGridManually | true/false | if you need to add some custom params |
| minesAmount     | number     | amount of mines for the game - will be used as a default parameter |
| columns         | number     | number of columns of the game grid - will be used as a default parameter |
| rows            | number     | number of rows of the game grid - will be used as a default parameter |
| gridSize        | 750        | basically it is a with of the field |
| grid            | 2D matrix  | if setGridManually = true, this matrix will be used as game grid. Fill it with 0 or -1. -1 means a bomb in this place |

