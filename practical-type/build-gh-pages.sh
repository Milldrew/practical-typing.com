npx ng build --base-href "/practical-typing.com/" ;
cp -r  ../docs/browser/* ../docs/ ;
rm -r ../docs/browser ;
# cp ../docs/index.html ../docs/404.html ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
