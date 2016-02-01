// load video data
d3.csv('../static/data/youtube_videos.csv', function(data) {
  buildMenu(data);
});

function buildMenu(dataset) {
  var menu = d3.select('.vid-container');

  menu.selectAll('div')
      .data(dataset)
    .enter().append('div')
      .attr('class', 'video-slot')
      .append('p')
      .attr('class', 'video-title')
      .text(function(d) { return d.title; });

  d3.selectAll('.video-slot')
      .on('click', function(d) {
        video = d.id;
        player.loadVideoById(video);
        d3.select('.menu-slider')
            .classed('extended', false);
      });
}
