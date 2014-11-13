//var osm = require('../util/osm-db');
var overpass = require('../util/overpass');

exports.listAll = function(req, res, next) {

  var query = overpass.q()
    .all('natural', 'water')
    .all('water')
    .all('waterway')
    .bbox(47.18434599683008,4.950370788574219,47.388355301990096,5.3125762939453125)
  ;


  console.log(query.toString());

  overpass.exec(query)
    .then(function(waters) {
      return res.status(200).send(waters);
    })
    .catch(next);

  /*osm.select(osm.raw('osm_id, name, ST_AsGeoJSON(way) as geom'))
    .from('planet_osm_way')
    .where(function() {
      this.whereNotNull('water')
        .orWhere('natural', 'water')
        .orWhereNotNull('waterway');
    })
    .map(function(item) {
      item.geom = JSON.parse(item.geom);
      return item;
    })
    .then(function(waters) {
      return res.status(200).send(waters);
    })
    */

};
