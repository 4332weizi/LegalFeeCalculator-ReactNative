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
    }
};

module.exports = LegalFeeApp;