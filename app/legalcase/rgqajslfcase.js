'use strict'
/**
 * 人格权案件受理费
 */

import LegalCase from './legalcase';
import RGQAJSLFCalculator from '../calculator/rgqajslfcalculator';

function RGQAJSLFCase() {
    LegalCase.call(this, "人格权案件受理费", "侵害姓名权、名称权、肖像权、名誉权、荣誉权以及其他人格权的案件，每件交纳100元至500元。涉及损害赔偿，赔偿金额不超过5万元的，不另行交纳；超过5万元至10万元的部分，按照1％交纳；超过10万元的部分，按照0.5％交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。");
};

RGQAJSLFCase.prototype = new LegalCase();

RGQAJSLFCase.prototype.createCalculator = function () {
    return new RGQAJSLFCalculator();
};

module.exports = RGQAJSLFCase;