npx ng build --base-href "home" ;
cp -r  ../docs/browser/* ../docs/ ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
