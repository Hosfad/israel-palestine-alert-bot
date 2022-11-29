import axios from "axios";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } from "discord.js";
import e from "express";
import { getAlertHistory } from "../AlertSettings";
import { createMap } from "../MapSettings/CreateMap";
import { getLatestNews } from "../NewsSettings/GetLatestNews";
import { AlertHistory } from "../Types";
import { getAlertsEmbed, getNewsEmbed } from "./Embeds";


export const CommandListener:any = {
	name: Events.InteractionCreate,
	on: true,
	async execute (props:any) {
        
     // Alerts today command 
     if(props.isCommand() && props.commandName === "alerts"){
        await props.reply({content:"Fetching latest alerts..."})
         const alerts = await getAlertHistory(AlertHistory.AlertsToday);
         if (alerts.length >= 1){
            await createMap(alerts);
            props.editReply({embeds:[await getAlertsEmbed(alerts ,true)] , files:[{
               attachment: `./Map.png`,
               name: 'Map.png'
           }]});
         }else{
            props.editReply({embeds:[await getAlertsEmbed(alerts)]});
         }
     }
             
     // Alerts this week command 
     if(props.isCommand() && props.commandName === "alerts-week"){
        await props.reply({content:"Fetching latest alerts..."})
         const alerts = await getAlertHistory(AlertHistory.AlertsWeek);
         if (alerts.length >= 1){
            await createMap(alerts);
            props.editReply({embeds:[await getAlertsEmbed(alerts ,true)] , files:[{
               attachment: `./Map.png`,
               name: 'Map.png'
           }]});
         }else{
            props.editReply({embeds:[await getAlertsEmbed(alerts)]});
         }
     }
             
     // Alerts this month command 
     if(props.isCommand() && props.commandName === "alerts-month"){
        await props.reply({content:"Fetching latest alerts..."})
         const alerts = await getAlertHistory(AlertHistory.AlertsMonth);
         if (alerts.length >= 1){
            await createMap(alerts);
            props.editReply({embeds:[await getAlertsEmbed(alerts ,true)] , files:[{
               attachment: `./Map.png`,
               name: 'Map.png'
           }]});
         }else{
            props.editReply({embeds:[await getAlertsEmbed(alerts)]});
         }
         
     }
     // News command
     if(props.isCommand() && props.commandName === "news"){
        const news = await getLatestNews(10);
        props.reply("Fetching latest 10 news articles...");
        news.map(async a => {
         const row = new ActionRowBuilder();
         if(a.source){
            row.addComponents(
               new ButtonBuilder()
                  .setURL(a.source)
                  .setLabel('News source')
                  .setStyle(ButtonStyle.Link),
               
            );
            props.channel.send({embeds:[await getNewsEmbed(a)] , components:[row]});

         }else{
            props.channel.send({embeds:[await getNewsEmbed(a)] });
         }

        })
         return
     }
     

          // News command
          if(props.isCommand() && props.commandName === "news-all"){
            const news = await getLatestNews();
            props.reply("Fetching all news articles...");
            news.map(async a => {
             const row = new ActionRowBuilder();
             if(a.source){
                row.addComponents(
                   new ButtonBuilder()
                      .setURL(a.source)
                      .setLabel('News source')
                      .setStyle(ButtonStyle.Link),
                   
                );
                props.channel.send({embeds:[await getNewsEmbed(a)] , components:[row]});
    
             }else{
                props.channel.send({embeds:[await getNewsEmbed(a)] });
             }
    
            })
             return
         }

	},
};