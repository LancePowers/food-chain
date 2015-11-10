var lyrics = require('./song');

function Song(song) {
    this.song = song;
    this.songArray = '';
};
Song.prototype.verse = function (num) {
    var position = num - 1;
    this.songArray = this.song.split('\n\n');
    var verses = this.songArray.slice(position, num)
    return verses.join('\n') + '\n';
}

Song.prototype.verses = function (num, num2) {
    var verses = "";
    for (var i = 0; i < num2; i++) {
        verses += this.verse(i + 1) + '\n';
    }
    return verses;
}

module.exports = new Song(lyrics);