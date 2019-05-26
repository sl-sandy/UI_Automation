exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        smoke: 'tests/smoke/*.js',
        datadriven: 'tests/datadriven/*.js',
        browserlog: 'tests/browserlogs/*.js',
        regression: 'tests/regression/*.js',
        pageobject: 'tests/pageobject/pageObject.js'
    },
    specs: ['tests/browserlogs/browserlogs-1-spec.js']
};

