npx ng build --base-href "/practical-typing.com/" ;
cp -r  ../docs/browser/* ../docs/ ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
