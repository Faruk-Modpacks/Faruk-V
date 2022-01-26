
events.listen('recipes', function (event) {

      //Trinkets
event.shaped(item.of('ftbultimine:ultiminer'), [
        'ABC',
        'EDE',
        'SSS'
      ], {
        A: Item.of('minecraft:iron_pickaxe').ignoreNBT(),
        B: Item.of('minecraft:golden_pickaxe').ignoreNBT(),
        C: Item.of('minecraft:diamond_pickaxe').ignoreNBT(),
        D: 'create:precision_mechanism',
        E: 'create:cogwheel',
        S: 'create:polished_rose_quartz'
      })

      //Krate
event.shaped(item.of('krate:krate_small'), [
        'BBB',
        'A A',
        'BBB'
      ], {
        A: '#minecraft:logs',
        B: '#minecraft:slabs'
      })

event.shaped(item.of('krate:basic_to_big'), [
        'ADA',
        'B B',
        'ACA'
      ], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:logs',
        C: 'krate:empty_upgrade',
        D: 'krate:krate_basic'
      })

      
      //Cyclic
event.shaped(item.of('cyclic:apple_chocolate'), [
        'AAA',
        'CBC',
        'DDD'
      ], {
        A: 'minecraft:milk_bucket',
        B: 'minecraft:golden_apple',
        C: 'create:bar_of_chocolate',
        D: 'cyclic:experience_food'
      })

event.shaped(item.of('cyclic:ender_eye_reuse'), [
        'ABA',
        'ACA',
        'AAA'
      ], {
        A: 'minecraft:ender_eye',
        B: 'minecraft:diamond',
        C: 'minecraft:ender_chest'
      })

      //WirelessChargers
event.shaped(item.of('wirelesschargers:basic_wireless_player_charger'), [
        'EAE',
        'BCB',
        'DFD'
      ], {
        A: 'minecraft:gold_block',
        B: 'minecraft:ender_eye',
        C: 'createaddition:tesla_coil',
        D: 'minecraft:iron_block',
        E: 'createaddition:capacitor',
        F: 'immersiveengineering:capacitor_lv'

      })
event.shaped(item.of('wirelesschargers:advanced_wireless_player_charger'), [
        ' B ',
        ' D ',
        'AZA'
      ], {
        A: 'minecraft:gold_block',
        B: 'cyclic:ender_eye_reuse',
        D: 'immersiveengineering:coil_mv',
        Z: 'wirelesschargers:basic_wireless_player_charger'
      })

      //KubeJS
event.recipes.mekanismSmelting('kubejs:lithium_ingot', '#forge:dusts/lithium')
event.recipes.mekanismEnriching('kubejs:trinium_plate', 'mekanismmatter:trinium_ingot')
event.shaped(item.of('4x kubejs:compress_component'), [
        'AEA',
        'CDB',
        'AEA'
      ], {
        A: 'mekanismmatter:universal_matter',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:pellet_plutonium',
        D: 'mekanism:pellet_antimatter',
        E: 'rftoolsbase:dimensionalshard'
      })
event.shaped(item.of('4x kubejs:dimensional_core'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: 'mekanismmatter:universal_matter',
        B: 'kubejs:compress_component',
        C: 'mekanism:teleportation_core'
      })  
event.shapeless(item.of('kubejs:blood_stained_pane', 6), ['kubejs:blood_stained_glass'])

      //Occultism
event.shaped(item.of('occultism:lenses'), [
        'A A',
        'ABA',
        'A A'
      ], {
        A: 'kubejs:blood_stained_pane',
        B: 'occultism:spirit_attuned_gem'
      }) 

      //Mining Helmet
event.shaped(item.of('mining_helmet:mining_helmet'), [
        ' B ',
        'AAA',
        'A A'
      ], {
        A: '#forge:ingots',
        B: 'minecraft:lantern'
      }) 

      //Wands
      event.shaped(item.of('wands:stone_wand'), [
        '  A',
        ' B ',
        'B  '
      ], {
        A: '#forge:cobblestone',
        B: '#forge:rods/wooden'
      })

      //General
      event.shaped(item.of('tombstone:book_of_disenchantment'), [
        'ACA',
        'CBC',
        'ACA'
      ], {
        A: 'tombstone:grave_dust',
        B: 'minecraft:book',
        C: 'occultism:spirit_attuned_gem'
      })
      
      //EmendatusEnigmatica  
event.shapeless(item.of('emendatusenigmatica:lead_nugget', 9), ['#forge:ingots/lead'])
event.shapeless(item.of('emendatusenigmatica:lead_ingot'), ['9x #forge:nuggets/lead'])
event.shapeless(item.of('emendatusenigmatica:lead_ingot', 9), ['#forge:storage_blocks/lead'])
event.shapeless(item.of('emendatusenigmatica:lead_block'), ['9x #forge:ingots/lead'])

event.shapeless(item.of('emendatusenigmatica:bronze_ingot'), ['9x #forge:nuggets/bronze'])
event.shapeless(item.of('emendatusenigmatica:bronze_block'), ['9x #forge:ingots/bronze'])

event.shapeless(item.of('emendatusenigmatica:copper_ingot'), ['9x #forge:nuggets/copper'])
event.shapeless(item.of('emendatusenigmatica:copper_nugget', 9), ['#forge:ingots/copper'])
event.shapeless(item.of('emendatusenigmatica:copper_block'), ['9x #forge:ingots/copper'])
event.shapeless(item.of('emendatusenigmatica:copper_ingot', 9), ['#forge:storage_blocks/copper'])

event.shapeless(item.of('emendatusenigmatica:silver_ingot'), ['9x #forge:nuggets/silver'])
event.shapeless(item.of('emendatusenigmatica:silver_nugget', 9), ['#forge:ingots/silver'])
event.shapeless(item.of('emendatusenigmatica:silver_block'), ['9x #forge:ingots/silver'])
event.shapeless(item.of('emendatusenigmatica:silver_ingot', 9), ['#forge:storage_blocks/silver'])

event.shapeless(item.of('emendatusenigmatica:tin_ingot'), ['9x #forge:nuggets/tin'])
event.shapeless(item.of('emendatusenigmatica:tin_ingot', 9), ['#forge:storage_blocks/tin'])

event.shapeless(item.of('emendatusenigmatica:steel_ingot'), ['9x #forge:nuggets/steel'])

event.shapeless(item.of('emendatusenigmatica:uranium_ingot', 9), ['#forge:storage_blocks/uranium'])

event.shapeless(item.of('emendatusenigmatica:steel_ingot'), ['9x #forge:nuggets/steel'])
event.shapeless(item.of('emendatusenigmatica:steel_nugget', 9), ['#forge:ingots/steel'])
event.shapeless(item.of('emendatusenigmatica:steel_block'), ['9x #forge:ingots/steel'])
event.shapeless(item.of('emendatusenigmatica:steel_ingot', 9), ['#forge:storage_blocks/steel'])

event.recipes.createCrushing([
  '2x minecraft:quartz',
  Item.of('emendatusenigmatica:sulfur_dust').withChance(0.25)
], 'emendatusenigmatica:quartz_chunk')

event.recipes.createMilling(['2x minecraft:quartz'], 'emendatusenigmatica:quartz_chunk')
})