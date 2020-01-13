#!/bin/bash

token=$(gcloud auth application-default print-access-token)

if [ $# -eq 0 ] || [ $1 = step1 ] ; then

    curl -s "https://cloudbuild.googleapis.com/v1/projects/${PROJECT_ID}/triggers" \
    -H 'accept-encoding: gzip, deflate, br' \
    -H 'accept-language: en-US,en;q=0.9' \
    -H "authorization: Bearer ${token}" \
    -H 'pragma: no-cache'  \
    -H 'accept: application/json' \
    -H 'cache-control: no-cache' \
    --compressed \
    --output triggers_file.json

elif [ $1 = step2 ] ; then

    curl "https://cloudbuild.googleapis.com/v1/projects/${PROJECT_ID}/triggers/$(cat trigger_id_file):run?access_token=${token}" \
    -X POST \
    -H 'pragma: no-cache' \
    -H 'content-type: application/json' \
    -H 'cache-control: no-cache'  \
    -d @trigger_template.json \
    --compressed

fi
