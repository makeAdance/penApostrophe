var path = require('path');

var apos = require('apostrophe')({
    shortName: 'pen',

    // See lib/modules for basic project-level configuration of our modules
    // responsible for serving static assets, managing page templates and
    // configuring user acounts.

    bundles: ['apostrophe-blog'],


    modules: {
        'apostrophe-blog': {},
        'apostrophe-blog-pages': {},
        'apostrophe-blog-widgets': {},

        // Apostrophe module configuration

        // Note: most configuration occurs in the respective
        // modules' directories. See lib/apostrophe-assets/index.js for an example.

        // However any modules that are not present by default in Apostrophe must at
        // least have a minimal configuration here: `moduleName: {}`

        // If a template is not found somewhere else, serve it from the top-level
        // `views/` folder of the project

        'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
        'registration': {},
        'profiles': {},
        'apostrophe-express': {
            session: {
                secret: 'xyzpdq'
            }
        },

        'two-column-widgets': {},



        /**
         * 
         * NPM apostrophe-workflow
         * https://www.npmjs.com/package/apostrophe-workflow
         * 
         */
        'apostrophe-workflow': {
            prefixes: {
                'de': '/de',
                'en': '/en'
            },
            locales: [
                {
                    name: 'en',
                    label: 'EN'
                },
                {
                    name: 'de',
                    label: 'DE'
                }
            ],
            defaultLocale: 'en',
            // IMPORTANT: if you follow the examples below,
            // be sure to set this so the templates work
            alias: 'workflow'
        },

        'apostrophe-i18n': {

            // setup some locales - other locales default to defaultLocale silently
            locales: ['en', 'de', 'es'],

            // you may alter a site wide default locale (optional, defaults to 'en')
            defaultLocale: 'de',

            // sets a custom cookie name to parse locale settings from  - defaults to apos_language (optional)
            // cookie: 'apos_language',

            // whether to write new locale information to disk automatically - defaults to true (you will want to shut it off in production)
            // updateFiles: false

            // directory: './mylocales',
            // queryParameter: 'lang',
            register: global



        }

    }
});

