FROM helmi03/docker-postgis

MAINTAINER William Petit <william.petit@ptitcloud.fr>

RUN apt-get install -y osm2pgsql

RUN sed "s/ssl = true/ssl = false/" --in-place /etc/postgresql/9.3/main/postgresql.conf

ADD init-database.sh /root/init-database.sh
RUN chmod +x /root/init-database.sh

ADD import.sh /root/import.sh
RUN chmod +x /root/import.sh
