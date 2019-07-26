@ECHO OFF
@rmdir build /s /q
node tools/r.js -o tools/build.js
@ECHO OFF
@copy "build\scripts\main.js" "build\main.js"
@rmdir "build\scripts" /s /q
@rmdir "build\lib" /s /q
@del  "build\build.txt"

@ECHO --------- build done ----------