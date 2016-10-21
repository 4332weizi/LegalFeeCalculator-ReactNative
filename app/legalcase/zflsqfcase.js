'use strict'
/**
 * 支付令申请费
 */

import LeagalCase from './legalcase';
import ZFLSQFCalculator from '../calculator/zflsqfcalculator';

function ZFLSQFCase() {
    LeagalCase.call(this, "支付令申请费", "依法申请支付令的，比照财产案件受理费标准的1/3交纳。");
}

ZFLSQFCase.prototype = new LeagalCase();

ZFLSQFCase.prototype.createCalculator = function () {
    return new ZFLSQFCalculator();
};

module.exports = ZFLSQFCase;