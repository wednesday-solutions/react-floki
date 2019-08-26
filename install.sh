#!/bin/bash
npm uninstall -g react-generator
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
PACKAGE_VERSION="$(echo  "${PACKAGE_VERSION}" | tr -d '[:space:]')"
npm install -g file:react-generator-$PACKAGE_VERSION.tgz