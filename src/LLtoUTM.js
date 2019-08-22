import proj4 from "proj4";
import { determineUtmZoneNumber } from "./determineUtmZoneNumber";

/**
 * An object containing the easting and northing coordinates as well as the UTM
 * zone.
 *
 * @typedef {Object} UtmCoordinate
 * @property {Number} zone
 * @property {Number} easting
 * @property {Number} northing
 */

/**
 * @param {Number} longitude
 * @param {Number} latitude
 * @param {Boolean} inCentimeters
 * @return UtmCoordinate
 */
function LLtoUTM(longitude, latitude, inCentimeters = false) {
  const zone = determineUtmZoneNumber(longitude, latitude);

  const fromLongLat = `+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degree +no_defs`;
  const toUtm = `+proj=utm +units=m +zone=${zone} +no_defs`;
  const [x, y] = proj4(fromLongLat, toUtm, [longitude, latitude]);

  return inCentimeters
    ? { zone, easting: x * 100, northing: y * 100 }
    : { zone, easting: x, northing: y }
  ;
}

export { LLtoUTM };
