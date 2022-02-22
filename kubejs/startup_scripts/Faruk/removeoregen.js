events.listen('worldgen.remove', (event) => {
    event.removeOres((ores) => {
		ores.blocks = ['mekanismmatter:naquadah_ore'];
	});
})