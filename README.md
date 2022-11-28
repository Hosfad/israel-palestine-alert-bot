# Israel Palestine conflict alerts bot for discord

Uses the Israeli national emergency API to get the latest alerts

Features 

`Get latest national emergency alerts`

`Get latest israel palestine conflict news`

`Setup an alert channel to alert you every time there is a new emergency (Soon™)`

Starting up 
```
// Clone this repository 
cd israel-palestine-alert-bot

// Install with yarn
yarn

```
Setup (Required)

```javascript
// Add discord bot token and application id to BotConfig.ts
// An Israeli proxy is required if you are located outside israel.

const BotConfig = {

    // Discord bot token (Required)
    discordBotToken : "",

    // Discord application client ID (For registering slash commands) (Required)
    discordClientID : "",

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
        host: "",
        port: "",
    }
};

```
Start the bot


```
// Run with 
yarn dev

```
# And youre ready to go , You can check out the commands below 
`/alerts` : `Shows alerts today`

`/alerts-week` : `Shows alerts in the past week`

`/alerts-month` : `Shows alerts in the past month`

<img src="https://github.com/Hosfad/israel-palestine-alert-bot/blob/master/Readme_Images/Command.png?raw=true">

`/news` : `Shows latest israel-palestine news`

<img src="https://github.com/Hosfad/israel-palestine-alert-bot/blob/master/Readme_Images/News.png?raw=true">

Coming soon 
```
1- Setting up an Alert channel for current alerts
2- Add support for multiple languages (Hebrew,Arabic)
3- Maybe implement the palestinian emergency API if there is such a thing?
```