const { readdirSync } = require("fs");

module.exports = (client) => {
   const eventDirs = readdirSync("./events/");

   eventDirs.forEach((dir) => {
      const eventFiles = readdirSync(`./events/${dir}/`).filter((file) => file.endsWith(".js"));

      eventFiles.forEach((file) => {
         const event = require(`../events/${dir}/${file}`);
         client.events.set(event.name, event);
      });
   });
}