// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('4x minecraft:apple')
    event.player.give('4x minecraft:torch')
    event.player.give(Item.of('akashictome:tome', '{"akashictome:is_morphing":1b,"akashictome:data":{theoneprobe:{id:"theoneprobe:probenote",Count:1b},ftbquests:{id:"ftbquests:book",Count:1b},bloodmagic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bloodmagic:guide"}},cyclic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"cyclic:cyclic_guide_book"}},solcarrot:{id:"solcarrot:food_book",Count:1b},silentgear:{id:"silentgear:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Silent Gear Guide"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Silent Gear Guide"}]}\'}}}}}'))
  }
})