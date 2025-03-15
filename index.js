require('dotenv').config();
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
     client.user.setActivity(` We Are Falcon`, {
    type: "PLAYING"
  }); // حاله البوت

client.on('guildMemberAdd', async (member) => {
    try {
        await member.send(`Hey ${member.user.username} ! Welcome to Falcon Discord server! Please read through the https://discord.com/channels/985679788020748328/1233215516273934440 before using the server, Enjoy your stay! 
اهلاََ ${member.user.username}  ! مرحبا بك في سيرفر الدسكورد الرسمي الخاص بفالكون, يرجى قراءة جميع القوانين https://discord.com/channels/985679788020748328/1233215516273934440 قبل استخدام السيرفر, استمتع.`);
        console.log(`تم إرسال رسالة ترحيب لـ ${member.user.tag}`);
    } catch (error) {
        console.error(`تعذر إرسال الرسالة لـ ${member.user.tag}:`, error);
    }
});

app.get('/', (req, res) => {
    res.send('البوت يعمل!');
});

app.listen(PORT, () => console.log(`السيرفر شغال على المنفذ ${PORT}`));

client.login(process.env.TOKEN);
