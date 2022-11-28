import axios from "axios";
import BotConfig from "../BotConfig";
import { CityArchive } from "../CityArchive";
import { AlertHistory } from "./Types";
export async function getAlertHistory(historyType:AlertHistory) {
   const res = await axios.get(BotConfig.alertsHistoryUrl + `?mode=${historyType}&lang=en` , {proxy : ((BotConfig.proxy.host!== "" && BotConfig.proxy.port) && {
    host: BotConfig.proxy.host,
    port: BotConfig.proxy.port,
  }) }).catch((err) => {
    return null;
   });
   if(res === null){
    return null;
   }
   let returnObject = [];
    const data = res.data;
   data.map((alert:any) => {
    const city = CityArchive.find((city:any) => city.name_en === alert.data);
    if(city){
        returnObject.push({alertInfo:alert , cityInfo:city})
    }
   });
   return returnObject;
}