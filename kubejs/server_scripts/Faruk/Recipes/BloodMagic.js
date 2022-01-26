
events.listen('recipes', function (event) {
//Stage1
const { altar, array, soulforge, arc, alchemytable } = event.recipes.bloodmagic
altar('bloodmagic:weakbloodorb', 'create:polished_rose_quartz').upgradeLevel(0).altarSyphon(2500).consumptionRate(8).drainRate(2)
altar('create:rose_quartz', 'minecraft:quartz').upgradeLevel(0).altarSyphon(1500).consumptionRate(5).drainRate(1)
altar('kubejs:blood_stained_glass', 'minecraft:glass').upgradeLevel(0).altarSyphon(200).consumptionRate(5).drainRate(1)

//Stage2
altar('bloodmagic:apprenticebloodorb', 'immersiveengineering:capacitor_lv').upgradeLevel(1).altarSyphon(6000).consumptionRate(5).drainRate(5)

//Stage3
altar('bloodmagic:magicianbloodorb', 'occultism:spirit_attuned_gem').upgradeLevel(2).altarSyphon(30000).consumptionRate(20).drainRate(20)

//Stage4
altar('bloodmagic:masterbloodorb', 'eidolon:unholy_symbol').upgradeLevel(3).altarSyphon(50000).consumptionRate(30).drainRate(50)

})