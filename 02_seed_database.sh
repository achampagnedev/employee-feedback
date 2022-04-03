#!/bin/bash
yarn prisma migrate dev
yarn prisma db seed --preview-feature