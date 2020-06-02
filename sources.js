const mapSources = [
  [
    'tempCurrent_v3',
    {
      'type': 'vector', //was timeseries1
      'url': 'mapbox://noah-b.3i73umo3' //pretty sure this is the right one
    }
  ],

  [
    'tempMidcentury_v3',
    {
      'type': 'vector',
      'url': 'mapbox://noah-b.640g7u16'
    }
  ]/*,

 [
    'hoverSource', //not sure what this did
    {
      'type': 'vector',
      'url': 'mapbox://noah-b.80v5d5mj'
    }
  ] */

];

//Sources for right map, do not have the null data removed
const mapSources2  = [
  [
    'tempMidcentury_v3_RightMap',
    {
      'type': 'vector',
      'url': 'mapbox://noah-b.djac42i6'
    }
  ],
  [
    'tempCurrent_v3_RightMap',
    {
      'type': 'vector', //was timeseries1
      'url': 'mapbox://noah-b.dj17gzli' //pretty sure this is the right one
    }
  ]
];
