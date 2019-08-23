PREV_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
PREV_VERSION="$(echo  "${PREV_VERSION}" | tr -d '[:space:]')"
echo "npm version patch -m "Bump up version""
npm version patch -m "Upgrade to %s"
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
PACKAGE_VERSION="$(echo  "${PACKAGE_VERSION}" | tr -d '[:space:]')"
echo "npm pack"
npm pack
echo "rm react-generator-$PREV_VERSION.tgz"
rm react-generator-$PREV_VERSION.tgz