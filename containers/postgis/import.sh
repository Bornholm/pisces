#!/bin/bash

/start.sh &

sleep 5

sudo -u postgres osm2pgsql --slim --database gis --number-processes $(nproc) $1
