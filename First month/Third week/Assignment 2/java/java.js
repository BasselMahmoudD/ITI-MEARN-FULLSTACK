///////////////// Vehicle Class///////////////////////
function Vehicle(speed, color) {
  if (this.constructor === Vehicle) {
    throw new Error("This is abstract class");
  }
  Object.defineProperty(this, "speed", {
    value: speed,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "color", {
    value: color,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}
///////////////// Bicycle Class///////////////////////

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
}
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
  return "Ring Ring";
};
Bicycle.prototype.toString = function () {
  return `Bicycle: speed = ${this.speed}, color = ${this.color}`;
};

Bicycle.prototype.valueOf = function () {
  return this.speed;
};
///////////////// MotorVehicle Class///////////////////////

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  if (this.constructor === MotorVehicle) {
    throw new Error("This is abstract class");
  }
  Vehicle.call(this, speed, color);
  let sizeEngine = sizeOfEngine;
  let license = licensePlate;
  Object.defineProperty(this, "sizeOfEngine", {
    get: () => sizeEngine,
    set: (value) => (sizeEngine = value),
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "licensePlate", {
    get: () => {
      return license;
    },
    set: (value) => {
      return (license = value);
    },
    enumerable: false,
    configurable: false,
  });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

///////////////// Car Class///////////////////////
function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  Weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  Object.defineProperty(this, "numOfDoors", {
    get: () => numOfDoors,
    set: (value) => (numOfDoors = value),
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "Weight", {
    value: Weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  let airCon = false;

  this.switchOnAirCon = function () {
    airCon = !airCon;
    return airCon ? "Opened Air Condition" : "Closed Air Condition";
  };
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.toString = function () {
  return `Car: speed = ${this.speed}, color = ${this.color}, doors = ${this.numOfDoors}, wheels = ${this.numWheels}, weight = ${this.Weight}`;
};

Car.prototype.valueOf = function () {
  return this.speed * this.numWheels; 
};

///////////////// DumpTruck Class///////////////////////

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  Weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  Object.defineProperty(this, "loadCapacity", {
    get: () => loadCapacity,
    set: (value) => (loadCapacity = value),
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "Weight", {
    value: Weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  this.lowerLoad = function () {
    return "lowerLoad";
  };
  this.raiseLoad = function () {
    return "raiseLoad";
  };
}
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.toString = function () {
  return `Car: speed = ${this.speed}, color = ${this.color}, doors = ${this.numOfDoors}, wheels = ${this.numWheels}, weight = ${this.Weight}`;
};

DumpTruck.prototype.valueOf = function () {
  return this.speed * this.numWheels;
};

////////////////////Test ////////////////////////////////
// Test: Abstract class Vehicle should not be instantiated
try {
  let v = new Vehicle(100, "red");
} catch (err) {
  console.log("Vehicle Test Passed:", err.message);
}

// Test: Abstract class MotorVehicle should not be instantiated
try {
  let mv = new MotorVehicle(120, "blue", 2000, "ABC-123");
} catch (err) {
  console.log("MotorVehicle Test Passed:", err.message);
}
console.log("--------------Bicycle test---------------");

// Test: Bicycle
let bike = new Bicycle(20, "green");
console.log("Bicycle speed :", bike.speed);
console.log("Bicycle color :", bike.color);
console.log("Bicycle bell:", bike.ringBell());
console.log(bike + 10);
console.log(bike.toString());

console.log("--------------Car test---------------");

// Test: Car
let car = new Car(180, "black", 2000, "XYZ-987", 4, 4, 1500);
console.log("Car speed:", car.speed);
console.log("Car color:", car.color);
console.log("Car numOfDoors:", car.numOfDoors);
console.log("Car numWheels:", car.numWheels);
console.log("Car Weight:", car.Weight);
console.log("AirCon 1:", car.switchOnAirCon());
console.log("AirCon 2:", car.switchOnAirCon());
console.log(car.toString());
console.log(car + 10);
// Test setters
car.numOfDoors = 2;
console.log("Updated Car numOfDoors:", car.numOfDoors);

console.log("--------------DumpTruck test---------------");

// Test: DumpTruck
let truck = new DumpTruck(90, "yellow", 4000, "TRK-555", 5000, 6, 8000);
console.log("Truck speed:", truck.speed);
console.log("Truck loadCapacity:", truck.loadCapacity);
truck.loadCapacity = 6000;
console.log("Updated loadCapacity:", truck.loadCapacity);
console.log("Truck raise load:", truck.raiseLoad());
console.log("Truck lower load:", truck.lowerLoad());

