var axios = require("axios");
var Xray = require('x-ray');
var x = Xray();
var axios = require("axios");

const extract = require('extract-json-from-string');


var sha256 = require("sha256");

const liveuamap = [
    'syria',
    'ukraine',
    'isis',
    'mideast',
    'europe',
    'america',
    'asia',
    'world',
    'africa',
    'usa',
    "israelpalestine"
]
// all the liveuaap regions



//this method scrapes a specific region of the liveuamp website
//for example if you would like to retreive the recent posts from the 
//syria site then pass that here
//a promise will resolve and return an array on resolve of the 
//contents of all the recent posts
export function CrawlLiveMap(tag):any {

    return new Promise((resolve, reject) => {
       
        var url = "http://syria.liveuamap.com";

        for (var i = 0; i < liveuamap.length; i++) {
            var current = liveuamap[i];
            if (current == tag) {
                console.log("found match");
                url = "https://" + current + ".liveuamap.com";

            }
        }


        x(url, 'div.event', [{
                content: '',
                title: '.title',
                added: '.date_add',
                img: 'img@src',
                url: 'a@href',
                source : '@data-twitpic',
                postLink : "@data-link"


            }])
            .then(d => {
                const tots = d.length;
                var articles = [];
                d.forEach(element => {
                    var titleSha = sha256(element.title);
                    //console.log(element.title);
                    const added = element.added.includes(" day ") ? element.added.replace(" day ", " days ") : element.added;
                    articles.push({
                        uidSha256: titleSha,
                        title: element.title,
                        url: element.url,
                        imageUrl: element.img,
                        published: added,
                        source: element.source
                    })
                })


                resolve(articles);
            })
    })


}



/*
the results we get from the scrape liveuamap must be passed in to here if we want
to retreive the coordinates for the past
the promise returend will resolve and include the article array passed to
*/

export function getCord(url){
    x(url, '.marker-time' ,{link : "a"} ).then(data=>{
        console.log(data);
    })
}



export function grabCoordinations(articles) {
    return new Promise((resolve, reject) => {
        var promieses = [];
        var coodinates = [];
        for (var i = 0; i <= articles.length; i++) {
            console.log(i);
            console.log(articles.length);
            if (i == articles.length) {
                //end of the loop
                console.log(promieses);
                Promise.all(promieses).then(data => {
                    data.forEach(d => {
                        var data = d.data;
                        var latIndex = data.indexOf("curlat");
                        var lngIndex = data.indexOf("curlng");
                        var lat = data.substring(latIndex, 3).split("=").reverse()[0].trim();
                        var lng = data.substring(lngIndex, 3).split("=").reverse()[0].trim();
                        coodinates.push({
                            lat,
                            lng
                        })

                       
                    })

                    articles.forEach(ar => {
                        coodinates.forEach(cor => {
                            ar.coordinates = {
                                cor,
                                status: "parsed from raw code"
                            };

                        })
                    })
                    resolve(articles);

                })
                return;
            }


            var url = articles[i].url;
            var pro = axios.get(url);
            promieses.push(pro);




        }

    })

}


