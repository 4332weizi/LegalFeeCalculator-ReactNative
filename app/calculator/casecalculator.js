'use strict';

import Calculator from './calculator';

function CaseCalculator() {
    Calculator.call(this);
    this.mCurrentDisplay = "0";
    this.clear();
}

CaseCalculator.prototype = new Calculator();

CaseCalculator.prototype.input = function (input) {

    if (this.mCurrentDisplay.contains(".") &&
        this.mCurrentDisplay.split("\\.").length > 1 && this.mCurrentDisplay.split("\\.")[1].length() == 2) {
        return this.getDisplay();
    }

    //输入0
    if (input == '0') {
        if (this.mCurrentDisplay == "0") {
            return this.getDisplay();
        }
    }

    //输入.
    if (input == '.') {
        if (this.mCurrentDisplay.contains(".")) {
            return this.getDisplay();
        }
        if (this.mCurrentDisplay == "") {
            this.mCurrentDisplay += "0";
            this.mCurrentDisplay += input;
            return this.getDisplay();
        }
    }

    if (this.mCurrentDisplay=="0" && input != '.') {
        this.mCurrentDisplay = "";
    }
    this.mCurrentDisplay += input;

    return this.getDisplay();
};

CaseCalculator.prototype.backspace = function () {
    if (this.mCurrentDisplay=="0") {
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
    this.mCurrentDisplay = "0";
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
    return number.toLocaleString();
};

CaseCalculator.prototype.formatDisplay = function (display) {
    return display.toLocaleString(display);
};

CaseCalculator.prototype.getResult = {};

module.exports = CaseCalculator;
