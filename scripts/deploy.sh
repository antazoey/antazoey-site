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
  deploy_dir="${1:-Missing required parameter 'deploy_dir' at param1.}"

  npm run clean
  npm run build

  # Remove files that will be regenerated with different names.
  rm -rf ${deploy_dir}/vendors~pdfjsWorker.*

  cp -r dist/* "${deploy_dir}"
  pushd "${deploy_dir}"
  git pull
  git add --all

  git status  # for logging purposes

  git commit -m "Deploy"
  git push
  popd
}

if [[ -z "${PORTFOLIO_SITE_PATH}" ]]; then
  echo "Must set environment variable PORTFOLIO_SITE_PATH"
  echo "See README for more instructions."
  exit 1
fi

main "$@" "${PORTFOLIO_SITE_PATH}"
