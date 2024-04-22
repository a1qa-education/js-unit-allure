import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import JavaScriptAlertsPage from '../pageObjects/JavaScriptAlertsPage.js'
import { assert } from 'chai'
import allureReporter from '@wdio/allure-reporter'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Tests', function () {
    it('Interation with JavaScript Alert', async function () {
        const url = 'https://the-internet.herokuapp.com/';

        allureReporter.addStep(`Browser opening on ${url}`);
        await Browser.openUrl(url);

        allureReporter.addStep(`Opening JavaScript Alerts Page`);
        await MainPage.clickNavigationLink('JavaScript Alerts');
        
        allureReporter.addStep(`Click on JavaScript Alrt Button`);
        await JavaScriptAlertsPage.clickForJSAlertButton();
        
        allureReporter.addStep(`Accept the Alert`);
        await JavaScriptAlertsPage.acceptJSAlert();

        allureReporter.addStep(`Check that alert accepted`);
        assert.strictEqual(await JavaScriptAlertsPage.getResultText(), successfulMessage, 'Wrong result of interation with JSAlert');
    })
})