export default class Controller {
  constructor() {
    this.model = null;
    this.view = null;
  }

  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  useConfig(config) {
    this.model.parseConfig(config);
  }

  setResources(res){
    this.view.setResources(res);
}

  resize(sizes) {

  }

  update(delta) {

  }

  run(){

  }
}