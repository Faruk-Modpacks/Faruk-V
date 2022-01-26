
events.listen('recipes', function (event) {

      //#1 Best Super Uber Mod Ever
event.shaped(item.of('refinedstorage:controller'), [
        'ACA',
        'DBD',
        'AEA'
      ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'refinedstorage:machine_casing',
        C: 'refinedstorage:advanced_processor',
        D: 'emendatusenigmatica:silicon_gem',
        E: 'refinedstorage:improved_processor'
      })
event.shaped(item.of('extrastorage:iron_crafter'), [
        'ACA',
        ' B ',
        'A A'
      ], {
        A: '#forge:plates/steel',
        B: 'refinedstorage:crafter',
        C: 'industrialforegoing:pity_black_hole_unit'
      })
event.shaped(item.of('extrastorage:gold_crafter'), [
        'ACA',
        'DBD',
        'A A'
      ], {
        A: '#forge:storage_blocks/gold',
        B: 'extrastorage:iron_crafter',
        C: 'industrialforegoing:simple_black_hole_unit',
        D: 'extrastorage:neural_processor'
      })
event.shaped(item.of('extrastorage:diamond_crafter'), [
        'ACA',
        'DBD',
        'A A'
      ], {
        A: '#forge:storage_blocks/diamond',
        B: 'extrastorage:gold_crafter',
        C: 'industrialforegoing:advanced_black_hole_unit',
        D: 'extrastorage:neural_processor'
      })
event.shaped(item.of('extrastorage:netherite_crafter'), [
        'ACA',
        'DBD',
        'AEA'
      ], {
        A: '#forge:storage_blocks/netherite',
        B: 'extrastorage:diamond_crafter',
        C: 'industrialforegoing:supreme_black_hole_unit',
        D: 'extrastorage:neural_processor',
        E: 'occultism:magic_lamp_empty'
      })
event.shaped(item.of('cabletiers:elite_importer'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: '#forge:storage_blocks/iron',
        B: 'extrastorage:advanced_importer',
        C: 'refinedstorage:advanced_processor'
      })
event.shaped(item.of('cabletiers:ultra_importer'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: '#forge:storage_blocks/diamond',
        B: 'cabletiers:elite_importer',
        C: 'extrastorage:neural_processor'
      })
event.shaped(item.of('cabletiers:elite_exporter'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: '#forge:storage_blocks/iron',
        B: 'extrastorage:advanced_exporter',
        C: 'refinedstorage:advanced_processor'
      })
event.shaped(item.of('cabletiers:ultra_exporter'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: '#forge:storage_blocks/diamond',
        B: 'cabletiers:elite_exporter',
        C: 'extrastorage:neural_processor'
      })
event.shaped(item.of('rsrequestify:requester'), [
        'AEA',
        'BCB',
        'ADA'
      ], {
        A: '#forge:dusts/redstone',
        B: 'refinedstorage:crafting_upgrade',
        C: 'refinedstorage:interface',
        D: 'refinedstorage:advanced_processor',
        E: 'refinedstorage:detector'
      })
event.shaped(item.of('rsinfinitybooster:infinity_card'), [
        'DAD',
        'ABA',
        'ECE'
      ], {
        A: 'refinedstorage:range_upgrade',
        B: 'minecraft:nether_star',
        C: 'industrialforegoing:range_addon9',
        D: 'minecraft:end_crystal',
        E: '#faruk:twilight'
      })
event.shaped(item.of('rsinfinitybooster:dimension_card'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: 'rsinfinitybooster:infinity_card',
        B: 'minecraft:nether_star',
        C: Item.of('cyclic:ender_eye_reuse').ignoreNBT(),
      })
event.recipes.mekanismEnriching('emendatusenigmatica:silicon_gem', '#forge:sand')
event.recipes.mekanismEnriching('2x emendatusenigmatica:silicon_gem', '#forge:gems/quartz')
})