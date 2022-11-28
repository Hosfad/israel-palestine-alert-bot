import { CrawlLiveMap, grabCoordinations } from "./ScrapeNews";

export async function getLatestNews(){
  const data = await CrawlLiveMap("israelpalestine");
    return data.reverse();
}