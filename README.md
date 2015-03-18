# Angular App

An example angular application, build using gulp, browserify, sass and ‘other’ important technologies (see `package.json` for a full list of 3rd party tools used).

Feel free to rip out the pieces you want from this repo. It’s a pretty good starting point for any new angular app. There is still a bit of work to do, so please feel free to send a PR for any of the following…

- Minifying JS (bare in mind, the angular library ‘needs’ to be bundled with the application code)

# Installation

In your terminal/cmd `npm install`

# Running

In your terminal/cmd `gulp` or `node_modules/.bin/gulp`

Navigate to `http://localhost:8080`

(This project does not make use of livereload, mainly because I’m not a huge believer… I trust you know where your browser’s refresh button is. If you really want it, a quick google search will find you a fantastic copy-paste)

## Building

In your terminal/cmd `gulp build`

This will compile the SASS files, and the JS files into the `dist` directory.

There are sub-build tasks too. If you want to only compile the SASS files - `gulp sass`, if you want to only compile the JS files - `gulp js`.

## Watching

In your terminal/cmd `gulp watch`

This will first run the `build` task, and then watch for any changes, which will trigger the appropriate sub-build task.

## ‘Testing’

In your terminal/cmd `gulp serve`

This will launch a local web server on port 8080. The web server’s root is pointed to the `dist` directory. And supports the angular-route’s HTML5 mode.

# License Information

This project is only a few hours of work in total. So picking a license was easy… [WTFPL](http://www.wtfpl.net/txt/copying/)

Do what you want, it’s just code…