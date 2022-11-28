export default function CalculateDistance(lat1, lon1, lat2, lon2) 
{
  const R = 6371; // km
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c;
  return d;
}
function toRad(Value) 
{
    return Value * Math.PI / 180;
}