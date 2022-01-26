 
events.listen('block.tags', function (event) {

        //Add
        event.get('ftbultimine:excluded_blocks').add('#minecraft:logs')
        event.get('ftbultimine:excluded_blocks').add('#forge:plants')


        //Remove
        //event.removeAllTagsFrom('')
    })