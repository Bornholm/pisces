#!/bin/bash

DIR=$(dirname $(readlink -m $0))

set -e

REGION=europe/france/bourgogne

cd volumes/osm-import/

wget -N -c http://download.geofabrik.de/${REGION}-latest.osm.pbf
wget -N http://download.geofabrik.de/${REGION}-latest.osm.pbf.md5

md5sum -c *.md5

FILE=$(find "${DIR}/../volumes/osm-import" -name *-latest.osm.pbf)
rm -f "${DIR}/../volumes/osm-import/import.pbf"
ln "${FILE}" "${DIR}/../volumes/osm-import/import.pbf"
