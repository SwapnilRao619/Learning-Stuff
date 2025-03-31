const {REST, Routes}=require("discord.js")
const rest = new REST({version:'10'}).setToken('')
const commands=[
    {
        name:"ping",
        description:"Replies with Pong!"
    },
];
(async ()=>{
    try {
        await rest.put(Routes.applicationCommands('1289612055162126449'), { body: commands });
      } catch (error) {
          console.error(error);
      }
})()