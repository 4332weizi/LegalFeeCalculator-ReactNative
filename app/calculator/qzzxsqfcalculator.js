'use strict'
/**
 * 强制执行申请费计算器
 */

import CaseCalculator from './casecalculator';

function QZZXSQFCalculator() {
    CaseCalculator.call(this);
};

QZZXSQFCalculator.prototype = new CaseCalculator();

QZZXSQFCalculator.prototype.getResult = function () {
    var result = 0;
    var input = this.prototype.getCurrentInputValue();
    if ((input > 0) && (input < 10000)) {
        result = 50;
    } else if ((input >= 10000) && (input <= 500000)) {
        result = input * 0.015 - 100;
    } else if ((input >= 500000) && (input <= 5000000)) {
        result = input * 0.01 + 2400;
    } else if ((input >= 5000000) && (input <= 10000000)) {
        result = input * 0.005 + 27400;
    } else if (input > 10000000) {
        result = input * 0.001 + 67400;
    }
    if (result != 0) {
        return this.prototype.formatNumber(result);
    } else {
        return "50~500";
    }
};

module.exports = QZZXSQFCalculator;