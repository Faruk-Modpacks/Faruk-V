onEvent('recipes', event => {
        event.custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: [{ item: 'industrialforegoing:plastic' },
                        { item: 'industrialforegoing:machine_frame_pity' },
                        { item: 'industrialforegoing:plastic' },
                        { item: 'minecraft:netherite_ingot' },
                        { item: 'minecraft:netherite_ingot' },
                        { item: 'eidolon:pewter_ingot' },
                        { tag: 'forge:gears/signalum' },
                        { item: 'eidolon:pewter_ingot' }],
                inputFluid: "{ FluidName: 'industrialforegoing:latex', Amount: 1000 }",
                processingTime: 400,
                output: { item: 'industrialforegoing:machine_frame_simple' }
              })
        })