#!/bin/bash

if cd ../build
then
    gsutil rsync -R . gs://www.juliyasmith.com
else
    echo "Failure to cd"
fi
echo "Synchronization complete."
