// See http://brunch.io for documentation.
exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/main.js"
    },
    stylesheets: {
      joinTo: "css/main.css"
    },
    templates: {
      joinTo: "js/main.js"
    }
  },
  // Configure your plugins
  plugins: {
      imageoptimizer: {
          smushit: true, // if false it use jpegtran and optipng, if set to true it will use smushit
         imagePath: 'images' // your image path within your public folder
     },
     autoReload: {
         enabled: {
             css: true,
             js: true,
             assets: true
         }
     }
  },

    npm: {
        enabled: true
    },

    overrides: {
        testing: {
            sourceMaps: false
        }
  }
};
