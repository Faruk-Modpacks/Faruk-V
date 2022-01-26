events.listen('recipes', function (event) {
event.shaped(item.of('world_of_faruk:comp_obs'), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:obsidian',
    B: 'mekanism:enriched_refined_obsidian'
  })
event.shaped(item.of('world_of_faruk:comp_obs_2'), [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'world_of_faruk:comp_obs',
  B: 'kubejs:trinium_plate'
})
event.shaped(item.of('world_of_faruk:comp_obs_3'), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'world_of_faruk:comp_obs_2',
    B: 'kubejs:dimensional_core'
  })
event.shaped(item.of('world_of_faruk:faruk_land'), [
    'CAC',
    'ABA',
    'CAC'
  ], {
    A: 'minecraft:netherite_ingot',
    B: 'bloodmagic:lavacrystal',
    C: 'kubejs:trinium_plate'
  })
})