const { readdirSync } = require("fs");
const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("COMMAND", "LOAD STATUS");

module.exports = (client) => {
   const commandDirs = readdirSync("./commands/");

   commandDirs.forEach((dir) => {
      const commandFiles = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));

      commandFiles.forEach((file) => {
         const command = require(`../commands/${dir}/${file}`);

         if(command.name && command.execute) {
            client.commands.set(command.name, command);
            table.addRow(command.name + ".js", "✅");
         } else {
            table.addRow(command.name + ".js", "❎");
         }
      });
   });
   console.log(table.toString());
}