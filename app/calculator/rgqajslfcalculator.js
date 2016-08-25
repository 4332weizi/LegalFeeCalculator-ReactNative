'use strict'
/**
 * 人格权案件受理费计算器
 */

import CaseCalculator from './casecalculator';

function RGQAJSLFCalculator() {
    CaseCalculator.call(this);
};

RGQAJSLFCalculator.prototype = new CaseCalculator();

RGQAJSLFCalculator.prototype.getResult = function () {
    var result;
    var input = this.prototype.getCurrentInputValue();
    if ((input > 50000) && (input <= 100000)) {
        result = (input - 50000) * 0.01;
        return this.prototype.formatNumber(result) + " + (100~500)";
    } else if (input > 100000) {
        result = (input - 100000) * 0.005 + 500;
        return this.prototype.formatNumber(result) + " + (100~500)";
    }
    return "100~500";
};

module.exports = RGQAJSLFCalculator;
