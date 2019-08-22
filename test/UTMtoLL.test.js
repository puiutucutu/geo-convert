import test from "tape";
import { UTMtoLL } from "../src";

const coords = {
  utm: {
    zone: 13,
    easting: 500510.5483994933,
    northing: 4400699.500842435
  }
};

test("UTMtoLL", function(assert) {
  const actual = UTMtoLL(
    coords.utm.zone,
    coords.utm.easting,
    coords.utm.northing
  );

  const expected = [-104.99404, 39.756209999999996];

  assert.deepEquals(actual, expected, "Returns expected value");

  assert.end();
});
