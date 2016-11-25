for (var i = 0; typeof window["data"+i] != 'undefined'; i++) {
  var data = window["data"+i].datasets;
  var dom = $('#legend-container-' + i);
  $.each(data, function( k, v ) {
    dom.append(
      '<span class="color" style="background-color:'+v.backgroundColor+';"></span>'
    );
    // console.table( v );
  });
}