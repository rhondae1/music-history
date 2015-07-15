// Array of songs, artist, albums//

var songs = [i]
songs[songs.length] = "Shine > by Dolly Parton on the album Little Sparrow";
songs[songs.length] = "Legs > by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic > by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Stop this Train > by John Mayer on the album Heavier Things";

for (var i = songs.length + 1; i >= 0; i = i+1) {
	songs[i]
	console.log(songs)
};

//replace //

var phrase = ">";
var newPhrase = phrase.replace(/o/g, "-");
alert(newPhrase);