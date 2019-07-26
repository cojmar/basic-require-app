@ECHO OFF
@rmdir build /s /q
@node tools/r.js -o tools/build.js
@copy "build\scripts\main.js" "build\main.js"
@rmdir "build\scripts" /s /q
@rmdir "build\lib" /s /q
@rmdir "build\assets" /s /q
@del  "build\build.txt"
@del  "build\index.html"
@ren  "build\index.build.html" "index.html"

@ECHO --------- build done ----------