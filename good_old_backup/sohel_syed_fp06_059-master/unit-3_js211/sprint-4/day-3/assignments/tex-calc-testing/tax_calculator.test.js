import { rebate, taxcalc } from "./tax_calculator.js";

test("Tax calculator", () => {
  expect(taxcalc).toBeDefined();
});

test(" calculate rebate", () => {
  expect(rebate).toBeDefined();
});
