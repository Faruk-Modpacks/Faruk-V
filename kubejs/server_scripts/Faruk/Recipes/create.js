events.listen('recipes', function (event) {
    //Create
event.recipes.createMixing('2x create:rose_quartz', [
    '#forge:dusts/redstone',
    '#forge:dusts/redstone',
    '#forge:dusts/redstone',
    '#forge:dusts/redstone', 
    '#forge:dusts/redstone',
    '#forge:dusts/redstone',
    '#forge:dusts/redstone',
    '#forge:dusts/redstone',
    'minecraft:quartz'
  ])

  event.recipes.createMixing('2x create:chromatic_compound', [
    'minecraft:glowstone_dust',
    'minecraft:glowstone_dust',
    'minecraft:glowstone_dust',
    'minecraft:glowstone_dust',
    '#forge:dusts/obsidian',
    '#forge:dusts/obsidian',
    '#forge:dusts/obsidian',
    '#forge:dusts/obsidian',
    'create:polished_rose_quartz',
  ]).superheated()

  event.shaped(item.of('create:mechanical_press'), [
    ' A ',
    'CBC',
    ' D '
  ], {
    A: 'create:andesite_alloy',
    B: 'create:andesite_casing',
    C: 'create:cogwheel',
    D: '#forge:ingots/iron'
  })

  event.shaped(item.of('create:millstone'), [
    'AEA',
    'CBC',
    'DDD'
  ], {
    A: 'create:cogwheel',
    B: 'create:andesite_casing',
    C: 'create:andesite_alloy',
    D: '#forge:stone',
    E: 'create:large_cogwheel'
  })

  event.recipes.createMechanicalCrafting('create_stuff_additions:andesite_encased_jet_chestplate', [
    'AAEAA',
    'ADIDA',
    'BCFCB',
    'ADGDA',
    'AAHAA'
  ], {
    A: '#forge:plates/iron',
    B: 'create:precision_mechanism',
    C: 'create:cogwheel',
    D: 'create:andesite_alloy',
    E: 'create:minecart_coupling',
    F: 'minecraft:leather_chestplate',
    G: 'createaddition:capacitor',
    H: 'create:encased_fan',
    I: 'createaddition:overcharged_alloy'
  })

  event.recipes.createMechanicalCrafting('create_stuff_additions:encased_jet_chestplate', [
    'AABAA',
    'ADDDA',
    'ACFCA',
    'AHHHA',
    'AGGGA'
  ], {
    A: '#forge:plates/brass',
    B: 'create:precision_mechanism',
    C: 'create:refined_radiance',
    D: 'createaddition:gold_wire',
    F: Item.of('create_stuff_additions:andesite_encased_jet_chestplate').ignoreNBT(),
    G: 'createaddition:capacitor',
    H: 'createaddition:overcharged_casing'
  })

  event.recipes.createPressing([
    'emendatusenigmatica:gold_plate'
  ], '#forge:ingots/gold')

  event.recipes.createCrushing([
    'emendatusenigmatica:obsidian_dust',
    Item.of('emendatusenigmatica:obsidian_dust').withChance(0.25)
  ], 'minecraft:obsidian')

  event.recipes.createCrushing([
    'minecraft:netherite_scrap',
    Item.of('minecraft:netherite_scrap').withChance(0.25)
  ], 'minecraft:ancient_debris')

  event.recipes.createMechanicalCrafting('create_stuff_additions:brass_moped_item', [
    'ADD',
    'CBC',
    'EFE',
    'GGG'
  ], {
    A: '#forge:plates/brass',
    B: 'create:precision_mechanism',
    C: 'create:brass_casing',
    D: '#create:seats',
    E: 'create:shaft',
    F: 'create:furnace_engine',
    G: 'create:belt_connector'
  })

  event.shaped(item.of('create_stuff_additions:refined_radiance_neon'), [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'create:refined_radiance'
  })

  event.shaped(item.of('create_stuff_additions:tuned_brass_moped_item'), [
    'DCD',
    'ABA',
    'DCD'
  ], {
    A: 'create:refined_radiance',
    B: 'create_stuff_additions:brass_moped_item',
    C: 'minecraft:netherite_ingot',
    D: 'minecraft:blaze_powder'
  })
})
