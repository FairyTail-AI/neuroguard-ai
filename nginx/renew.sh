#!/bin/bash

DOMAIN="neuroguard.ai"
EMAIL="asgardpavlov@gmail.com"
DOCKER_COMPOSE_DIR="/opt/neuroguard-ai"

echo "Stopping nginx container..."
docker compose -f "$DOCKER_COMPOSE_DIR/docker-compose.yaml" stop nginx

echo "Renewing certificate..."
certbot certonly --standalone -d "$DOMAIN" --non-interactive --agree-tos -m "$EMAIL" --keep-until-expiring

echo "Copying new certificates..."
cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem "$DOCKER_COMPOSE_DIR/nginx/certs/"
cp /etc/letsencrypt/live/$DOMAIN/privkey.pem "$DOCKER_COMPOSE_DIR/nginx/certs/"

echo "Starting nginx container..."
docker compose -f "$DOCKER_COMPOSE_DIR/docker-compose.yaml" start nginx

echo "Certificate renewed successfully."