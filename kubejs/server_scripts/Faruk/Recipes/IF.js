events.listen('recipes', function (event) {
event.recipes.immersiveengineeringMetalPress('industrialforegoing:dryrubber', '9x industrialforegoing:tinydryrubber', 'immersiveengineering:mold_plate')
event.recipes.thermal.press('industrialforegoing:dryrubber', '9x industrialforegoing:tinydryrubber')

event.shaped(item.of('industrialforegoing:machine_frame_pity'), [
  'ABA',
  'BCB',
  'ABA'
], {
  A: '#forge:treated_wood',
  B: 'eidolon:pewter_ingot',
  C: 'thermal:machine_frame'
 })
 event.shaped(item.of('industrialforegoing:fluid_extractor'), [
  'AEA',
  'BCB',
  'ADA'
], {
  A: 'eidolon:pewter_ingot',
  B: 'occultism:otherstone',
  C: 'industrialforegoing:machine_frame_pity',
  D: 'immersiveengineering:fluid_pump',
  E: '#forge:plates/gold'
 })
 event.shaped(item.of('industrialforegoing:latex_processing_unit'), [
  'AEA',
  'BCF',
  'ADA'
], {
  A: 'eidolon:pewter_ingot',
  B: '#forge:buckets/water',
  C: 'industrialforegoing:machine_frame_pity',
  D: 'thermal:machine_furnace',
  E: 'minecraft:redstone_block',
  F: 'industrialforegoing:latex_bucket'
 })
 event.shaped(item.of('industrialforegoing:dissolution_chamber'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'industrialforegoing:common_black_hole_tank',
  C: 'industrialforegoing:machine_frame_pity',
  D: '#forge:gears/signalum',
  E: '#forge:chests',
  F: 'eidolon:arcane_gold_ingot'
 })
 event.shaped(item.of('industrialforegoing:mob_slaughter_factory'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'minecraft:netherite_sword',
  C: 'industrialforegoing:machine_frame_simple',
  D: 'immersiveengineering:wirecoil_redstone',
  E: '#forge:gears/lumium',
  F: 'cyclic:emerald_axe'
 })
 event.shaped(item.of('industrialforegoing:laser_drill'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'cyclic:laser',
  C: 'industrialforegoing:machine_frame_simple',
  D: 'immersiveengineering:wirecoil_redstone',
  E: '#forge:gears/lumium',
  F: '#forge:gears/signalum'
 })
 event.shaped(item.of('industrialforegoing:ore_laser_base'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'occultism:iesnium_ore',
  C: 'industrialforegoing:machine_frame_advanced',
  D: 'immersiveengineering:wirecoil_redstone',
  E: Item.of('eidolon:reversal_pick').ignoreNBT(),
  F: '#forge:gears/lumium'
 })
 event.shaped(item.of('industrialforegoing:fluid_laser_base'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: Item.of('thermal:fluid_cell').ignoreNBT(),
  C: 'industrialforegoing:machine_frame_advanced',
  D: 'immersiveengineering:wirecoil_redstone',
  E: 'immersiveengineering:fluid_pump',
  F: '#forge:gears/lumium'
 })
 event.shaped(item.of('industrialforegoing:mob_duplicator'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'occultism:soul_gem',
  C: 'industrialforegoing:machine_frame_advanced',
  D: 'immersiveengineering:wirecoil_redstone',
  E: 'eidolon:shadow_gem',
  F: Item.of('minecraft:spawner').ignoreNBT(),
 })
 event.shaped(item.of('industrialforegoing:mob_crusher'), [
  'AEA',
  'BCB',
  'FDF'
], {
  A: 'industrialforegoing:plastic',
  B: 'immersiveengineering:sawblade',
  C: 'industrialforegoing:machine_frame_advanced',
  D: 'immersiveengineering:wirecoil_redstone',
  E: 'twilightforest:giant_sword',
  F: '#forge:gears/signalum',
 })
event.shaped(item.of('twilightforest:twilight_portal_miniature_structure'), [
  'DCD',
  'BAB',
  'DBD'
], {
  A: 'industrialforegoing:machine_frame_supreme',
  B: 'eidolon:wicked_weave',
  C: 'twilightforest:cube_talisman',
  D: 'twilightforest:castle_brick'
 })
})