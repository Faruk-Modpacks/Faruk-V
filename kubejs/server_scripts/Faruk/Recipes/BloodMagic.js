
events.listen('recipes', function (event) {
//Stage1
const { altar, array, soulforge, arc, alchemytable } = event.recipes.bloodmagic
altar('bloodmagic:weakbloodorb', 'create:polished_rose_quartz').upgradeLevel(0).altarSyphon(3000).consumptionRate(8).drainRate(2)
altar('create:rose_quartz', 'minecraft:quartz').upgradeLevel(0).altarSyphon(1500).consumptionRate(5).drainRate(1)
alchemytable('bloodmagic:reagentbinding', ['minecraft:glowstone_dust', 'create:rose_quartz', 'create:blaze_cake', 'silentgear:blaze_gold_ingot']).syphon(20000).ticks(600).upgradeLevel(3)

//Stage2
altar('bloodmagic:apprenticebloodorb', 'immersiveengineering:capacitor_lv').upgradeLevel(1).altarSyphon(9000).consumptionRate(5).drainRate(5)

//Stage3
altar('bloodmagic:magicianbloodorb', 'occultism:spirit_attuned_gem').upgradeLevel(2).altarSyphon(30000).consumptionRate(20).drainRate(20)
array('bloodmagic:livinghelmet', 'bloodmagic:reagentbinding', 'minecraft:netherite_helmet')
array('bloodmagic:livingplate', 'bloodmagic:reagentbinding', 'minecraft:netherite_chestplate')
array('bloodmagic:livingleggings', 'bloodmagic:reagentbinding', 'minecraft:netherite_leggings')
array('bloodmagic:livingboots', 'bloodmagic:reagentbinding', 'minecraft:netherite_boots')
altar('kubejs:blood_stained_glass', 'minecraft:glass').upgradeLevel(2).altarSyphon(2000).consumptionRate(8).drainRate(2)


//Stage4
altar('bloodmagic:masterbloodorb', 'eidolon:unholy_symbol').upgradeLevel(3).altarSyphon(50000).consumptionRate(30).drainRate(50)

//Stage5
altar('kubejs:dimensional_core', 'kubejs:inactive_dimensional_core').upgradeLevel(4).altarSyphon(250000).consumptionRate(150).drainRate(250)
alchemytable('draconicevolution:dragon_heart', ['#forge:heart','draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_ingot']).syphon(80000).ticks(600).upgradeLevel(4)
})