var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Hier sind ein paar links von mir...",
assets : {
large_image : "pfp",
large_text : "Hallo. Schön dich zu sehen!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Meine Anime Seite" , url : "https://anime.flummy.tk"}]
}
})
})
client.login({ clientId : "816602320921427978" }).catch(console.error);