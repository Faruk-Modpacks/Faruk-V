
events.listen('recipes', function (event) {
      //Storage Network
    event.shaped(item.of('storagenetwork:master'), [
        'ABA',
        'BCB',
        'ABA'
      ], {
        A: 'bloodmagic:blankrune',
        B: 'bloodmagic:blankslate',
        C: 'immersiveengineering:heavy_engineering'
      })
    event.shaped(item.of('16x storagenetwork:kabel'), [
        'AAA',
        'BCB',
        'AAA'
      ], {
        A: '#forge:treated_wood_slab',
        B: '#forge:plates/iron',
        C: 'create:electron_tube'
      })
    event.shaped(item.of('storagenetwork:inventory_remote'), [
        'A A',
        'BCB',
        'A A'
      ], {
        A: '#forge:slimeballs',
        B: '#forge:plates/steel',
        C: 'storagenetwork:request'
      })
    event.shaped(item.of('storagenetwork:crafting_remote'), [
        'ADA',
        'BCB',
        'A A'
      ], {
        A: 'minecraft:sea_lantern',
        B: '#forge:storage_blocks/gold',
        C: 'storagenetwork:inventory_remote',
        D: '#forge:chests/ender'
      })
})