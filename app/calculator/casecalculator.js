'use strict';

import Calculator from './calculator';

function CaseCalculator() {
    Calculator.call(this);
    this.contains = function (str, substr) {
        return str.indexOf(substr) >= 0;
    };
    this.mCurrentDisplay = 0;
    this.clear();
}

CaseCalculator.prototype = new Calculator();

CaseCalculator.prototype.mCurrentDisplay = "";

CaseCalculator.prototype.input = function (input) {

    if (this.contains(this.mCurrentDisplay, '.') &&
        this.mCurrentDisplay.split('.').length > 1 && this.mCurrentDisplay.split('.')[1].length == 2) {
        return this.getDisplay();
    }

    //输入0
    if (input == '0') {
        if (this.mCurrentDisplay == '0') {
            return this.getDisplay();
        }
    }

    //输入.
    if (input == '.') {
        if (this.contains(this.mCurrentDisplay, '.')) {
            return this.getDisplay();
        }
        if (this.mCurrentDisplay == '') {
            this.mCurrentDisplay += '0';
            this.mCurrentDisplay += input;
            return this.getDisplay();
        }
    }

    if (this.mCurrentDisplay == '0' && input != '.') {
        this.mCurrentDisplay = '';
    }
    this.mCurrentDisplay += input;

    return this.getDisplay();
};

CaseCalculator.prototype.backspace = function () {
    if (this.mCurrentDisplay == "0") {
        return this.getDisplay();
    }
    if (this.mCurrentDisplay.length > 1) {
        this.mCurrentDisplay = this.mCurrentDisplay.substring(0, this.mCurrentDisplay.length - 1);
    } else if (this.mCurrentDisplay.length == 1) {
        this.mCurrentDisplay = "0";
    }
    return this.getDisplay();
};

CaseCalculator.prototype.clear = function () {
    this.mCurrentDisplay = '0';
    return this.getDisplay();
};

CaseCalculator.prototype.getDisplay = function () {
    if (this.mCurrentDisplay.length > 1 && this.mCurrentDisplay.charAt(this.mCurrentDisplay.length - 1) == '.') {
        return this.formatDisplay(this.mCurrentDisplay.substring(0, this.mCurrentDisplay.length - 1));
    }
    return this.formatDisplay(this.mCurrentDisplay);
};

CaseCalculator.prototype.getCurrentInputValue = function () {
    return parseFloat(this.mCurrentDisplay);
};

CaseCalculator.prototype.formatNumber = function (number) {
    number = number.toFixed(2);
    number += '';
    return this.formatDisplay(number);
};

CaseCalculator.prototype.formatDisplay = function (display) {
    var x = display.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

CaseCalculator.prototype.getResult = {};

module.exports = CaseCalculator;
