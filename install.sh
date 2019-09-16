#!/bin/bash
echo "npm uninstall -g react-generator"
npm uninstall -g react-generator
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
echo "PACKAGE_VERSION: $PACKAGE_VERSION"
PACKAGE_VERSION="$(echo  "${PACKAGE_VERSION}" | tr -d '[:space:]')"
echo "npm install -g file:react-generator-$PACKAGE_VERSION.tgz"
npm install -g file:react-generator-$PACKAGE_VERSION.tgz
