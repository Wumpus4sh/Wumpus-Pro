const Discord = require("discord.js")
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
   if(args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <your prefix>");

     let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

     prefixes[message.guild.id] = {
       prefixes: args[0]
     };

     fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
       if (err) console.log(err)
     });

     let sEmbed = new Discord.RichEmbed()
     .setTitle("Mission Completed!")
     .setDescription(`Prefix set to:${prefixes}`)
     
    

     message.channel.send(sEmbed);


};

module.exports.help = {
    name:"prefix"
}
