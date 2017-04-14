(function(){
  function SongPlayer(){
    var currentSong = null; //initialize current song to null, no song is playing on page load. this gets compared to song, which is the songItem in album.albumData.songs
    /*
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null; //initialize buzz object. this is the buzz library obj  ect we call methods on to activate API and actually play the music
    /*
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {// if current buzz object is truthy, then there is a song song playing, stop the buzz object song and set current song to null
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    SongPlayer.play = function(song) {
        if (currentSong !== song) { //if no song is playing/currently playing song is not equal to the song being clicked on, then pass in the new song
          setSong(song);
          currentBuzzObject.play();
          song.playing = true;
        } else if (currentSong === song) { //if current song playing is equal to song being clicked on
          if (currentBuzzObject.isPaused()){ //if current buzz library song is paused, then play it
            currentBuzzObject.play();
          }
        }
    };

    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
