import { WorkerBee } from "./WorkerBee.js";

export class Engineer extends WorkerBee {
  constructor(name, projects, machine = "") {
      super( name, projects );
      this.machine = machine
    this.dept = "engineering";
  }
}
