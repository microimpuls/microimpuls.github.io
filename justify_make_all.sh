#!/bin/bash
MW_PORTALS_DIR=../../git/mw_portals
CWD=$(pwd)

rm -rf justify-engine-main-jsdoc/*

rm -rf $MW_PORTALS_DIR/docs/out
cd $MW_PORTALS_DIR/docs

jsdoc -c engine.main.json
jsdoc -c impuls.main.json
jsdoc -c impuls.screens.json

cd $CWD

cp -R $MW_PORTALS_DIR/docs/out/engine/main/ justify-engine-main-jsdoc