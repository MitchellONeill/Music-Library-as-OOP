//Instructions::
// This one will be slightly different from the Week 1 in that it will have the following functionality:

// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
//

function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = []
};

function Track(title, rating, length)  {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

//also has overallRating, totaDuration
function Playlist(name) {
  this.name = name;
  this.tracks = [];
};

Playlist.prototype.getTotalDuration = function () {
  let sum = 0;
  this.tracks.forEach((track) => {
    sum += track.length;
     debugger;
  })
  return (sum/60) + ' minutes';
};

Playlist.prototype.getOverallRating = function () {
  let sum = 0;
  this.tracks.forEach((track) => {
    sum += track.rating;
  })
   return sum/(this.tracks.length) + ' average rating';
};

track1 = new Track('californication', 5, 300);
track2 = new Track('imagine', 4, 200);
track3 = new Track('hey jude', 3, 500);
LibMitch = new Library("MyMusic", "Mitch ONeill");
PlMitch = new Playlist("Tunes")

PlMitch.tracks.push(track1, track2, track3);
LibMitch.playlists.push(PlMitch);
console.log(LibMitch);
console.log(PlMitch);
console.log(PlMitch.getTotalDuration());
console.log(PlMitch.getOverallRating());
