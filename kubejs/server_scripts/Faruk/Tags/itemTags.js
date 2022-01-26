
    events.listen('item.tags', function (event) {

        //Crafting
        event.get('minecraft:stone_crafting_materials').add('create:scoria_cobblestone')
        event.get('minecraft:stone_crafting_materials').add('create:gabbro_cobblestone')
        event.get('minecraft:stone_crafting_materials').add('create:dolomite_cobblestone')
        event.get('minecraft:stone_crafting_materials').add('create:limestone_cobblestone')
        event.get('minecraft:stone_crafting_materials').add('chisel:limestone/raw')
        event.get('minecraft:stone_crafting_materials').add('chisel:marble/raw')
        event.get('minecraft:stone_crafting_materials').add('chisel:marble/raw')
        event.get('faruk:dragonsteel').add('iceandfire:dragonsteel_fire_ingot')
        event.get('faruk:dragonsteel').add('iceandfire:dragonsteel_ice_ingot')
        event.get('faruk:dragonsteel').add('iceandfire:dragonsteel_lightning_ingot')
        event.get('faruk:twilight').add('twilightforest:naga_trophy')
        event.get('faruk:twilight').add('twilightforest:lich_trophy')
        event.get('faruk:twilight').add('twilightforest:minoshroom_trophy')
        event.get('faruk:twilight').add('twilightforest:hydra_trophy')
        event.get('faruk:twilight').add('twilightforest:knight_phantom_trophy')
        event.get('faruk:twilight').add('twilightforest:ur_ghast_trophy')
        event.get('faruk:twilight').add('twilightforest:yeti_trophy')
        event.get('faruk:twilight').add('twilightforest:snow_queen_trophy')
        event.get('faruk:twilight').add('twilightforest:quest_ram_trophy')

        //Remove
        event.removeAllTagsFrom('create:golden_sheet')
        event.removeAllTagsFrom('create:powdered_obsidian')
        event.removeAllTagsFrom('occultism:obsidian_dust')
        event.removeAllTagsFrom('mekanism:dust_obsidian')
        event.removeAllTagsFrom('mekanism:block_steel')
})