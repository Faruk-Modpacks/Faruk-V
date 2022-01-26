onEvent('block.registry', event => {
event.create('machine_frame_2').material('metal').hardness(1.5).displayName('Hardened Machine Frame').harvestTool('pickaxe', 5).notSolid()
event.create('dragonsoul_block').material('metal').hardness(3.5).displayName('Dragonsoul Block').harvestTool('pickaxe', 5)
event.create('blood_stained_glass').material('glass').hardness(0.5).displayName('Blood Stained Glass').notSolid()

})
onEvent('item.registry', event => {
    event.create('spirit_dust').displayName('Spirit Dust')
    event.create('lithium_ingot').displayName('Lithium Ingot')
    event.create('chest_gold').displayName('Gold Lootbox')
    event.create('chest_silver').displayName('Silver Lootbox')
    event.create('loot').displayName('Monster Pouch')
    event.create('items').displayName('Loot Pouch')
    event.create('trinium_plate').displayName('Trinium Plate')
    event.create('compress_component').displayName('Compress Component')
    event.create('dimensional_core').displayName('Dimensional Core')
    event.create('blood_stained_pane').displayName('Blood Stained Glass Pane')
    event.create('coin').displayName('Quest Coin')

})