const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: 'Flumuffel\'s Profile',
        state: "Hier ist mein Profil",
        startTimestamp: new Date(),
        largeImageKey: "pfp",
        largeImageText: "Hallo! Cool das du vorbei schaust!"
    })

    console.log("Rich presence is now active");
})

rpc.login({
    clientId: "816602320921427978"
})