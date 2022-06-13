#!/usr/bin/env sh

# abort on errors
set -e

yarn build

cd dist
# echo 'docs.frappebooks.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:frappe/books_docs.git main:gh-pages

cd -
