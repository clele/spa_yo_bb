Emanuele Rabino testing SPA
===========================

## Architecture:

### frameworks

* Yeoman tool (Yo + Bower + Grunt) via cli
* Backbone.js (depends on JQuery, Underscore.js)
* html5Shiv (older browsers)
* HTML5 semantic elements
* Sass-bootstrap (responsive grid)
* plugins (bxslider, jquery.validation)

### key points

* mvc (Backbone) needed only for: 4AjaxThings and ContactUs
* mvc (Backbone) (ab)used for "less/more" news button
* bxslider preferred for ltIE8 compatibility
* responsive grid (12 cols) with Bootstrap3. Some issues with IE6 rendering the form
* live tested on browserstack

### production version
[https://spa-yo-bb.herokuapp.com](https://spa-yo-bb.herokuapp.com)

#### notes
- slider images are not from psd, i'm currently without photoshop
- the page poorly resemble the creative, i'm not a designer and i'm very bad with CSS
