#!/usr/bin/bash

# Run as sudoer!

export SDOP_DB_NAME= # db name
export SDOP_DB_USER= # user name
export SDOP_DB_PASS= # user pass

docker volume create db-data
docker volume create trash

{
  docker compose build
  docker compose start
} ||
{
    docker-compose build
    docker-compose start
}

