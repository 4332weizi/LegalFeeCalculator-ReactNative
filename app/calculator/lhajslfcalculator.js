'use strict'
/**
 * 离婚案件受理费计算器
 */

import CaseCalculator from './casecalculator';

function LHAJSLFCalculator() {
    CaseCalculator.call(this);
};

LHAJSLFCalculator.prototype = new CaseCalculator();

LHAJSLFCalculator.prototype.getResult = function () {
    var result;
    var input = this.prototype.getCurrentInputValue();
    if (input > 200000) {
        result = (input - 200000) * 0.005;
        return this.prototype.formatNumber(result) + " + (50~300)";
    }
    return "50~300";
};

module.exports = LHAJSLFCalculator;