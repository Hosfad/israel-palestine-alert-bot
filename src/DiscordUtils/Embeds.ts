import { ColorResolvable, EmbedBuilder } from "discord.js";
import e from "express";

export function getAlertsEmbed(alerts:any[] , img?:any){
    let color:any = alerts.length >=1 ? "#FF0000" : "#00FF00";
    let alertInfo = "";
    alerts.map(alert =>{
        const emoji = alert.alertInfo.category_desc === "Missiles" ? " 🚀" : " 🚨";
        alertInfo += "City ``" + alert.cityInfo.name_en + "`` ``(" + alert.cityInfo.name + ")``\n";
        alertInfo += "Area ``" + alert.cityInfo.zone_en + "``\n";
        alertInfo += "Attack type ``" + alert.alertInfo.category_desc + emoji + "``\n";
        alertInfo += "Date ``" + alert.alertInfo.date + "`` at ``" + alert.alertInfo.time + "``\n\n";
    });
    if(alerts.length === 0){
        alertInfo = "Thankfully there are no alerts.";
    }
    const AlertsEmbed = new EmbedBuilder()
    .setAuthor({name:"Total alerts found : " + alerts.length , iconURL:"https://i.imgur.com/T30y2C5.jpg"})
    .setColor(color)
    .setThumbnail("https://i.imgur.com/T30y2C5.jpg")
    .setDescription(alertInfo)
	.setTimestamp()
	.setFooter({ text: 'Israel Palestine conflict bot' , iconURL:"https://i.imgur.com/T30y2C5.jpg"});
    if(img){
        AlertsEmbed .setImage("attachment://Map.png");
    }
    return AlertsEmbed
}

export function getNewsEmbed(news:any){
    const NewsEmbed = new EmbedBuilder()
    .setAuthor({name:news.published , iconURL:"https://i.imgur.com/T30y2C5.jpg"})
    .setColor("Green")
    .setThumbnail("https://i.imgur.com/T30y2C5.jpg")
    .setDescription(news.title)
	.setTimestamp()
	.setFooter({ text: 'Israel Palestine conflict bot' , iconURL:"https://i.imgur.com/T30y2C5.jpg"});
    if (news.imageUrl){
        NewsEmbed.setImage(news.imageUrl);
    }
    return NewsEmbed
}