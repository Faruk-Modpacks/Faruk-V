
events.listen('recipes', function (event) {
    //Infuser
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', '#forge:ingots/steel', 'mekanism:redstone', 80)
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_reinforced', 'mekanism:alloy_infused', 'mekanism:diamond', 80)
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_atomic', 'mekanism:alloy_reinforced', 'mekanism:refined_obsidian', 80)
    event.recipes.mekanismMetallurgicInfusing('mekanism:basic_control_circuit', '#forge:ingots/osmium', 'mekanism:redstone', 80)    
    event.recipes.mekanismEnriching('4x emendatusenigmatica:obsidian_dust', 'minecraft:obsidian')
    //Combiner
    event.recipes.mekanismCombining('mekanism:advanced_control_circuit', 'mekanism:basic_control_circuit', '2x mekanism:alloy_infused')
    event.recipes.mekanismCombining('mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', '2x mekanism:alloy_reinforced')
    event.recipes.mekanismCombining('mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', '2x mekanism:alloy_atomic')

    //Altar
    event.recipes.bloodmagic.altar('bloodmagic:dungeon_eye', 'minecraft:polished_blackstone_bricks').upgradeLevel(4).altarSyphon(100000).consumptionRate(200).drainRate(200)

    //Shaped
    event.shaped(item.of('mekanism:energized_smelter'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:ingot_refined_glowstone',
        B: 'mekanism:basic_control_circuit',
        C: 'industrialforegoing:resourceful_furnace',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanism:combiner'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:ingot_refined_glowstone',
        C: 'bloodmagic:bloodstonebrick',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanism:osmium_compressor'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:basic_fluid_tank',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanism:metallurgic_infuser'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: '#forge:ingots/steel',
        B: 'thermal:machine_furnace',
        C: 'thermal:rf_coil',
        D: '#forge:storage_blocks/osmium'
      })
    event.shaped(item.of('mekanism:enrichment_chamber'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: '#forge:ingots/steel',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanism:crusher'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:basic_control_circuit',
        C: 'bloodmagic:reagentlava',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanismgenerators:advanced_solar_generator'), [
        'ACA',
        'ACA',
        'BDB'
      ], {
        A: 'mekanismgenerators:solar_generator',
        B: 'mekanism:ingot_refined_glowstone',
        C: 'mekanism:alloy_reinforced',
        D: Item.of('mekanism:basic_energy_cube').ignoreNBT(),
      })
    event.shaped(item.of('mekanism:robit'), [
        'FAF',
        'DCD',
        'BEB'
      ], {
        A: 'mekanism:network_reader',
        B: 'mekanism:ingot_refined_obsidian',
        C: 'mekanism:alloy_atomic',
        D: Item.of('mekanism:energy_tablet').ignoreNBT(),
        E: 'refinedstorage:16k_storage_part',
        F: 'extrastorage:neural_processor'
      })
    event.shaped(item.of('mekanism:digital_miner'), [
        'FAF',
        'CDC',
        'BEB'
      ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'mekanism:teleportation_core',
        C: 'mekanism:logistical_sorter',
        D: Item.of('mekanism:robit').ignoreNBT(),
        E: 'mekanism:steel_casing',
        F: 'mekanism:alloy_atomic'
      })
    event.shaped(item.of('mekanism:teleportation_core'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'rftoolsbase:infused_enderpearl',
        C: 'mekanism:ingot_refined_glowstone',
        B: 'mekanism:ultimate_control_circuit',
        D: 'rftoolsbase:infused_diamond'
      })
    event.shaped(item.of('mekanism:electrolytic_separator'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: '#forge:ingots/steel',
        B: 'mekanism:enriched_redstone',
        C: 'mekanism:alloy_reinforced',
        D: 'mekanism:electrolytic_core'
      })
    event.shaped(item.of('mekanism:thermal_evaporation_block'), [
        ' A ',
        'ABA',
        ' A '
      ], {
        A: '#forge:plates/steel',
        B: '#forge:plates/signalum'
      })
    event.shaped(item.of('mekanism:thermal_evaporation_controller'), [
        'BCB',
        'ADA',
        'AAA'
      ], {
        A: 'mekanism:thermal_evaporation_block',
        B: 'mekanism:elite_control_circuit',
        C: 'rftoolsutility:screen',
        D: 'mekanism:ultimate_fluid_tank'
      })
    event.shaped(item.of('mekanism:chemical_infuser'), [
        'ABA',
        'CDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mekanism:elite_chemical_tank',
        D: 'mekanism:steel_casing'
      })
    event.shaped(item.of('mekanism:chemical_oxidizer'), [
        'ABA',
        'EDC',
        'ABA'
      ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'mekanism:elite_chemical_tank',
        D: 'mekanism:dynamic_tank',
        E: 'mekanism:personal_chest'
      })
    event.shaped(item.of('mekanism:chemical_washer'), [
        'ABA',
        'CDC',
        'AEA'
      ], {
        A: 'mekanism:enriched_refined_obsidian',
        B: 'mekanism:ultimate_fluid_tank',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanism:steel_casing',
        E: 'mekanism:ultimate_chemical_tank'
      })
    event.shaped(item.of('2x mekanism:boiler_casing'), [
        ' A ',
        'ABA',
        ' A '
      ], {
        A: '#forge:plates/steel',
        B: '#forge:plates/aluminum'
      })
    event.shaped(item.of('2x mekanism:induction_casing'), [
        ' A ',
        'ABA',
        ' A '
      ], {
        A: '#forge:plates/steel',
        B: Item.of('mekanism:energy_tablet').ignoreNBT(),
      })
    event.shaped(item.of('mekanism:laser'), [
        'AB ',
        'ACD',
        'AB '
      ], {
        A: 'mekanism:alloy_reinforced',
        B: Item.of('mekanism:energy_tablet').ignoreNBT(),
        C: 'mekanism:steel_casing',
        D: 'rftoolsbase:infused_diamond'
      })
    event.shaped(item.of('mekanism:laser_amplifier'), [
        'AAA',
        'ABC',
        'AAA'
      ], {
        A: '#forge:plates/steel',
        B: Item.of('mekanism:ultimate_energy_cube').ignoreNBT(),
        C: 'rftoolsbase:infused_diamond'
      })
    event.shaped(item.of('mekanismgenerators:fusion_reactor_controller'), [
        'ABA',
        'DCD',
        'DDD'
      ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'rftoolsutility:screen',
        C: 'mekanism:ultimate_chemical_tank',
        D: 'mekanismgenerators:fusion_reactor_frame'
      })
    event.shaped(item.of('mekanism:solar_neutron_activator'), [
        'ABA',
        'CDC',
        'EEE'
      ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanismgenerators:advanced_solar_generator',
        E: 'kubejs:lithium_ingot'
      })
    event.shaped(item.of('mekanism:basic_fluid_tank'), [
        'ABA',
        'B B',
        'ABA'
      ], {
        A: 'mekanism:enriched_redstone',
        B: '#forge:plates/iron'
      })
      event.shaped(item.of('mekanismmatter:arc_furnace'), [
        'AEA',
        'BDB',
        'ACA'
      ], {
        A: 'mekanism:alloy_atomic',
        B: 'bloodmagic:dungeon_eye',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanism:ultimate_smelting_factory',
        E: 'mekanismmatter:universal_matter'
      })
})