import { CrawlLiveMap, grabCoordinations } from "./ScrapeNews";

export async function getLatestNews(limit?:Number){
  const data = await CrawlLiveMap("israelpalestine");
  if(limit >=1){
    let returnObj = [];
    data.map(item=>{
      if(returnObj.length < limit){
        returnObj.push(item);
      }
    })
    return returnObj.reverse();
  }
    return data.reverse();
}