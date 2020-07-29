#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://artem-stackbit.ngrok.io/project/5f21dd81f80a355c42b75bb8/webhook/build/pull > /dev/null
if [[ -z "${STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://artem-stackbit.ngrok.io/pull/5f21dd81f80a355c42b75bb8
fi
curl -s -X POST https://artem-stackbit.ngrok.io/project/5f21dd81f80a355c42b75bb8/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://artem-stackbit.ngrok.io/project/5f21dd81f80a355c42b75bb8/webhook/build/publish > /dev/null
