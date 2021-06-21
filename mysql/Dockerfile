FROM mysql:5.7 AS mysql-start

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE nodedb

COPY create-schema.sql /docker-entrypoint-initdb.d/
