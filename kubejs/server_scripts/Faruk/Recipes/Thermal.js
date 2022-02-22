events.listen('recipes', function (event) {
        //Thermal Expansion
        event.shapeless('4x thermal:phytogro', ['#forge:gems/niter', '2x #forge:gems/apatite', '3x #forge:dusts/wood' ])
        event.shapeless('4x thermal:phytogro', ['thermal:rich_slag', '2x #forge:gems/apatite', '3x #forge:dusts/wood' ])
        event.recipes.thermal.pulverizer('2x minecraft:sugar', 'minecraft:sugar_cane')
        event.recipes.thermal.pulverizer('2x emendatusenigmatica:obsidian_dust', '#forge:obsidian')
        event.recipes.immersiveengineeringArcFurnace(['thermal:cured_rubber'], 'thermal:rubber', 'immersivepetroleum:petcoke_dust').energy(10000)
        event.recipes.immersiveengineeringArcFurnace(['thermal:obsidian_glass'],'#forge:sand', ['occultism:burnt_otherstone', 'emendatusenigmatica:obsidian_dust'])
        event.recipes.immersiveengineeringArcFurnace(['thermal:machine_frame'],'thermal:obsidian_glass', ['4x #forge:plates/iron', 'occultism:burnt_otherstone'])
        event.recipes.thermal.press('2x #forge:wires/copper', '#forge:plates/copper')
        event.recipes.thermal.press('2x #forge:wires/electrum', '#forge:plates/electrum')
        event.recipes.thermal.press('2x #forge:wires/aluminum', '#forge:plates/aluminum')
        event.recipes.thermal.press('2x #forge:wires/steel', '#forge:plates/steel')
        event.recipes.thermal.press('2x #forge:wires/lead', '#forge:plates/lead')
        event.recipes.thermal.press('#forge:gears/diamond', '#forge:gems/diamond')
        event.recipes.mekanismCrushing('4x kubejs:spirit_dust', 'occultism:spirit_attuned_gem')
        
        event.shaped(item.of('thermal:redstone_servo'), [
          ' A ',
          ' B ',
          ' A '
        ], {
          A: 'immersiveengineering:wirecoil_redstone',
          B: '#forge:plates/iron'
        })
        event.shaped(item.of('thermal:rf_coil'), [
          '  A',
          ' B ',
          'A  '
        ], {
          A: 'immersiveengineering:wirecoil_redstone',
          B: '#forge:plates/gold'
        })
        event.shaped(item.of('thermal:device_tree_extractor'), [
          'AEA',
          'CBC',
          'ADA'
        ], {
          A: '#forge:treated_wood',
          C: '#forge:glass',
          B: 'thermal:machine_frame',
          D: 'thermal:redstone_servo',
          E: '#forge:gears/invar'
        })
        event.shaped(item.of('kubejs:machine_frame_2'), [
          'ABA',
          'DCD',
          'ABA'
        ], {
          A: '#forge:plates/steel',
          B: 'occultism:otherstone',
          C: 'thermal:machine_frame',
          D: 'thermal:cured_rubber'
        })
        event.shaped(item.of('thermal:machine_furnace'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/electrum',
          B: 'thermal:rf_coil',
          C: 'thermal:machine_frame',
          D: 'occultism:otherstone',
          E: 'cyclic:gem_amber'
        })
        event.shaped(item.of('thermal:machine_pulverizer'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/electrum',
          B: 'thermal:rf_coil',
          C: 'thermal:machine_frame',
          D: 'create:crushing_wheel',
          E: 'create:mechanical_press'
        })
        event.shaped(item.of('thermal:machine_smelter'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/electrum',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'immersiveengineering:blastfurnace_preheater',
          E: 'thermal:machine_furnace'
        })
        event.shaped(item.of('thermal:machine_press'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/constantan',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'create:mechanical_press',
          E: 'immersiveengineering:drillhead_steel'
        })
        event.shaped(item.of('thermal:machine_pyrolyzer'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/signalum',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'bloodmagic:bloodstonebrick',
          E: Item.of('immersiveengineering:graphite_electrode').ignoreNBT()
        })
        event.shaped(item.of('thermal:machine_refinery'), [
          'FEG',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/signalum',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'emendatusenigmatica:lumium_ingot',
          E: 'thermal:fluid_cell',
          F: 'bloodmagic:reagentwater',
          G: 'bloodmagic:reagentlava'
        })
        event.shaped(item.of('thermal:machine_crucible'), [
          'FEF',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/signalum',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'bloodmagic:bloodstonebrick',
          E: 'thermal:fluid_cell',
          F: 'bloodmagic:reagentlava'
        })
        event.shaped(item.of('thermal:machine_sawmill'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/bronze',
          B: 'thermal:rf_coil',
          C: 'thermal:machine_frame',
          D: '#forge:stone',
          E: 'immersiveengineering:sawblade'
        })
        event.shaped(item.of('thermal:machine_crafter'), [
          ' E ',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/lumium',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: 'emendatusenigmatica:lumium_ingot',
          E: 'cyclic:crafter'
        })
        event.shaped(item.of('thermal:machine_insolator'), [
          'FEF',
          'DCD',
          'ABA'
        ], {
          A: '#forge:gears/enderium',
          B: 'thermal:rf_coil',
          C: 'kubejs:machine_frame_2',
          D: '#thermal:glass/hardened',
          E: 'immersiveengineering:cloche',
          F: 'bloodmagic:reagentgrowth'
        })
        event.shaped(item.of('thermal:upgrade_augment_1'), [
          'ABA',
          'CDC',
          'ABA'
        ], {
          A: '#forge:plates/invar',
          B: '#thermal:glass/hardened',
          C: 'thermal:cured_rubber',
          D: '#forge:gears/electrum'
        })
        event.shaped(item.of('thermal:upgrade_augment_2'), [
          'ABA',
          'DCD',
          'ABA'
        ], {
          A: '#forge:plates/lumium',
          B: 'thermal:machine_frame',
          C: 'thermal:upgrade_augment_1',
          D: '#forge:gears/signalum'
        })
        event.shaped(item.of('thermal:upgrade_augment_3'), [
          'ABA',
          'DCD',
          'ABA'
        ], {
          A: '#forge:plates/enderium',
          B: 'kubejs:machine_frame_2',
          C: 'thermal:upgrade_augment_2',
          D: 'occultism:spirit_attuned_gem'
        })
        event.shaped(item.of('thermal:dynamo_stirling'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/invar',
          C: 'thermal:machine_frame',
          D: 'occultism:otherstone',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_compression'), [
          ' A ',
          'BCB',
          'DEF'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/invar',
          C: 'thermal:machine_frame',
          D: 'immersiveengineering:biodiesel_bucket',
          F: 'immersivepetroleum:diesel_bucket',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_magmatic'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/invar',
          C: 'thermal:machine_frame',
          D: 'bloodmagic:reagentlava',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_numismatic'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/invar',
          C: 'kubejs:machine_frame_2',
          D: '#forge:coins/signalum',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_lapidary'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/enderium',
          C: 'kubejs:machine_frame_2',
          D: 'occultism:spirit_attuned_gem',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_disenchantment'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/lumium',
          C: 'kubejs:machine_frame_2',
          D: 'minecraft:experience_bottle',
          E: 'immersiveengineering:wirecoil_redstone'
        })
        event.shaped(item.of('thermal:dynamo_gourmand'), [
          ' A ',
          'BCB',
          'DED'
        ], {
          A: 'thermal:rf_coil',
          B: '#forge:ingots/brass',
          C: 'thermal:machine_frame',
          D: '#forge:ingots/zinc',
          E: 'immersiveengineering:wirecoil_redstone'
        })
})