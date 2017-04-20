(function() {
  function timecode() {
    return function(seconds) {

      var seconds = Number.parseFloat(seconds);

      output = buzz.toTimer(seconds);
      if (output[0] == 0) {
        output = output.slice(1);
      }
      
      return output;
    }
  }

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
