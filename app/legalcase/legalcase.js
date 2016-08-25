'use strict'

function LegalCase(name, describe) {
    this.name = name;
    this.describe = describe;
    this.calculator = this.createCalculator();
}

LegalCase.prototype.name;
LegalCase.prototype.describe;
/** 标的额 案件总额*/
LegalCase.prototype.targetAmount;
/** 诉讼费 */
LegalCase.prototype.legalFee;
LegalCase.prototype.calculator = {};
LegalCase.prototype.createCalculator = function(){};

module.exports = LegalCase;
