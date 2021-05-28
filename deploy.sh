#!/usr/bin/env bash
#
# Deploys the project code to the hosted site (GitHub).
#
# Usage:
# ./deploy.sh or `npm run deploy`.
#

set -euo pipefail


main() {
  # Should be the directory of the github site repo (the one that hosts the build files).
  deploy_dir="${1:?Missing required parameter 'deploy_dir' at param1.}"

  npm run build

  while '( -f ! /build)'; do
    sleep 10
    echo "Waiting for /build to exist"
  done

  mv build/* $deploy_dir
  cd $deploy_dir
  git add --all
  git commit -m "Deploy"
  git push
}

main "$@" $PORTFOLIO_SITE_PATH
