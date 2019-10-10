#!/bin/bash

# print outputs and exit on first failure
set -xe

if [ $TRAVIS_BRANCH == "master" ] ; then

    # setup ssh agent, git config and remote
    eval "$(ssh-agent -s)"
    # ssh-add ~/.ssh/deployuser
    git remote add deploy "deploy@danielzamorano.pro:/var/www/danielzamorano.pro"
    git config user.name "Travis CI"
    git config user.email "travis@danielzamorano.pro"

    # commit compressed files and push it to remote
    rm -f .gitignore
    cp .travis/deployignore .gitignore
    git add build/
    git status # debug
    git commit -m "Deploy files"
    git push -f deploy HEAD:master
else

    echo "No deploy script for branch '$TRAVIS_BRANCH'"

fi