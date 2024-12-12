node ./build-gh-pages.js
# npx ng build --base-href '/practical-typing.com/'
npx ng build --base-href '/';
# npx ng build --base-href
cp -r  ../docs/browser/* ../docs/ ;
rm -r ../docs/browser ;
cp ../docs/index.html ../docs/404.html ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
