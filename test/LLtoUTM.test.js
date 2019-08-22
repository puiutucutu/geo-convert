import test from "tape";
import { LLtoUTM } from "../src";

const coords = {
  geographic: {
    longitude: -104.99404,
    latitude: 39.75621
  }
};

test("LLtoUTM", function(assert) {
  const actual = LLtoUTM(
    coords.geographic.longitude,
    coords.geographic.latitude
  );

  const expected = {
    zone: 13,
    easting: 500510.5483994933,
    northing: 4400699.500842435
  };

  assert.deepEquals(actual, expected, "Returns expected value");

  assert.end();
});
