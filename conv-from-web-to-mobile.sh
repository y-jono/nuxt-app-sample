#!/bin/zsh

grep -l 'uri(/' ./dist/**/*.js | xargs sed -i.bak -e 's@uri(/@uri(./@g'
grep -l 'src="/' ./dist/**/*.html | xargs sed -i.bak -e 's@src="/@src="./@g'
grep -l 'href="/' ./dist/**/*.html | xargs sed -i.bak -e 's@href="/@src="./@g'
