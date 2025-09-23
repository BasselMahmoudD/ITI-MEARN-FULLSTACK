const { FlightTickets } = require("./classes/flightTickets");

let customer1 = new FlightTickets(12, 90, "Cairo", "Suez", "6/6/2002");
let customer2 = new FlightTickets(20, 80, "Italy", "Cairo", "7/6/2002");
let customer3 = new FlightTickets(30, 50, "Europe", "Alex", "8/6/2002");
let customer4 = new FlightTickets(40, 10, "USA", "suez", "9/6/2002");


console.log("All Tickets : " , FlightTickets.getAll());
console.log("Update Ticket For customer One : " , customer1.updateInfo(55, 10, "Normal", "FirstPlace", "8/5/2002"));
console.log("Tickets with id 2 : " , FlightTickets.getSpecific(2));

