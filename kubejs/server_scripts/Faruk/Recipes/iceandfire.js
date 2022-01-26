events.listen('recipes', function (event) {
    event.shaped(item.of('dragonseeker:dragonseeker'), [
        ' A ',
        ' B ',
        ' B '
      ], {
        A: '#iceandfire:dragon_skulls',
        B: 'iceandfire:dragonbone',
      })
    event.shaped(item.of('dragonseeker:legendary_dragonseeker'), [
        ' A ',
        ' B ',
        ' B '
      ], {
        A: Item.of('dragonseeker:epic_dragonseeker').ignoreNBT(),
        B: Item.of('mekanismmatter:trinium_rod').ignoreNBT()
      })
    event.shaped(item.of('dragonseeker:godly_dragonseeker'), [
        ' A ',
        ' B ',
        ' B '
      ], {
        A: Item.of('dragonseeker:legendary_dragonseeker').ignoreNBT(),
        B: '#faruk:dragonsteel'
      })
    event.shapeless('iceandfire:summoning_crystal_ice', ['iceandfire:ice_dragon_blood', 'minecraft:ender_pearl', 'minecraft:diamond', 'minecraft:lapis_lazuli'])
    event.shapeless('iceandfire:summoning_crystal_lightning', ['iceandfire:lightning_dragon_blood', 'minecraft:ender_pearl', 'minecraft:diamond', 'emendatusenigmatica:potassium_nitrate_gem'])
    })