#!/usr/bin/env bash
#
# Deploys the project code to the hosted site (GitHub).
#
# Usage:
# ./deploy.sh or `npm run deploy`.
#

set -eu


main() {
  # Should be the directory of the github site repo (the one that hosts the build files).
  deploy_dir="${1:?Missing required parameter 'deploy_dir' at param1.}"

  npm run clean
  npm run build

  echo "Waiting for /build to exist..."
  sleep 25

  # Remove files that will be regenerated with different names.
  rm ${deploy_dir}/vendors~pdfjsWorker.*

  cp -r build/* "${deploy_dir}"
  pushd "${deploy_dir}"
  git pull
  git add --all

  git status  # for logging purposes

  git commit -m "Deploy"
  git push
  popd
}

main "$@" $PORTFOLIO_SITE_PATH
