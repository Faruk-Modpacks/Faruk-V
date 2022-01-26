
events.listen('recipes', function (event) {

      //Draconic
event.shaped(item.of('4x kubejs:dragonsoul_block'), [
            'ACA',
            'CBC',
            'ACA'
          ], {
            C: 'iceandfire:dragon_bone_block',
            B: '#faruk:dragonsteel',
            A: 'draconicevolution:draconium_dust'
          })
event.shaped(item.of('draconicevolution:basic_crafting_injector'), [
            'ABA',
            'DCD',
            'DDD'
          ], {
            A: 'rftoolsbase:infused_diamond',
            B: 'draconicevolution:draconium_core',
            C: 'kubejs:dragonsoul_block',
            D: '#forge:stone'
          })
event.shaped(item.of('draconicevolution:grinder'), [
            'ABA',
            'CDC',
            'AEA'
          ], {
            A: 'draconicevolution:draconium_ingot',
            B: '#faruk:dragonsteel',
            C: Item.of('iceandfire:dragonbone_sword').ignoreNBT(),
            E: Item.of('draconicevolution:mob_soul').ignoreNBT(),
            D: 'draconicevolution:draconium_core'
          })
event.shaped(item.of('draconicmachinery:player_grinder'), [
            'ABA',
            'CDC',
            'AEA'
          ], {
            A: 'draconicevolution:draconium_ingot',
            B: '#faruk:dragonsteel',
            C: 'draconicevolution:draconium_core',
            E: Item.of('draconicevolution:generator').ignoreNBT(),
            D: 'draconicevolution:wyvern_core'
          })
})