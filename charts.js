// Function to add an engine to the correct data set
addEngine = function( data ) {
  var radius = Math.PI * data.diameter / 2 * data.height;
  radius = Math.pow( radius, 0.5 ) * 10;

  var bdw = Math.pow( Math.max( data.cost / 1000, 0.5 ), 0.5 );

  var twr = data.thrust / ( data.weight * 9.807 );

  if ( radius > 100 ) {
    radius = radius / 10;
    bdw = bdw / 10;
    dataset = window.data0;
  } else if ( radius > 10 ) {
    radius = radius / 5;
    bdw = bdw / 5;
    dataset = window.data1;
  } else {
    radius = radius;
    bdw = bdw;
    dataset = window.data2;
  }

  dataset.datasets.push({
    label: data.label,
    data: [{
      x: twr,
      y: data.thrust,
      r: radius,
    }],
    backgroundColor: data.color,
    borderColor: 'black',
    borderWidth: bdw,
  });
}


// Initialize variables
window.sizes = [];
var color = new RColor;
data0 = {datasets: []};
data1 = {datasets: []};
data2 = {datasets: []};

// Add non stock engines to datasets
for (var i = engines.length - 1; i >= 0; i--) {
  var curr = engines[i];
  if ( typeof curr.color != undefined ) curr.color = color.get(true, 0.9, 0.85);
  addEngine( curr );
}

// Add stock engines to datasets
for (var i = stockEngines.length - 1; i >= 0; i--) {
  var curr = stockEngines[i];
  if ( typeof curr.color != undefined ) curr.color = color.get(true, 0.10, 0.85);
  addEngine( curr );
}

// Manage options for charts
chartOptions = {
  layout: {
    padding: 50,
  },
  scales: {
    xAxes: [{
      ticks: {
        callback: function( value ) {
          return value + ' g0 ';
        }
      }
    }],
    yAxes: [{
      type: 'logarithmic',
      ticks: {
        callback: function( value ) {
          if ( value < 99 ) {
            return Math.floor( value * 1000 ) + ' N';
          } else if ( value < 9900 ) {
            return Math.floor( value ) + ' KN';
          } else {
            return Math.floor( value / 1000 ) + ' MN';
          }
        }
      }
    }]
  },
  legend: {
    display: false,
    generateLabels: function(chart) {
    }
  }
};

// Create bubble charts for big, small, and tiny engines
var myBubbleChart = new Chart(document.getElementById("engineChart0"),{
    type: 'bubble',
    data: data0,
    options: chartOptions
});
var myBubbleChart = new Chart(document.getElementById("engineChart1"),{
    type: 'bubble',
    data: data1,
    options: chartOptions
});
var myBubbleChart = new Chart(document.getElementById("engineChart2"),{
    type: 'bubble',
    data: data2,
    options: chartOptions
});
