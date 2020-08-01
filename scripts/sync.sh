#!/bin/bash

pushd $PORTFOLIO_PROJ_PATH
if [ -z ${PORTFOLIO_SITE_PATH+x} ]; then
  echo "Environment variable \$PORTFOLIO_SITE_PATH is unset. Please point it to local site."
  exit 1
else
  echo "Local Site Path: ${PORTFOLIO_SITE_PATH}"
fi

if [ -z ${PORTFOLIO_PROJ_PATH+x} ]; then
  echo "Environment variable \$PORTFOLIO_PROJ_PATH is unset. Please point it to local site."
  exit 1
else
  echo "Local Project Path: ${PORTFOLIO_PROJ_PATH}"
fi

# BUILD
rm -rf build &> /dev/null
npm run build

if [ $? -eq 0 ]; then
    echo BUILD DONE
else
    echo BUILD FAILED
    exit 1
fi

pushd $PORTFOLIO_SITE_PATH;
rm -rf css &> /dev/null
rm -rf images &> /dev/null
rm -rf js &> /dev/null
rm vendors* &> /dev/null
rm index.html &> /dev/null
mkdir css
mkdir images
mkdir js
popd
cp -R build/css/ $PORTFOLIO_SITE_PATH/css
cp -R build/js/ $PORTFOLIO_SITE_PATH/js
cp -R build/images/ $PORTFOLIO_SITE_PATH/images
cp build/index.html $PORTFOLIO_SITE_PATH
cp build/vendors* $PORTFOLIO_SITE_PATH
pushd $PORTFOLIO_SITE_PATH
git add .
git commit -m "Update"
git push -f
popd
popd
echo DONE