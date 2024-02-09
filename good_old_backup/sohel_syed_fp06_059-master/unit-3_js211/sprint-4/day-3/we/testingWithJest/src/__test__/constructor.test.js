import { Car } from "../../constructor.js";

test("Test Constructor", () => {
  expect(Car).toBeDefined();
  let c = new Car("mycar", "honda", "black", "15lak");
  expect(c).toBeInstanceOf(Car);
});

test("test prototype method drive", () => {
  const c = new Car("mycar", "honda", "black", "15lak");

  expect(c.drive).toBeDefined();
  expect(c.drive()).toEqual("honda mycar is running");
});
