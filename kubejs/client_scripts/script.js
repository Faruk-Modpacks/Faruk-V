// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
	const jei_to_hide = [
    'chisel:*'
]

onEvent('jei.hide.items', event => {
    for (i of jei_to_hide){
        event.hide(i)
    }
})