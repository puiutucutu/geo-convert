import proj4 from "proj4";

/**
 * @param {Number} zone A utm zone.
 * @param {Number} easting A utm easting planar coordinate in meters
 * @param {Number} northing A utm northing planar coordinate in meters
 * @return {Array} An array of lon/lat pair where [0] -> lon and [1] -> lat
 */
function UTMtoLL(zone, easting, northing) {
  return proj4(
    `+proj=utm +units=m +zone=${zone} +no_defs`,
    "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
    [easting, northing]
  );
}

export { UTMtoLL };
