#!/bin/bash

/start.sh &

sleep 5

sudo -u postgres createuser gis
sudo -u postgres createdb -O gis gis
sudo -u postgres psql -d gis -f /usr/share/postgresql/9.3/contrib/postgis-2.1/postgis.sql
sudo -u postgres psql -d gis -c 'ALTER TABLE geometry_columns OWNER TO "gis"; ALTER TABLE spatial_ref_sys OWNER TO "gis";'
sudo -u postgres psql -d gis -f /usr/share/osm2pgsql/900913.sql
