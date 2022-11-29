import { SlashCommandBuilder ,PermissionFlagsBits } from "discord.js";

// Alert commands
export const AlertsDayCommand = new SlashCommandBuilder()
.setName('alerts')
.setDescription('View alerts today');

export const AlertsWeekCommand = new SlashCommandBuilder()
.setName('alerts-week')
.setDescription('View alert in the past week');

export const AlertsMonthCommand = new SlashCommandBuilder()
.setName('alerts-month')
.setDescription('View all alerts in the past month');

// News commands
export const NewsCommand = new SlashCommandBuilder()
.setName('news')
.setDescription('Get the latest 10 articles on the Israel Palestine conflict');
export const NewsAllCommand = new SlashCommandBuilder()
.setName('news-all')
.setDescription('Get all the all the latest news on the Israel Pallestine conflict');







		