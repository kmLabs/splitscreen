

var timeSeriesStops =
  [
    0,
    7,
    14,
    21,
    28
  ];

var timeSeriesColors =
  [
  "rgba(254,240,217,0)",
  "#fef0d9",
  "#fdcc8a",
  "#fc8d59",
  "#e34a33",
  "#b30000"
  ];

//Colors don't matter, its the 0 at the end which indicate opacity
var outlineColors =
["rgba(254,240,217,0)",
 "rgba(253,204,138,0)",
 "rgba(252,141,89,0)",
 "rgba(227,74,51,0)",
 "rgba(179,0,0,0)"];


const dataPaint = {
  /*'fill-outline-color': [
     "step",
    ["get", "temp"],
    outlineColors[0], timeSeriesStops[0],
    outlineColors[1], timeSeriesStops[1],
    outlineColors[2], timeSeriesStops[2],
    outlineColors[3], timeSeriesStops[3],
    outlineColors[4]
  ],*/
  'fill-outline-color': 'rgba(001,001,001,0)', //Colors don't matter, its the 0 at the end which indicate opacity

  'fill-color': [
      "step",
      ["get", "temp"],

      timeSeriesColors[0], timeSeriesStops[0],
      timeSeriesColors[1], timeSeriesStops[1],
      timeSeriesColors[2], timeSeriesStops[2],
      timeSeriesColors[3], timeSeriesStops[3],
      timeSeriesColors[4], timeSeriesStops[4],
      timeSeriesColors[5]

  ],

/*
'fill-opacity':
 ["case",
      ["boolean", ["feature-state", "hover"], false],
      1,
      0
    ] //need to set everything to 0 at start or add a third case
*/

  'fill-opacity': 0
};



const mapLayers = [

  [{
      'id': 'temp-current-v3',
      'type': 'fill',
      'source': 'tempCurrent_v3',
      'source-layer': 'Current_W999Null-50do4l',
      //'fill-color' : '#fef0d9',
      'paint': dataPaint,
      /*'paint': {
        'fill-color': [
            "step",
            ["get", "temp"],
            "red", 7,
            "orange", 14,
            "yellow", 21,
            "green", 28,
            "blue"

          ],

      },
      */
      'layout': {}

  }],
  [{
    'id': 'temp-midcentury-v3',
    'type': 'fill',
    'source': 'tempMidcentury_v3',
    'source-layer': 'MidCen_W999Null-a9ruiw',
    'paint': dataPaint,

    'layout': {}
  }]


];


const mapLayersRight = [
  [{
    'id': 'temp-midcentury-v3_right',
    'type': 'fill',
    'source': 'tempMidcentury_v3_RightMap',
    'source-layer': 'WRFOUT_airtemp_Proj_geo_em_d0-7qwua7',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'temp-current-v3_right',
    'type': 'fill',
    'source': 'tempCurrent_v3_RightMap',
    'source-layer': 'WRFOUT_airtemp_Proj_geo_em_d0-1l4gvs',
    'paint': dataPaint,

    'layout': {}
  }]


];
