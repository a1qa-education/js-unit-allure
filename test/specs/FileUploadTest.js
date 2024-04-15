import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import FileUploaderPage from '../pageObjects/FileUploaderPages/FileUploaderPage.js'
import UploadedFilesPage from '../pageObjects/FileUploaderPages/UploadedFilesPage.js'
import { assert } from 'chai'
import * as path from 'path';

const fileName = 'test.txt';
const fullPathToFile = path.resolve(`./upload/${fileName}`);

describe('File Upload Test', () => {
    it('Check that file uploaded', async () => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('File Upload');
        assert.isTrue(await FileUploaderPage.isPageOpened(), 'File Uploader Page is not opened');

        await FileUploaderPage.uplaodFile(fullPathToFile);
        assert.strictEqual(await UploadedFilesPage.getUploadedFilesList(), fileName, 'Incorrest list of uploaded files');
    })
})