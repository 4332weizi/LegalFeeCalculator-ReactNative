'use strict'
/**
 * 财产保全申请费计算器
 */
import CaseCaculator from './casecalculator';

function CCBQSQFCalculator() {
    CaseCaculator.call(this);
};

CCBQSQFCalculator.prototype = new CaseCaculator();

CCBQSQFCalculator.prototype.getResult = function () {
    var result = 0;
    var input = this.prototype.getCurrentInputValue();
    if ((input > 0) && (input <= 1000)) {
        result = 30;
    } else if ((input > 1000) && (input <= 100000)) {
        result = input * 0.01 + 20;
    } else if (input > 100000) {
        result = input * 0.005 + 520;
    }
    if ((result >= 5000)) {
        result = 5000;
    }
    return this.prototype.formatNumber(result);
};

module.exports = CCBQSQFCalculator;