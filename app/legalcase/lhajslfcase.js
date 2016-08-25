'use strict'
/**
 * 离婚案件受理费
 */

import LegalCase from './legalcase';
import LHAJSLFCalculator from '../calculator/lhajslfcalculator';

function LHAJSLFCase() {
    LegalCase.call(this, "离婚案件受理费", "离婚案件每件交纳50元至300元。涉及财产分割，财产总额不超过20万元的，不另行交纳；超过20万元的部分，按照0.5％交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。");
};

LHAJSLFCase.prototype = new LegalCase();

LHAJSLFCase.prototype.createCalculator = function () {
    return new LHAJSLFCalculator();
};

module.exports = LHAJSLFCase;