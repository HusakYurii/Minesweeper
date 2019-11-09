import { Factory } from "../../../shared/sources/libs";

export default class View extends Factory.Container {
  constructor() {
    super();

    this.resPack = null;
  }

  setResources(res){
    this.resPack = res;
  }
}