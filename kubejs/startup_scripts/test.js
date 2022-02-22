events.listen("player.logged_in", function (event) {
    event.player.sendMessage("Hello World!");
    event.player.sendMessage(text.of("MOTD Test!").color(RED));
});