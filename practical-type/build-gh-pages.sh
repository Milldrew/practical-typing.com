npx ng build --base-href "hello" ;
cp -r  ../docs/browser/* ../docs/ ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
