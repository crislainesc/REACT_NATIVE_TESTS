const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE
    ? 'Android GoogleAPI Emulator'
    : 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? '7.1' : null;

const androidCaps = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
        process.env.ANDROID_PLATFORM_VERSION ||
        DEFAULT_ANDROID_PLATFORM_VERSION,
    app: undefined, // Will be added in tests
};

const androidWebCaps = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
    platformVersion:
        process.env.ANDROID_PLATFORM_VERSION ||
        DEFAULT_ANDROID_PLATFORM_VERSION,
    browserName: 'chrome',
};

const serverConfig = {
    path: '/wd/hub',
    host: process.env.APPIUM_HOST || 'localhost',
    port: process.env.APPIUM_PORT || 4723,
    logLevel: 'info',
};

const androidOptions = Object.assign(
    {
        capabilities: androidCaps,
    },
    serverConfig
);

const androidWebOptions = Object.assign(
    {
        capabilities: androidWebCaps,
    },
    serverConfig
);

module.exports = {
    androidOptions,
    androidWebOptions,
};
