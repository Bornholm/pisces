#!/bin/bash

DIR=$(dirname $(readlink -m $0))

set -e

REGION=europe/france/bourgogne

cd data/osm-import/

wget -N -c http://download.geofabrik.de/${REGION}-latest.osm.pbf
wget -N http://download.geofabrik.de/${REGION}-latest.osm.pbf.md5

md5sum -c *.md5

FILE=$(find "${DIR}/../data/osm-import" -name *-latest.osm.pbf)
ln "${FILE}" "${DIR}/../data/osm-import/import.pbf"
