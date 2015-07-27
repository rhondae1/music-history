 /*(Array of songs, artist, albums

var songs = [i]
songs[songs.length] = "Shine > by Dolly Parton on the album Little Sparrow";
songs[songs.length] = "Legs > by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic > by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "Stop this Train > by John Mayer on the album Heavier Things";

for (var i = 0; i < songs.length; i = i+1) {
	songs[i]
	console.log(songs)
};

replace 

var phrase = ">";
var newPhrase = phrase.replace(/o/g, "-");
alert(newPhrase);

var songs[i];
document.getElementById("titles");
element.innerHTML = songs;
*/

$(document).ready(function(){


$.ajax({
 url:"songs.json"
}).done(function (data) {
  console.log(data);
   for (var i = 0; i < data.length; i++) {
    console.log("sting")
      $('div.sidebar_right').append('<p class="songName">'+ data.songs[i].song + '</p>');
    }
    

})

})



