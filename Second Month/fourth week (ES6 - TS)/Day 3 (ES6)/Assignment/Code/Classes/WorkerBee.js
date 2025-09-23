import { Employee } from "./Employee.js";

export class WorkerBee extends Employee {
  constructor(name,dept, projects = []) {
    super(name);
    if (Array.isArray(dept)) {
      this.dept = "general";
      this.projects = dept;
    } else {
      this.dept = dept || "general";
      this.projects = projects;
    }
  }
}
