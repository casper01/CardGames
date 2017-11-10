#!/bin/bash

git add -u
git add games/*
git status
echo -n "Commit message: "
read msg
git commit -m "$msg"
git log
