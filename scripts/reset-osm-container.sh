#!/bin/bash

set -e

sudo rm -rf data/postgresql/9.3
fig rm --force tiles
fig build tiles
fig run tiles initdb startdb createuser createdb
