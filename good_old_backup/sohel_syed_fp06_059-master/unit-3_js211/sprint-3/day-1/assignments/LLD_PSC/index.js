class Slot {
  #timeSlot;
  constructor(start, end) {
    this.#timeSlot = [start, end];
  }

  get start() {
    return this.#timeSlot[0];
  }

  get end() {
    return this.#timeSlot[1];
  }
}

class Slots {
  #timeSlots;
  constructor() {
    this.#timeSlots = [];
  }

  add(slot) {
    if (this.isAllowed(slot.start, slot.end)) {
      this.#timeSlots.push(slot);
    }
  }

  isAllowed(start, end) {
    for (let slot of this.#timeSlots) {
      if (start < slot.end && end > slot.start) {
        return false;
      }
    }
    return true;
  }
}

// const r = new Slots();

// r.add(s1);
// r.add(s2);
// r.add(s3);

// console.log(r);

class MeetingRoom {
  #name;
  #capacity;
  #slots;

  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
    this.#slots = new Slots();
  }

  get gerName() {
    return this.#name;
  }

  get getCapacity() {
    return this.#capacity;
  }

  addSlots() {
    this.Slots.add(slot);
  }
}

// let m1 = new MeetingRoom("Room-1", 30);
// let s1 = new Slot(1, 3);

// let s2 = new Slot(4, 6);

// let s3 = new Slot(2, 5);

m1.addSlots(s1);

class Floor {
  #name;
  #meetingRooms;

  constructor(name) {
    this.#name = name;
    this.meetingRooms = [];
  }

  get getName() {
    return this.#name;
  }

  addMeetingRoom(room) {
    if (!this.doesRoomExits(room.getName)) {
      this.#meetingRooms.push(room);
    }
  }

  doesRoomExits(name) {
    for (let room of this.#meetingRooms) {
      if (room.getname === name) {
        return true;
      }
    }
    return false;
  }
}

class Building {
  #name;
  #floors;

  constructor(name) {
    this.#name = name;
    this.#floors = [];
  }

  get getName() {
    return this.#name;
  }

  addFloor(floor) {
    if (!this.doesFloorExits(floor.getName)) {
      this.#floors.push(floor);
    }
  }

  doesFloorExits(name) {
    for (let f of this.floors) {
      if (f.getName == name) {
        return true;
      }
    }
    return false;
  }
}

let b = new Building("MasaiVerse");

let f1 = new Floor("Floor-1");
let m1 = new MeetingRoom("Room-1", 30);
let s1 = new Slot(1, 3);
let s2 = new Slot(4, 6);
let s3 = new slot(2, 5);

m1.addSlot(s1);
m1.addSlot(s2);
m1.addSlot(s3);

let m2 = new MeetingRoom("Room-1", 30);
let m3 = new meetingRoom("Room-3", 30);

f1.addMeetingRoom(m1);
f1.addMeetingRoom(m2);
f1.addMeetingRoom(m3);

b.addFloor(f1);

let f2 = new Floor("Floor-1");

b.addFloor(f2);

console.log(b);
