for (var i = 0; typeof window["data"+i] != 'undefined'; i++) {
  var data = window["data"+i].datasets;
  var dom = $('#legend-container-' + i);
  $.each(data, function( k, v ) {
    // console.log( v );
    dom.append(
      '<span class="legend">' +
        '<span class="color" style="background-color:' + v.backgroundColor + ';"></span>' +
        '<span class="border" style="width:' + v.borderWidth + 'px;"></span>' +
        '<span class="text">' + v.label + '</span>' +
      '</span>'
    );
    // console.table( v );
  });
}