/**
 * Created by ZHAOWEIWEI on 2016/8/18.
 */
'use strict';

const LegalFeeApp = {
    get Cell() {
        return require('./app/cell');
    },
    get Main() {
        return require('./app/main');
    },
    get Pixel() {
        return require('./app/utils/pixel');
    },
    get Screen() {
        return require('./app/utils/screen');
    }
};

module.exports = LegalFeeApp;