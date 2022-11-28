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

// News command
export const NewsCommand = new SlashCommandBuilder()
.setName('news')
.setDescription('Get some Israel Palestine conflict news');







		