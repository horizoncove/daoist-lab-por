import { isPointWithinRadius } from 'geolib';

/**
 * 校验当前坐标是否在道观围栏范围内
 * @param currentLat 当前纬度
 * @param currentLon 当前经度
 * @param centerLat 道观中心纬度
 * @param centerLon 道观中心经度
 * @param radius 允许误差半径 (米)
 * @returns boolean
 */
export function checkGeofence(
  currentLat: number,
  currentLon: number,
  centerLat: number,
  centerLon: number,
  radius: number = 200
): boolean {
  const isWithin = isPointWithinRadius(
    { latitude: currentLat, longitude: currentLon },
    { latitude: centerLat, longitude: centerLon },
    radius
  );
  
  console.log(`[Geofence] Checking: (${currentLat}, ${currentLon}) vs Center (${centerLat}, ${centerLon}) R:${radius} -> Result: ${isWithin}`);
  
  return isWithin;
}
