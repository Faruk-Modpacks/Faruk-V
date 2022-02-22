onEvent('item.tooltip', tooltip => {
	// Add tooltip to all of these items
	tooltip.add(['emendatusenigmatica:cobalt_ore', 'emendatusenigmatica:cobalt_ingot', 'emendatusenigmatica:cobalt_dust'], Text.red('Cant be found in world. You have to use Occultism Miner to obtain this item.'))
	tooltip.add(['ftbultimine:ultiminer'], Text.red('Cant use at Trees and Grasses. Use Saw and Sickle to ultimine those.'))
  })