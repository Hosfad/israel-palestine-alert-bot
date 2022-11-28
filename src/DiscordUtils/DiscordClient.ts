import { CommandListener } from "./CommandListener";


const { Client, GatewayIntentBits } = require('discord.js');

const DiscordClient = new Client({ intents: [GatewayIntentBits.Guilds ,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.MessageContent

] });

const allListeners =[
  CommandListener ,
]
allListeners.map(listener =>{
    DiscordClient.on(listener.name , (props) => listener.execute(props))

})

 export default DiscordClient