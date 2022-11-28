const BotConfig = {

    // Discord bot token (Required)
    discordBotToken : "MTA0NDUzNDEyMjI4ODI2NzMwNA.GRRRhm.U5U4PdCYxws2Y_AtPAM8SuiOYmAQqQfjqoOa9A",

    // Discord application client ID (For registering slash commands) (Required)
    discordApplicationId : "1044534122288267304",

    // URL to Pikud Haoref's official rocket alert API
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