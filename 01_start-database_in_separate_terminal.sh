#!/bin/bash
docker run -p 5432:5432 --env POSTGRES_PASSWORD=password --name employee-feedback postgres:13.3-alpine

# cleanup afterwards
echo ""
echo ""
echo ""
echo "Removing database docker image again..."
docker rm employee-feedback

