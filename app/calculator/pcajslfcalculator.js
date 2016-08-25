'use strict'
/**
 * 破产案件受理费计算器
 */

import CaseCaculator from './casecalculator';

function PCAJSLFCalculator() {
    CaseCaculator.call(this);
};

PCAJSLFCalculator.prototype = new CaseCaculator();

PCAJSLFCalculator.prototype.getResult = function () {
    var result = 0;
    var input = this.prototype.getCurrentInputValue();
    if ((input > 0) && (input <= 10000)) {
        result = 25;
    } else if ((input > 10000) && (input <= 100000)) {
        result = (input * 0.025 - 200) / 2;
    } else if ((input > 100000) && (input <= 200000)) {
        result = (input * 0.02 + 300) / 2;
    } else if ((input > 200000) && (input <= 500000)) {
        result = (input * 0.015 + 1300) / 2;
    } else if ((input > 500000) && (input <= 1000000)) {
        result = (input * 0.01 + 3800) / 2;
    } else if ((input > 1000000) && (input <= 2000000)) {
        result = (input * 0.009 + 4800) / 2;
    } else if ((input > 2000000) && (input <= 5000000)) {
        result = (input * 0.008 + 6800) / 2;
    } else if ((input > 5000000) && (input <= 10000000)) {
        result = (input * 0.007 + 11800) / 2;
    } else if ((input > 10000000) && (input <= 20000000)) {
        result = (input * 0.006 + 21800) / 2;
    } else if (input > 20000000) {
        result = (input * 0.005 + 41800) / 2;
    }
    if ((result >= 300000)) {
        result = 300000;
    }
    return this.prototype.formatNumber(result);
};

module.exports = PCAJSLFCalculator;