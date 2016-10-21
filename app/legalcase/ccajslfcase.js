'use strict'
/**
 * 财产案件受理费
 */

import LegalCase from './legalcase'
import CCAJSLFCalculator from '../calculator/ccajslfcalculator'

function CCAJSLFCase() {
    LegalCase.call(this, "财产案件受理费", "财产案件根据诉讼请求的金额或者价额，按照下列比例分段累计交纳：1.不超过1万元的，每件交纳50元；2.超过1万元至10万元的部分，按照2.5％交纳；3.超过10万元至20万元的部分，按照2％交纳；4.超过20万元至50万元的部分，按照1.5％交纳；5.超过50万元至100万元的部分，按照1％交纳；6.超过100万元至200万元的部分，按照0.9％交纳；7.超过200万元至500万元的部分，按照0.8％交纳；8.超过500万元至1000万元的部分，按照0.7％交纳；9.超过1000万元至2000万元的部分，按照0.6％交纳；10.超过2000万元的部分，按照0.5％交纳。");
}

CCAJSLFCase.prototype = new LegalCase();

CCAJSLFCase.prototype.createCalculator = function () {
    return new CCAJSLFCalculator();
};

module.exports = CCAJSLFCase;
