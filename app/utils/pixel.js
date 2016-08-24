'use strict';

import {PixelRatio} from 'react-native'
import Screen from './screen';

const Pixel = {
    toDp: function (pixel) {
        return pixel / PixelRatio.get();
    },
    get deviceHeightPixel() {
        return PixelRatio.getPixelSizeForLayoutSize(Screen.height);
    },
    get deviceWidthPixel() {
        return PixelRatio.getPixelSizeForLayoutSize(Screen.width);
    }
};

module.exports = Pixel;
