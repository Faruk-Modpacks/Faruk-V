events.listen('recipes', function (event) {
    
    event.shaped(item.of('xnet:controller'), [
    'ABA',
    'FCF',
    'DED'
  ], {
    A: 'minecraft:repeater',
    B: 'minecraft:comparator',
    C: 'thermal:machine_frame',
    D: '#forge:ingots/steel',
    E: '#forge:ingots/electrum',
    F: 'immersiveengineering:wirecoil_redstone'
  })

  event.shaped(item.of('rftoolsbase:machine_frame'), [
    'ACA',
    'BDB',
    'ACA'
  ], {
    A: '#forge:ingots/steel',
    B: '#forge:ingots/gold',
    C: '#forge:dyes/blue',
    D: 'thermal:machine_frame'
  })

  event.shaped(item.of('rftoolsbase:machine_base'), [
    '   ',
    'AAA',
    'BBB'
  ], {
    A: '#forge:ingots/gold',
    B: 'occultism:otherstone'
  })

  event.shaped(item.of('rftoolsutility:matter_transmitter'), [
    'AAA',
    'BDB',
    'CCC'
  ], {
    A: 'rftoolsbase:infused_enderpearl',
    B: '#forge:dusts/redstone',
    C: '#forge:ingots/steel',
    D: 'rftoolsbase:machine_frame'
  })

  event.shaped(item.of('rftoolsutility:matter_receiver'), [
    'CCC',
    'BDB',
    'AAA'
  ], {
    A: 'rftoolsbase:infused_enderpearl',
    B: '#forge:dusts/redstone',
    C: '#forge:ingots/steel',
    D: 'rftoolsbase:machine_frame'
  })

  event.shaped(item.of('rftoolsutility:charged_porter'), [
    ' A ',
    'ABA',
    'CAC'
  ], {
    A: 'cyclic:ender_eye_reuse',
    B: 'rftoolsbase:machine_frame',
    C: 'rftoolsbase:infused_diamond'
  })

  event.shaped(item.of('rftoolsutility:advanced_charged_porter'), [
    'CAC',
    'ABA',
    'CAC'
  ], {
    A: 'rftoolsbase:infused_diamond',
    B: 'rftoolsutility:charged_porter',
    C: 'mekanism:alloy_atomic'
  })

  event.shaped(item.of('rftoolsbuilder:builder'), [
    'ADA',
    'BCB',
    'ABA'
  ], {
    A: '#forge:storage_blocks/steel',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:digital_miner',
    D: 'mekanism:alloy_atomic'
  })

  event.shaped(item.of('rftoolsbuilder:shape_card_pump'), [
    'ADA',
    'BCB',
    'ADA'
  ], {
    A: '#forge:plates/steel',
    B: 'rftoolsutility:tank',
    C: 'rftoolsbuilder:shape_card_def',
    D: 'mekanism:electric_pump'
  })

  event.shaped(item.of('rftoolsbuilder:shape_card_quarry'), [
    'AEA',
    'BCB',
    'ADA'
  ], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'rftoolsbuilder:shape_card_def',
    D: Item.of('mekanism:atomic_disassembler').ignoreNBT(),
    E: 'mekanism:teleportation_core'
  })

  event.shaped(item.of('rftoolsbuilder:shape_card_quarry_fortune'), [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'rftoolsbase:infused_diamond',
    B: 'mekanism:ultimate_control_circuit',
    C: 'rftoolsbuilder:shape_card_quarry'
  })

  event.shaped(item.of('rftoolspower:power_core1'), [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'rftoolsbase:dimensionalshard',
    B: 'industrialforegoing:plastic',
    C: 'eidolon:pewter_ingot'
  })

  event.shaped(item.of('rftoolspower:power_core2'), [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'rftoolsbase:infused_diamond',
    B: 'rftoolsbase:dimensionalshard',
    C: 'eidolon:pewter_block'
  })

  event.shaped(item.of('rftoolspower:power_core3'), [
    'ACA',
    'BDB',
    'ACA'
  ], {
    A: 'rftoolsbase:infused_diamond',
    B: 'minecraft:emerald',
    C: 'rftoolsbase:infused_enderpearl',
    D: 'occultism:iesnium_block'
  })
})