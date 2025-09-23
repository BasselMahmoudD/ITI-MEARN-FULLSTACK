import { Employee } from "./Employee.js";

export class Manager extends Employee {
  constructor(name, dept, reports = []) {
    super(name);
    if (Array.isArray(dept)) {
      this.dept = "general";
      this.reports = dept;
    } else {
      this.dept = dept || "general";
      this.reports = reports || [];
    }
  }
}
