import { WorkerBee } from "./WorkerBee.js";

export class SalesPerson extends WorkerBee {
  constructor(name, projects, quota = 100) {
    super(name, projects);
    this.quota = quota;
    this.dept = "sales";
  }
}
