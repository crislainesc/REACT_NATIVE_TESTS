const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const app = require('../helpers/apps').androidApiDemos;
const androidOptions = require('../helpers/caps').androidOptions;

androidOptions.capabilities.app = app;

describe('Create Android session', function () {
    let client;

    before(async function () {
        client = await webdriverio.remote(androidOptions);
    });

    it('should navigate to OS options after morse code, input text and return', async function () {
        const osElement = await client.$('~OS');
        await osElement.click();

        const morseCodeElement = await client.$('~Morse Code');
        await morseCodeElement.click();

        const inputELement = await client.$('android.widget.EditText');
        await inputELement.setValue('Text input');

        await client.back();
        await client.back();
    });

    it('should navegar to Text options and check Linkify content', async function () {
        const textElement = await client.$('~Text');
        await textElement.click();

        const linkifyContent = await client.$('~Linkify').getText();

        assert.equal(linkifyContent, 'Linkify');
    });

    it('should create and destroy a session', async function () {
        const res = await client.status();
        assert.isObject(res.build);

        const current_package = await client.getCurrentPackage();
        assert.equal(current_package, 'io.appium.android.apis');

        const delete_session = await client.deleteSession();
        assert.isNull(delete_session);
    });
});
