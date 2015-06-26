module.exports = function (config) {
    config.set({

        basePath: '../app',

        preprocessors: {
            '**/*.html': 'ng-html2js'
        },

        files: [
          'lib/angular/angular.js',// {pattern: <>} added by me (in all instances)
          'lib/angular/angular-*.js',
          'lib/require.js',
          // 'lib/angular/angular-mocks.js',// mine; changed from 'test/lib/angular-mocks.js',
          '../test/lib/angular-mocks.js', // original (potentially old version)
          '../test/lib/sinon-1.10.2.js',
          'js/**/*.js',
          'lib/angular/ngMock.js', // mine
          'lib/angular/ngAnimateMock.js', // mine
          '../test/unit/**/*.js',
          'partials/directives/*.html'
        ],


        // entire exclude block added by me 
        //exclude: [
            // 'js/app.js'
        //],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
                'karma-chrome-launcher',
                'karma-jasmine',
                'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};