(function(Pisces) {

  Pisces.Map = L.map('map').setView([47.3208995, 5.0372081], 11);

  var tilesLayer = L.tileLayer('http://localhost:8080/osm_tiles/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(Pisces.Map);

}(window.Pisces = window.Pisces || {}));
