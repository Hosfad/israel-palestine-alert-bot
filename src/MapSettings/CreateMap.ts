
import StaticMaps from "staticmaps"
import BotConfig from "../../BotConfig";

export async function createMap(alerts:any[]){
  const options = {
    width: 800,
    height: 1024,
    quality: 100,
  };
  const map = new StaticMaps(options);

  alerts.map(alert=>{
const markerImg = alert.alertInfo.category_desc === "Missiles" ? `src/Assets/Missile.png` : `src/Assets/Terror.png`

    const marker = {
      img: markerImg,
      width: 20,
      height: 20,
      coord:[alert.cityInfo.lng , alert.cityInfo.lat]
    };
  map.addMarker(marker);
  })

  await map.render([BotConfig.israel.center.lng , BotConfig.israel.center.lat],9);
  await map.image.save('Map.png');
}
