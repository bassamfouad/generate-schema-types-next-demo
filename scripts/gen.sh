#!/bin/bash
export $(egrep -v '^#' .env.local | xargs)
node node_modules/get-graphql-schema/dist/index.js --header x-caisy-apikey=$CAISY_API_KEY https://caisy.io/api/v1/e/$CAISY_ID/graphql >schema.graphql
node node_modules/@graphql-codegen/cli/cjs/bin.js
# rm -rf ./schema.graphql || true