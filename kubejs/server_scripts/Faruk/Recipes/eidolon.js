events.listen('recipes', function (event) {


event.recipes.bloodmagic.alchemytable('4x eidolon:pewter_blend', ['#forge:dusts/cobalt', '#forge:dusts/lead', '#forge:dusts/lead', '#forge:dusts/steel']).syphon(2000).ticks(100).upgradeLevel(3)
event.recipes.immersiveengineeringMetalPress('2x eidolon:pewter_inlay', '4x eidolon:pewter_ingot', 'immersiveengineering:mold_packing_4')
event.recipes.thermal.press('2x eidolon:pewter_inlay', '4x eidolon:pewter_ingot', 'thermal:press_packing_2x2_die')
event.recipes.immersiveengineeringMetalPress('2x eidolon:gold_inlay', '4x eidolon:arcane_gold_ingot', 'immersiveengineering:mold_packing_4')
event.recipes.thermal.press('2x eidolon:gold_inlay', '4x eidolon:arcane_gold_ingot', 'thermal:press_packing_2x2_die')
event.recipes.bloodmagic.altar('eidolon:enchanted_ash', 'minecraft:bone').upgradeLevel(2).altarSyphon(5000).consumptionRate(20).drainRate(20)
event.custom({
    "type": "occultism:crushing",
    "ingredient": {"item": "emendatusenigmatica:cobalt_ingot"},

    "result": {"item": "emendatusenigmatica:cobalt_dust",
    "count": 1},
})
event.custom({
    "type": "occultism:crushing",
    "ingredient": {"item": "emendatusenigmatica:cobalt_chunk"},

    "result": {"item": "emendatusenigmatica:cobalt_dust",
    "count": 2},
})
event.recipes.bloodmagic.alchemytable('2x eidolon:arcane_gold_ingot', ['eidolon:soul_shard','silentgear:blaze_gold_ingot','silentgear:blaze_gold_ingot', '#forge:dusts/redstone']).syphon(2500).ticks(100).upgradeLevel(3)
})