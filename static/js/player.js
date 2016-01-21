// load Iframe Player API asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var video = 'y-BE8iicBkg';

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: video
  });
}

// on click event player.loadVideoById(video);
d3.selectAll('.video-slot')
    .on('click', function(d) {
      var selected = d3.select(this);
      video = selected[0][0].dataset.val;
      player.loadVideoById(video);
    });
