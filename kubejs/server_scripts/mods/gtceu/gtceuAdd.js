let gtceuAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    //Rubber

    event.custom(
        {
            type: 'tfc:pot',
            ingredients: [
                {
                    tag: 'forge:dusts/sulfur'
                }
            ],
            fluid_ingredient: {
                ingredient: 'gregitas:raw_resin',
                amount: 1000
            },
            duration: 3000,
            temperature: 300,
            item_output: [
                {
                    item: 'gtceu:sticky_resin'
                }
            ]
        }
    ).id('gregitas:pot/sticky_resin')

    event.custom(
        {
            type: 'create:crushing',
            ingredients: [
                {
                    item: 'gtceu:sticky_resin'
                }
            ],
            processingTime: 250,
            results: [
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    chance: 0.5,
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    chance: 0.25,
                    item: 'gtceu:raw_rubber_dust'
                }
            ]
        }
    ).id('gregitas:crushing/raw_rubber_pulp')

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    item: 'gtceu:sulfur_small_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                }
            ],
            results: [
                {
                    fluid: 'gtceu:rubber',
                    nbt: {},
                    amount: 144
                }
            ],
            heatRequirement: "heated"
        }
    ).id('gregitas:heated_mixing/rubber')

    event.custom(
        {
            type: 'create:filling',
            ingredients: [
                {
                    item: 'tfc:ceramic/ingot_mold'
                },
                {
                    fluid: 'gtceu:rubber',
                    nbt: {},
                    amount: 144
                }
            ],
            results: [
                {
                    item: 'tfc:ceramic/ingot_mold',
                    nbt: {
                        tank: {
                            Amount: 144,
                            FluidName: 'gtceu:rubber'
                        }
                    },
                    count: 1
                }
            ]
        }
    ).id('gregitas:filling/mold/ingot_rubber')

    event.custom(
        {
            type: 'tfc:casting',
            mold: {
                item: 'tfc:ceramic/ingot_mold'
            },
            fluid: {
                ingredient: 'gtceu:rubber',
                amount: 144
            },
            result: {
                item: 'gtceu:rubber_ingot'
            },
            break_chance: 0.1
        }
    ).id('gregitas:casting/rubber_ingot')

    event.custom(
        {
            type: 'create:compacting',
            ingredients: [
                {
                    item: 'gtceu:rubber_ingot'
                }
            ],
            results: [
                {
                    item: 'gtceu:rubber_plate',
                    count: 1
                }
            ],
            heatRequirement: 'heated'
        }
    ).id('gregitas:heated_pressing/rubber_plate')

    //Coke Oven
        //Normal
            event.recipes.gtceu.coke_oven('stick_bundle_to_charcoal')
                .itemInputs('tfc:stick_bundle')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 125))
                .duration(1000)

            event.recipes.gtceu.coke_oven('gem/lignite_to_flawed_coke')
                .itemInputs('tfc:ore/lignite')
                .itemOutputs('gtceu:coke_flawed_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 250))
                .duration(1000)

            event.recipes.gtceu.coke_oven('gem/bituminous_coal_to_exquisite_coke')
                .itemInputs('tfc:ore/bituminous_coal')
                .itemOutputs('gtceu:coke_exquisite_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 750))
                .duration(1000)
        //Improved
            event.recipes.gtceu.improved_coke_oven('stick_bundle_to_charcoal')
                .itemInputs('tfc:stick_bundle')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 125))
                .duration(500)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('logs_to_charcoal')
                .itemInputs('#minecraft:logs')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 250))
                .duration(450)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('gem/coal_to_coke')
                .itemInputs('minecraft:coal')
                .itemOutputs('gtceu:coke_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 500))
                .duration(450)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('block/coal_to_coke')
                .itemInputs('minecraft:coal_block')
                .itemOutputs('gtceu:coke_block')
                .outputFluids(Fluid.of('gtceu:creosote', 4500))
                .duration(4050)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('gem/lignite_to_flawed_coke')
                .itemInputs('tfc:ore/lignite')
                .itemOutputs('gtceu:coke_flawed_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 250))
                .duration(500)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('gem/bituminous_coal_to_exquisite_coke')
                .itemInputs('tfc:ore/bituminous_coal')
                .itemOutputs('gtceu:coke_exquisite_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 750))
                .duration(500)
                .EUt(LV)

    //ALCR
        event.recipes.gtceu.assembly_line('advanced_large_chemical_reactor')
            .itemInputs('gtceu:large_chemical_reactor', '3x #forge:circuits/iv', '15x gtceu:nitinol_plate', '4x gtceu:platinum_single_cable')
            .itemOutputs('gtceu:advanced_large_chemical_reactor')
            .inputFluids(
                Fluid.of('gtceu:copper', 4608),
                Fluid.of('gtceu:tin', 4608),
                Fluid.of('gtceu:soldering_alloy', 2304),
                Fluid.of('gtceu:lubricant', 8000)
            )
            .duration(500)
            .EUt(IV)
}