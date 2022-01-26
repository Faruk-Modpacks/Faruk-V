events.listen('recipes', function (event) {
       //Immersive Engineering
       event.shapeless('emendatusenigmatica:steel_plate', ['immersiveengineering:hammer', '3x #forge:ingots/steel'])
       event.shapeless('immersiveengineering:wire_aluminum', ['immersiveengineering:wirecutter', '#forge:ingots/aluminum'])
       event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_gear', '4x #forge:gems/diamond', 'immersiveengineering:mold_gear')
       event.recipes.immersiveengineeringMetalPress('2x emendatusenigmatica:enderium_rod', '#forge:ingots/enderium', 'immersiveengineering:mold_rod')
       event.stonecutting('immersiveengineering:storage_steel', 'emendatusenigmatica:steel_block')
       event.stonecutting('emendatusenigmatica:steel_block', 'immersiveengineering:storage_steel')
       event.shaped(item.of('engineersdecor:small_solar_panel'), [
         'BAB',
         'DCD',
         'EFE'
       ], {
         A: 'glassential:glass_ethereal',
         B: 'minecraft:quartz',
         C: '#forge:rods/iron',
         D: 'immersiveengineering:component_iron',
         E: 'emendatusenigmatica:lead_block',
         F: 'minecraft:redstone_block'
       })
       event.shaped(item.of('immersiveengineering:rs_engineering'), [
         'ABA',
         'BCB',
         'ABA'
       ], {
         A: 'immersiveengineering:sheetmetal_iron',
         B: 'immersiveengineering:wirecoil_redstone',
         C: '#forge:plates/copper'
       })
       event.shaped(item.of('immersiveengineering:light_engineering'), [
         'ABA',
         'BCB',
         'ABA'
       ], {
         A: 'immersiveengineering:sheetmetal_iron',
         B: 'immersiveengineering:component_iron',
         C: '#forge:plates/steel'
       })
       event.shaped(item.of('immersiveengineering:heavy_engineering'), [
         'ABA',
         'BCB',
         'ABA'
       ], {
         A: 'immersiveengineering:sheetmetal_steel',
         B: 'immersiveengineering:component_steel',
         C: '#forge:plates/electrum'
       })
       event.shaped(item.of('immersiveengineering:capacitor_lv'), [
         'DDD',
         'BCB',
         'EFE'
       ], {
         B: 'immersiveengineering:wire_copper',
         C: '#forge:rods/copper',
         D: 'immersiveengineering:component_iron',
         E: '#forge:treated_wood',
         F: 'minecraft:redstone_block'
       })
       event.shaped(item.of('immersiveengineering:capacitor_mv'), [
         'AAA',
         'BCB',
         'DED'
       ], {
         A: 'immersiveengineering:component_iron',
         B: '#forge:plates/electrum',
         C: '#forge:storage_blocks/lead',
         D: '#forge:treated_wood',
         E: 'minecraft:redstone_block'
       })
       event.shaped(item.of('immersiveengineering:capacitor_hv'), [
         'AAA',
         'BCB',
         'DED'
       ], {
         A: '#forge:ingots/steel',
         B: '#forge:plates/aluminum',
         C: 'immersiveengineering:capacitor_mv',
         D: '#forge:treated_wood',
         E: 'minecraft:redstone_block'
       })
       event.recipes.createMixing('immersiveengineering:dust_hop_graphite', [
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         '#forge:dusts/coal_petcoke',
         Fluid.of('immersiveengineering:biodiesel', 1000),
         Fluid.of('immersivepetroleum:diesel', 1000)
       ]).superheated()
}) 