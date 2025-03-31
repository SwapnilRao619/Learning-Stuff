const {Client, GatewayIntentBits}=require("discord.js")
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})
client.login('') //Logs in with bot.
client.on('messageCreate',(message)=>{
    if(message.author.bot) return;
    if(message.content == '!test') message.reply("Hi there!")
    if(message.content.startsWith("!create")){
        const url=message.content.split("!create")[1]
        return message.reply({
            content:"Generating short ID for"+url
        })
    }
    if(message.content.startsWith("!send")){
       const linkArray=['https://koncarne.bandcamp.com/track/hell-shot','https://koncarne.bandcamp.com/album/12-11-am','https://koncarne.bandcamp.com/album/floret','https://koncarne.bandcamp.com/album/contortions','https://koncarne.bandcamp.com/track/vibhranti-chaos','https://koncarne.bandcamp.com/album/brother-likes-phonk-vol-1','https://koncarne.bandcamp.com/album/ethereal-strains','https://koncarne.bandcamp.com/album/embryonic-energy-i','https://koncarne.bandcamp.com/track/gates-of-hades'] 
       const randomNumber = Math.floor(Math.random() * 9);
       return message.reply({
        content:linkArray[randomNumber]
       })
    }
})
client.on('interactionCreate',(interaction)=>{
    interaction.reply("Pong!")
})