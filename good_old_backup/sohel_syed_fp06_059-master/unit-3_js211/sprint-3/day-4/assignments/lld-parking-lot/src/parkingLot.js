class Vehicle {
  type;
  registrationNumber;
  color;
  constructor(type, registrationNumber, color) {
    this.type = type;
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

class Car extends Vehicle {
  constructor(registrationNumber, color) {
    super(registrationNumber, color);
    this.type = "Car";
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

class Bike extends Vehicle {
  constructor(registrationNumber, color) {
    super(registrationNumber, color);
    this.type = "Bike";
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

class Bus extends Vehicle {
  constructor(registrationNumber, color) {
    super(registrationNumber, color);
    this.type = "Bus";
    this.registrationNumber = registrationNumber;
    this.color = color;
  }
}

class Slot {
  number;
  type;
  isBooked;
  constructor(type, number) {
    this.isBooked = false;
    this.number = number;
    this.type = type;
  }
}

// class ParkingFloor {
//   floorNumber;
//   maxLimit;
//   constructor(floorNumber, maxLimit) {
//     this.floorNumber = floorNumber;
//     this.maxLimit = maxLimit;
//     this.parkingSpots = arr;
//     this.vacantParkingSpots = [];
//   }
// }

class ParkingFloor {
  slot1 = new Slot("Bus", 1);
  slot2 = new Slot("Bike", 2);
  slot3 = new Slot("Bike", 3);
  slot4 = new Slot("Car", 4);

  floorNumber;
  maxLimit;
  vacantParkingSpots = [this.slot1, this.slot2, this.slot3, this.slot4];
  parkingSpots = [this.slot1, this.slot2, this.slot3, this.slot4];

  constructor(floorNumber, maxLimit) {
    this.floorNumber = floorNumber;
    this.maxLimit = maxLimit;
  }

  displayAvailableSlots() {
    return this.vacantParkingSpots;
  }

  parkVehicle(vehicle) {
    // let v=new Vehicle();
    const index = this.vacantParkingSpots.findIndex(
      (vehi) => vehi.type === vehicle.type
    );
    if (index == -1) {
      return vehicle.type + " slots are full";
    } else {
      for (let i = 0; i < this.maxLimit; i++) {
        if (vehicle.type == this.parkingSpots[i].type)
          this.parkingSpots[i].isBooked = true;
      }
      this.vacantParkingSpots = this.vacantParkingSpots.filter(
        (item, i) => index != i
      ); //removes slot from vaccant parking spot
    }
  }
}
export { Vehicle, Car, Bike, Bus, Slot, ParkingFloor };
