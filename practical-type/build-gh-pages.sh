npx ng build --base-href "" ;
cp -r  ../docs/browser/* ../docs/ ;
cd .. ; git add . ; git commit -m "build" ;
git push ;
git push --tags  ;
