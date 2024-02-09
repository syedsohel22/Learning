class Vehicle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}

class Car extends Vehicle {
  constructor(regNumber) {
    super("Car", regNumber);
  }
}

// let c1 = new car("MH 29 2743");
// console.log(c1);

//   class Bike extends Vehicle {
//     constructor(regNumber) {
//       super("Bike", regNumber);
//     }
//   }

//   class Truck extends Vehicle {
//     constructor(regNumber) {
//       super("Truck", regNumber);
//     }
//   }

class Slot {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isBooked = false;
  }
}

class ParkingFloor {
  constructor(floorNumber, maxSlots) {
    this.floorNumber = floorNumber;
    this.ParkingSpots = [];
    for (let i = 0; i < maxSlots; i++) {
      if (i === 0) {
        this.ParkingSpots.push(new Slot(i, "Car"));
      }
      //else if (i == 1) {
      //     this.ParkingSpots.push(new Slot(i, "bike"));
      //   } else {
      //     this.ParkingSpots.push(new Slot(i, "Truck"));
      //   }
    }
  }
}
// console.log(object);

class Mall {
  constructor(numberofFloors) {
    this.floors = [];
    this.numberofFloors = numberofFloors;

    for (let i = 0; i < numberofFloors; i++) {
      this.floors.push(new ParkingFloor(i, numberofFloors));
    }
  }
  parkVehicle(vehicle) {
    let type = vehicle.type;

    let slot = this.findSlot(type);
    if (!slot) {
      console.log("All slots Full");
      alert("All slots Full");
      return false;
    }
    slot.foundedSlot.isBooked = true;
    console.log("slot", slot);
  }
  findSlot(userVehicalType) {
    for (let i = 0; i < this.numberofFloors; i++) {
      for (let slot of this.floors[i].ParkingSpots) {
        if (slot.type === userVehicalType && !slot.isBooked) {
          return { floorNumber: i, foundedSlot: slot };
        }
      }
    }
    return false;
  }
}

let m1 = new Mall(3);

let b1 = new Bike("MH29 4546");
let b2 = new Bike("MH29 4547");
let b3 = new Bike("MH29 4548");
let b4 = new Bike("MH29 4549");

m1.parkVehicle(b1);

m1.parkVehicle(b2);
m1.parkVehicle(b3);
m1.parkVehicle(b4);
