#!/bin/bash
git rm -rf smarty-billing-api-docs/*
git rm -rf smarty-tvmw-api-docs/*
git rm -rf smarty-viewstats-api-docs/*
mkdir -p smarty-billing-api-docs
mkdir -p smarty-tvmw-api-docs
mkdir -p smarty-viewstats-api-docs
git add *
git commit -a -m "clean docs"