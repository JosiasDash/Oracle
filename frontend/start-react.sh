#!/bin/bash
folder_path="/home/josiasdh/React-template/"
feature="feature/*"
mkdir -p src/components/ui src/components/layout
mkdir -p src/features/Root src/hooks src/utils src/services src/config src/router src/styles
cp -r $folder_path$feature src/features/Root/
cp /home/josiasdh/React-template/RouterApp.jsx src/router/
cp /home/josiasdh/React-template/URLS.js src/
