const EARTH_RADIUS = 6372795;

export const getDistance = (geoLat1: number, geoLon1: number, geoLat2: number, geoLon2: number): number => {
    const lat1 = (geoLat1 * Math.PI) / 180;
    const lat2 = (geoLat2 * Math.PI) / 180;
    const lon1 = (geoLon1 * Math.PI) / 180;
    const lon2 = (geoLon2 * Math.PI) / 180;
  
    const cosLat1 = Math.cos(lat1);
    const cosLat2 = Math.cos(lat2);
    const sinLat1 = Math.sin(lat1);
    const sinLat2 = Math.sin(lat2);
    const deltaLon = lon2 - lon1;
    const cosDeltaLon = Math.cos(deltaLon);
    const sinDeltaLon = Math.sin(deltaLon);
  
    const y = Math.sqrt(
      Math.pow(cosLat2 * sinDeltaLon, 2) +
      Math.pow(cosLat1 * sinLat2 - sinLat1 * cosLat2 * cosDeltaLon, 2)
    );
    const x = sinLat1 * sinLat2 + cosLat1 * cosLat2 * cosDeltaLon;
  
    const angularDistance = Math.atan2(y, x);
  
    const distance = angularDistance * EARTH_RADIUS;
  
    return Math.round(distance / 1000);
}