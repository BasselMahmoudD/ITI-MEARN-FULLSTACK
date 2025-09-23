let id = 1;
let customers = [];
class FlightTickets {
  constructor(seatNum, flightNum, department, arrivalAirports, travellingDate) {
    this.id = id++;
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.department = department;
    this.arrivalAirports = arrivalAirports;
    this.travellingDate = travellingDate;
    customers.push(this);
    return this;
  }

  static getSpecific(id) {
    const specificCustomer = customers.find((e) => e.id == id);
    if (!specificCustomer) return console.error("User Not Found")
    return specificCustomer;
  }
  static getAll() {
    return customers;
  }
  updateInfo(
    seatNum,
    flightNum,
    department,
    arrivalAirports,
    travellingDate
  ) {
    this.seatNum = seatNum || this.seatNum;
    this.flightNum = flightNum || this.flightNum;
    this.department = department || this.department;
    this.travellingDate = travellingDate || this.travellingDate;
    this.arrivalAirports = arrivalAirports || this.arrivalAirports;
    return this;
  }
}
module.exports = { FlightTickets };