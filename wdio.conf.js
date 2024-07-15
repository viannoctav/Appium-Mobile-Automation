const notesPage = require('./pageobjects/notes.page');

exports.config = {
    runner: 'local',
    port: 4723,  
    specs: [
        // ToDo: define location for spec files here
        'D://testingMobileAutomation//test//specs//**.spec.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        "appium:platformName": "Android",
        "appium:deviceName": 'Pixel',
        "appium:platformVersion": "13.0",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage":"com.socialnmobile.dictapps.notepad.color.note",
        "appium:appActivity":"com.socialnmobile.colornote.activity.Main",
        "appium:autoGrantPermissions": "true",
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    address: 'localhost',
                    port: 4723,
                    relaxedSecurity: true,
                },
                logPath: './',
            },
        ]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    hooks: {
        onPrepare: () => {
            require('ts-node').register({
                files: true,
                project: 'path/to/your/tsconfig.json',
                transpileOnly: true,
                shortCircuit: true,
            });
        },
    },
}
