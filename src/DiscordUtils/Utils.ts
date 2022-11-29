import { ActivityType, REST, Routes } from "discord.js";
import BotConfig from "../../BotConfig";
import { AlertsDayCommand, AlertsMonthCommand, AlertsWeekCommand, NewsAllCommand, NewsCommand } from "./Commands";
import DiscordClient from "./DiscordClient";

export async function buildClient() {
    const rest = new REST({ version: '10' }).setToken(BotConfig.discordBotToken);
    const globalCommands = [
        AlertsDayCommand,
        AlertsWeekCommand,
        AlertsMonthCommand,
        NewsCommand,
        NewsAllCommand
    ]

    rest.put(Routes.applicationCommands(BotConfig.discordApplicationId),
      { body: globalCommands });
    await DiscordClient.login(BotConfig.discordBotToken);
    await DiscordClient.user.setPresence({
      activities: [{ name: `Israel-Palestine`, type: ActivityType.Watching }],
      status:`Israel-Palestine`,
    })
  
  }