'use strict'
/**
 * 破产案件受理费
 */

import LegalCase from './legalcase';
import PCAJSLFCalculator from '../calculator/pcajslfcalculator';

function PCAJSLFCase() {
    LegalCase.call(this, "破产案件受理费", "破产案件依据破产财产总额计算，按照财产案件受理费标准减半交纳，但是，最高不超过30万元。");
};

PCAJSLFCase.prototype = new LegalCase();

PCAJSLFCase.prototype.createCalculator = function () {
    return new PCAJSLFCalculator();
};

module.exports = PCAJSLFCase;