(function(){
  function SongPlayer(Fixtures){
    /*
    * @desc private object to store album information using fixtures factory
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();
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
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      SongPlayer.currentSong = song;
    };

    /*
    * @function playSong
    * @desc plays currentBuzzObject and sets song object to true
    * @param song {Object}
    */
    var playSong = function(song){
      currentBuzzObject.play();
      song.playing = true;
    };

    /*
    * @function getSongIndex
    * @desc private function to return index of currently playing song
    */
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    };

    /*
    * @desc public object to hold index of currently playing song from our album object, or null if no song is playing
    * @type {Object}
    */
    SongPlayer.currentSong = null; //initialize current song to null, no song is playing on page load. this gets compared to song, which is the songItem in album.albumData.songs

    /*
    * @method play
    * @desc checks to see if song item number being clicked on is equal to SongPlayer.currentSong, if false - pauses current song, sets, plays new song, if true - checks to see if song is paused
    * @param song {Object}
    */
    SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong; //(1) song when we call the methods from album view, or (2) SongPlayer.currentSong when we call from player bar
        if (SongPlayer.currentSong !== song) { //if no song is playing/currently playing song is not equal to the song being clicked on, then pass in the new song
          setSong(song);
          playSong(song);
        } else if (SongPlayer.currentSong === song) { //if current song playing is equal to song being clicked on
          if (currentBuzzObject.isPaused()){ //if current buzz library song is paused, then play it
            playSong(song);
          }
        }
    };
    /*
    * @method pause
    * @desc pauses current song, sets .playing property to false
    * @param song {Object}
    */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    /*
    * @method previous
    * @desc gets index of previous song for player bar
    */
    SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;

     if (currentSongIndex < 0) {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
       } else {
           var previousSong = currentAlbum.songs[currentSongIndex];
           setSong(previousSong);
           playSong(previousSong);
       }
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', [ 'Fixtures', SongPlayer]);
})();
