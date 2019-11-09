import { gameConfig, layoutManagerConfig, applicationConfig, resourcesConfig } from "./configs";
import { LayoutManager, ResourceLoader } from "../shared/sources/libs";
import { Application } from "../shared/sources/extensions";
import Game from "./game";

/* Create an instance of game, initialize it and set game config */
const game = new Game();
game.initialize();
game.useConfig(gameConfig);

/* just for development mode */
if(gameConfig.debuggerMode){
  window.game = game;
}

/* Create an instance of PIXI.Application. Use the game application config for it */
const app = new Application(applicationConfig);
app.stage.addChild(game.controller.view);
app.ticker.add(game.update, game);

document.body.appendChild(app.view);

const updateCanvasSizes = ({ width, height }) => {
  app.view.style.width = `${width}px`;
  app.view.style.height = `${height}px`;
};

const updateRenderSizes = ({ width, height }) => {
  app.renderer.resize(width, height);
};

/* Use the layout manager config to set base sizes for the game and PIXI.Renderer canvas
   Subscribe on resize event */
const layoutManager = new LayoutManager(layoutManagerConfig);
layoutManager.on("resize", ({ globalSizes, recalculatedSizes }) => {
  updateCanvasSizes(globalSizes);
  updateRenderSizes(recalculatedSizes);
  game.resize(recalculatedSizes);
});

/* Use the resources config to add all assets data to a loader. */
const loader = new ResourceLoader();
loader.resPackages = resourcesConfig;

/* Run loader and after it has loaded all assets, run the game */
loader.runLoader(
  () => {
    game.run();
    layoutManager.resizeView();
  },
  (resPack) => {
    game.setResources(resPack);
  }
);
