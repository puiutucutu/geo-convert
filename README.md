# geo-convert

Functions to convert from geographic coordinates (latitude and latitude) to UTM coordinates and vice verse.

Conversion between coordinates is performed using the `proj4` library available at https://github.com/proj4js/proj4js.

## Usage

File in `./dist/geo-convert.js` accessible by namespace `geoConvert` in browser or ES5 environments.

```text
git clone <...>
npm i
npm run build
```

## Example

### ES5 Environment

```js
const geoConvert = require("geo-convert.js");

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
```

### ES6 Environment

```js
import { LLtoUTM, UTMtoLL } from "geo-convert";

const coords = {
  latitude: 39.75621,
  longitude: -104.99404
};

const ll_to_utm = LLtoUTM(coords.longitude, coords.latitude);

const utm_to_ll = UTMtoLL(
  ll_to_utm.zone,
  ll_to_utm.easting,
  ll_to_utm.northing
);

console.log(ll_to_utm);
console.log(utm_to_ll);
```

## Functions

* `determineUtmZoneNumber(longitude, latitude)`
* `LLtoUTM(longitude, latitude, inCentimeters = false)`
* `UTMtoLL(zone, easting, northing)`
  * `easting` and `northing` must be in meters

## References

* proj4js
  * Used for converting between lon/lat to utm (and vice versa)
  * <https://github.com/proj4js/proj4js>
* mgrs
  * Some util code is extracted from here
  * https://github.com/proj4js/mgrs
* Openmap
  * Original code that mgrs uses
  * <http://openmap-java.org/api/com/bbn/openmap/proj/coords/package-summary.html>
* GeographicLib
  * https://geographiclib.sourceforge.io/
* Wikipedia
  * https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system
  * https://en.wikipedia.org/wiki/Easting_and_northing
