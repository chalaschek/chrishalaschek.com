#!/bin/sh

JS_SOURCE = js/

JS_TARGETS =  jquery-1.9.1.min.js \
          jquery.tap.min.js \
          jquery.easing.1.3.min.js \
          jquery.scrollTo-1.4.3.1.min.js \
          modernizr.custom.min.js \
          swipe.min.js \
          imagesloaded.pckgd.min.js \
          underscore.min.js \
          stellar.min.js \
          site.js

CSS_SOURCE = css/

CSS_TARGETS =  bootstrap.css \
          bootstrap-responsive.css \
          swipe.css \
          site.css \
          site-responsive.css


build:
	@rm -f js/site.build.js
	@rm -f js/site.build.min.js
	@for file in $(JS_TARGETS) ; do \
		cat $(addprefix $(JS_SOURCE)/, $$file) ; \
		echo ; \
	done > $(JS_SOURCE)/site.build.js
	@./node_modules/uglify-js/bin/uglifyjs -nc -o $(JS_SOURCE)/site.build.min.js $(JS_SOURCE)/site.build.js
	@rm -f js/site.build.js

	rm -f css/site.build.css
	@for file in $(CSS_TARGETS) ; do \
		cat $(addprefix $(CSS_SOURCE)/, $$file) ; \
		echo ; \
	done > $(CSS_SOURCE)/site.build.css
