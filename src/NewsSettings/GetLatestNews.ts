
const LIVEUAMAP= require("liveuamp_scraper_pro");
const LIVEUAMAP_SCRAPE= LIVEUAMAP.crawlLiveMap;
export async function getLatestNews(){
  const data =  await LIVEUAMAP_SCRAPE("israelpalestine");
    return data.reverse();
}