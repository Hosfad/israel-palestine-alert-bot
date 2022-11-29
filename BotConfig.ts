const BotConfig = {

    // Discord bot token (Required)

    discordBotToken : "", 

    // Discord application id (Required for registering slash commands)

    discordApplicationId : "", 

    
    alertsUrl: "https://www.oref.org.il/WarningMessages/alert/alerts.json",

    // URLs to Pikud Haoref's official history API
    alertsHistoryUrl: "https://www.oref.org.il/Shared/Ajax/GetAlarmsHistory.aspx",

    israel: {
        // Center of Israel coordinates
        center: {
            lat: 31.765352,
            lng: 34.988067
        },
        // This radius (in KM) should cover Israel from the center point to all borders
        radius: 400
    },
    // Proxy  (Required if you are located outside Israel)  
    proxy:{
        host: "83.229.72.174",
        port: 80,
    }
};
export default BotConfig;