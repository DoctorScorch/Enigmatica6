events.listen('item.tags', function (event) {
    event.get('forge:ores/ancient_debris').add('minecraft:ancient_debris');
    event.get('forge:ores').add(oreUraninite).add('minecraft:ancient_debris');
    event.get('forge:ores/dimensional').add(oreDimensional);
	event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
	event.get('forge:ores/yellorium').add('bigreactors:yellorite_ore');
    // event.get('forge:ores').add('create:zinc_ore');
    // event.get('forge:ores').add('occultism:iesnium_ore');
});
