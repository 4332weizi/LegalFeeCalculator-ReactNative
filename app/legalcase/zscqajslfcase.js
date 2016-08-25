'use strict'
/**
 * 知识产权案受理费
 */

import LegalCase from './legalcase';
import ZSCQAJSLFCalculator from '../calculator/zscqslfcalculator';

function ZSCQAJSLFCase() {
    LegalCase.call(this, "知识产权案受理费", "知识产权民事案件，没有争议金额或者价额的，每件交纳500元至1000元；有争议金额或者价额的，按照财产案件的标准交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。");
}

ZSCQAJSLFCase.prototype = new LegalCase();

ZSCQAJSLFCase.prototype.createCalculator = function () {
    return new ZSCQAJSLFCalculator();
};

module.exports = ZSCQAJSLFCase;