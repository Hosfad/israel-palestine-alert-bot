import express from "express"
import { buildClient } from "./DiscordUtils/Utils";
import BotConfig from "../BotConfig";
const app = express();
app.use(express.json());
app.set("json spaces", 2);

if (!BotConfig.discordBotToken){
  throw new Error("Discord Bot Token is not defined");
}
if (!BotConfig.discordApplicationId){
  throw new Error("Discord Application Id is not defined");
}
buildClient()

app.listen(8000,()=>{
  console.log("Server is running on port 8000")
});
export{};

