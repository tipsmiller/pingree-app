app.factory('PlantService', function() {
var plants = [
{ id: 1, 
species: 'Echinocactus Grusonii', 
common_name_eng: 'Golden Barrel Cactus, Golden Ball Cactus, Mother-in-law\u0027s Cushion.', 
common_name_esp: 'Biznaga (a general name for barrel-shaped cacti)', 
type: 'angiosperm', 
distribution: 'Mexico, United States, and Europe ', 
native: 'native', 
description: 'Echinocactus grusonii, more commonly known as the Golden Barrel Cactus, was discovered and named in the late 1889. It was dug up in great numbers and distributed all over North American and Europe. The Golden Barrel Cactus is listed as endangered in its native habitat in the wild of Mexico, but is one of the most popular cacti used in landscaping and indoor plants around the world. This cactus grows in volcanic rock, at altitudes around 1,400 metres (4,600 ft). This plant is a drought tolerant succulent. In the wild, it is currently found only in a few locations in Mexico, centered on the Rio Moctezuma Valley. This cactus usually reaches a diameter of 3 feet or more, with up to 35 ribs bearing the long, and very sharp golden spines. On the top of the Cactus, on mature plants in summer, are rings of bright yellow flowers, and later brownish fruits. Old plants produce offsets around the base, eventually leading to large clusters containing dozens of individuals. The flowers may not blossom for possibly 15 years or more, in their generation lifetime of about 30 years. Family:	Cactaceae (kak-TAY-see-ee) Genus: Echinocactus (ek-in-oh-KAK-tus) Species:	grusonii (groo-SON-ee-eye) ', 
pronunciation: '', 
eco_regions: [
], 
images: [
{ type: 'Golden Barrel Cactus cluster with flowers', src: 'images/110.jpg', credit: 'http://www.delange.org/BarrelCactusGold/BarrelCactusGold.htm' }, 
{ type: 'Golden Barrel Cactus cluster', src: 'images/138.jpg', credit: 'http://www.americansouthwest.net/plants/cacti/echinocactus-grusonii4.html' }, 
{ type: 'Flowers blooming ', src: 'images/139.jpg', credit: 'http://gardeninggonewild.com/?p=20723' }, 
], 
},

{ id: 2, 
species: 'Pachycereus pringlei', 
common_name_eng: 'Cardón Cactus', 
common_name_esp: 'El cacto cardón', 
type: 'angiosperm', 
distribution: 'Found throughout the Baja Peninsula ', 
native: 'native', 
description: '(To be updated)', 
pronunciation: '', 
eco_regions: [
{type: 'Vizcaino'}, 
{type: 'Desert'}, 
], 
images: [
{ type: '', src: 'images/1.jpg', credit: '' }, 
], 
},

];

return {
plants: plants,
getPlant: function(index)
{
return plants[index];
}
}
});