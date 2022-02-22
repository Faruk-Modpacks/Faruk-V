events.listen('ui.main_menu', event => {
    event.replace(ui => {
      ui.panorama("faruk:textures/mainmenu/background/panorama");
      ui.widgetTexture = "faruk:textures/mainmenu/widgets.png";
      
      if (Platform.mods.minetogether) {
        //MineTogether
        ui.button((b) => {
            b.name = 'Minetogether Friends'
            b.width = 70
            b.x = ui.width - b.width - 5
            b.y = 5
            b.action = "minetogether:friends_list"
            b.shadow = false
        })

        ui.imageButton((b) => {
            b.name = 'Minetogether Chat'
            b.width = 20
            b.x = ui.width - b.width - 77
            b.y = 5
            b.action = "minetogether:chat"
        })
    }

      //Single
      ui.button(b => {
        b.name = text.translate("menu.singleplayer")
        b.width = 208
        b.x = ui.width / 2 - 104
        b.y = ui.height / 2 - 52
        b.action = 'minecraft:singleplayer'
      })
      
      //Multi
      ui.button(b => {
        b.name = text.translate("menu.multiplayer")
        b.width = 208
        b.x = ui.width / 2 - 104
        b.y = ui.height / 2 - 30
        b.action = 'minecraft:multiplayer'
      })

      //Options
      ui.button(b => {
        b.name = text.translate("menu.options")
        b.width = 100
        b.x = ui.width / 2 - 104
        b.y = ui.height / 2 - 8
        b.action = 'minecraft:options'
      })

      //Mods
      ui.button(b => {
        b.name = text.translate("fml.menu.mods")
        b.width = 100
        b.x = ui.width / 2 + 4
        b.y = ui.height / 2 - 8
        b.action = 'forge:mod_list'
      })

      //Discord
      ui.button(b => {
        b.name = 'Discord'
        b.width = 100
        b.x = ui.width / 2 - 104
        b.y = ui.height / 2 + 14
        b.action = 'https://discord.gg/FPWWvZ7P8r'
      })

      //Quit
      ui.button(b => {
        b.name = text.translate("menu.quit")
        b.width = 100
        b.x = ui.width / 2 + 4
        b.y = ui.height / 2 + 14
        b.action = 'minecraft:quit'
      })

      //Azelza Logo
      ui.image((i) => {
        i.width = 448 / 5
        i.height = 448 / 5
        i.y = ui.height - i.height
        i.action = 'https://twitch.tv/azelzagaming'
        i.texture = 'faruk:textures/mainmenu/logo.png'
      })

      //Pack Logo
      ui.image((i) => {
        i.width = 435 / 2
        i.height = 435 / 2
        i.x = ui.width / 2 - i.width / 2
        i.y = ui.height / 2 - i.height / 2 - 100
        i.texture = "faruk:textures/mainmenu/packlogo.png"
      })

      //Forge
      ui.label((l) => {
        l.height = 10
        l.name = "Forge Version: " + Platform.mods.forge.version
        l.x = ui.width - l.width - 2
        l.y = ui.height - 30
      })

      //Mods loaded
      ui.label((l) => {
        l.height = 10
        l.name = Platform.mods.size() + " Mods Loaded"
        l.x = ui.width - l.width - 2
        l.y = ui.height - 20
      })

      //Copyright
      ui.label((l) => {
        l.height = 10
        l.name = "Copyright Mojang AB. Do not distribute!"
        l.x = ui.width - l.width - 2
        l.y = ui.height - 10
      })
    })
  })