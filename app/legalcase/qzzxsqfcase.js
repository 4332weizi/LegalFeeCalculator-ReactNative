'use strict'
/**
 * 强制执行申请费
 */

import LegalCase from './legalcase';
import QZZXSQFCalculator from '../calculator/qzzxsqfcalculator';

function QZZXSQFCase() {
    LegalCase.call(this, "强制执行申请费", "执行费申请人不预交，由被申请人交纳。没有执行金额或者价额的，每件交纳50元至500元。执行金额或者价额不超过1万元的，每件交纳50元；超过1万元至50万元的部分，按照1.5％交纳；超过50万元至500万元的部分，按照1％交纳；超过500万元至1000万元的部分，按照0.5％交纳；超过1000万元的部分,按照0.1％交纳。");
};

QZZXSQFCase.prototype = new LegalCase();

QZZXSQFCase.prototype.createCalculator = function () {
    return new QZZXSQFCalculator();
};

module.exports = QZZXSQFCase;
