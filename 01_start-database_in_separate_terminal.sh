#!/bin/bash
docker run -p 5432:5432 --env POSTGRES_PASSWORD=password --name employee-feedback postgres:13.3-alpine

echo "Now please make sure that the .env-file is present"
