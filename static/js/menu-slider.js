d3.select('.menu-slider')
    .on('click', function() {
      var menu = d3.select('.menu-slider');
      if (menu.classed('extended') === true) {
        menu.classed('extended', false);
        d3.select('.slider-control').style('display', 'block');
        d3.select('.slider-control-extended').style('display', 'none'); 
      } else {
        menu.classed('extended', true);
        d3.select('.slider-control-extended').style('display', 'block');
        d3.select('.slider-control').style('display', 'none');
      }
    });
