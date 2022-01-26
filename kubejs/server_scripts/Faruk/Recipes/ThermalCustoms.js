onEvent('recipes', event => {

event.custom({
        type: "thermal:chiller",
        input:[{ item: "thermal:chiller_ball_cast" },
                { fluid: "thermal:latex"}],
        result:[{item: "thermal:rubber",
                count: 2}],
        energy: 4000
    });

event.custom({
        type: "thermal:press",
        input: { tag: "forge:dusts/wood",
                count: 4},
        result: { item: "minecraft:paper",
                 count: 2},
                 energy: 4000
      })
      
      event.custom({
        type: "thermal:press",
        input: { tag: "forge:ingots/aluminum",
                count: 1},
        result: { item: "emendatusenigmatica:aluminum_plate",
                 count: 1},
                 energy: 4000
      })

      event.custom({
        type: "thermal:press",
        input: { tag: "forge:ingots/steel",
                count: 1},
        result: { item: "emendatusenigmatica:steel_plate",
                 count: 1},
                 energy: 4000
      })

event.custom({
        type: "thermal:smelter",
        input: [
                { item: "emendatusenigmatica:lead_ingot",
                 count: 3},   
                { item: "occultism:iesnium_dust",
                 count: 1},
                { item: "emendatusenigmatica:ender_dust",
                 count: 2}
                ],
        result: [{ item: "emendatusenigmatica:enderium_ingot",
                 count: 2}],
                 energy: 64000
      })

event.custom({
        type: "thermal:smelter",
        input: [
                { item: "emendatusenigmatica:silver_ingot",
                 count: 1},   
                { item: "occultism:crushed_end_stone",
                 count: 2},
                { item: "emendatusenigmatica:tin_ingot",
                 count: 3}
                ],
        result: [{ item: "emendatusenigmatica:lumium_ingot",
                 count: 2}],
                 energy: 32000
      })

event.custom({
        type: "thermal:smelter",
        input: [
                { item: "emendatusenigmatica:silver_ingot",
                 count: 1},   
                { item: "kubejs:spirit_dust",
                 count: 2},
                { item: "emendatusenigmatica:copper_ingot",
                 count: 3}
                ],
        result: [{ item: "emendatusenigmatica:signalum_ingot",
                 count: 2}],
                 energy: 48000
      })

event.custom({
        type: "occultism:crushing",
        ingredient: { item: "occultism:spirit_attuned_gem"},

        result: { item: "kubejs:spirit_dust",
         count: 4},
})

event.custom({
        type: "occultism:crushing",
        ingredient: { item: "minecraft:obsidian"},

        result: { item: "emendatusenigmatica:obsidian_dust",
         count: 2},
})

event.custom({
        type: "thermal:smelter",
        input: [
                { item: "glassential:glass_ethereal"},
                { item: "occultism:burnt_otherstone"},
                { item: "minecraft:obsidian"}
        ],
        result: [{ item: "thermal:obsidian_glass",
                 count: 2}],
                 energy: 32000
      })
event.custom({
        type: "thermal:smelter",
        input: [
                { tag: "forge:plates/iron",
                 count: 4},
                { tag: "thermal:glass/hardened"},
                { item: "occultism:burnt_otherstone"}
        ],
        result: [{ item: "thermal:machine_frame",}
        ],
                 energy: 24000
      })

event.custom({
        type: "thermal:smelter",
        input: [  
                { item: "emendatusenigmatica:coke_dust"},
                { item: "thermal:rubber"},
                ],
        result: [{ item: "thermal:cured_rubber",
                 count: 1}],
                 energy: 16000
      })
})