app.factory('InvertService', function() {
var inverts = [
{ id: 1, 
species: 'Apostichopus parvimensis', 
common_name_eng: 'Warty Sea Cucumber', 
common_name_esp: '', 
phylum: 'Echinodermata', 
class: 'Holothuroidea', 
order: 'Aspidochirotida', 
family: 'Stichopodidae', 
distribution: 'Found from Baja California, Mexico up to Monterey Bay, California.', 
description: 'Apostichopus parvimensis, also known as the Warty sea cucumber can be brown or orange with black-tipped papillae on their ventral surface. The Warty sea cucumber can grow up to 40cm however since the sea cucumber doesn\u0027t have a skeleton it can contract or expand significantly. There is not any sexual dimorphism within this species. The sea cucumber posses tube feet to help them move across the ocean\u0027s floor and gather food. The sea cucumber has bilateral symmetry. ', 
pronunciation: '', 
habitat: [
{type: 'Marine'}, 
], 
habitat_other: '', 
images: [
{ type: '', src: 'images/129.jpg', credit: '' }, 
], 
sounds: [
]},

{ id: 2, 
species: 'Dosidicus gigas', 
common_name_eng: 'Humboldt Squid', 
common_name_esp: '', 
phylum: 'Mollusca', 
class: 'Cephalopoda ', 
order: 'Teuthida', 
family: 'Ommastrephidae', 
distribution: 'The Humboldt Current, extending along the western coast of South and Central America.', 
description: 'Size: lengths up to 1.5 meters (5ft), not including tentacles. Weight: up to 50Kg (100lbs). The Humboldt Squid (Dosidicus gigas) has 10 tentacles containing 100-200 suckers per tentacle. They also have a sharp beak at the basal area of the tentacles used for shredding flesh of their prey. Similar to other members of their family: Ommastrphidae, they have developed bioluminescent photophores used for rapid color changes at command. The mode of locomotion for the Humboldt Squid is a hyponome or siphon that they push water through like a jet to propel themselves forward. ', 
pronunciation: '', 
habitat: [
{type: 'Marine, Pelagic'}, 
{type: 'Marine, Pelagic'}, 
], 
habitat_other: '', 
images: [
{ type: '', src: 'images/14.jpg', credit: 'N.p., n.d. Web. .' }, 
{ type: '', src: 'images/130.jpg', credit: '"Giant-humboldt-squid-california." Alamo City Pundit. N.p., 13 July 2009. Web. 11 Nov. 2015. .' }, 
], 
sounds: [
]},

];

return {
inverts: inverts,
getInvert: function(index)
{
return inverts[index];
}
}
});