var rp = require('request-promise');
var osm2geojson = require('osmtogeojson');
var Query = require('./query');

var overpassEndpoint = 'http://overpass-api.de/api/interpreter';

exports.query = exports.q = function() {
  return new Query();
};

exports.exec = function(query) {
  return rp({
    url: overpassEndpoint,
    qs: {
      data: query instanceof Query ? query.toString() : query
    },
    json: true
  })
  .then(function(data) {
    return osm2geojson(data);
  })
  .catch(function(err) {
    console.error(err.stack);
  });
}
