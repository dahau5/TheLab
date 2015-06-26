module.exports = function (config) {
    config.set({

        basePath: '../app',

        preprocessors: {
            '**/*.html': 'ng-html2js'
        },

        files: [
          { pattern: 'lib/angular/angular.js', included: false}, // {pattern: <>} added by me (in all instances)
          { pattern: 'lib/angular/angular-*.js', included: false},
          { pattern: 'lib/require.js' , included: false},
          { pattern: 'lib/angular/angular-mocks.js', included: false }, // mine; changed from 'lib/angular/angular-mocks.js',
          //'../test/lib/angular-mocks.js', // original (potentially old version)
          { pattern: '../test/lib/sinon-1.10.2.js', included: false },
          { pattern: 'js/**/*.js', included: false },
          {pattern: 'lib/angular/ngMock.js', included: false}, // mine; changed from 'lib/angular/ngMock.js',
          { pattern: 'lib/angular/ngAnimateMock.js', included: false }, // mine
          '../test/unit/**/*.js',
          { pattern: 'partials/directives/*.html', included: false }
        ],


        // entire exclude block added by me 
        exclude: [
            // 'js/app.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine', 'requirejs'],

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