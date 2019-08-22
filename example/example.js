const path = require("path");
const geoConvert = require(path.resolve("./dist/geo-convert.js"));

const coords = {
  latitude: 39.75621,
  longitude: -104.99404
};

const ll_to_utm = geoConvert.LLtoUTM(coords.longitude, coords.latitude);

const utm_to_ll = geoConvert.UTMtoLL(
  ll_to_utm.zone,
  ll_to_utm.easting,
  ll_to_utm.northing
);

console.log(ll_to_utm);
console.log(utm_to_ll);
