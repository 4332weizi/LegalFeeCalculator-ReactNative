'use strict';

import {Dimensions} from 'react-native';

const Screen = {
    get width() {
        return Dimensions.get('window').width;
    },
    get height() {
        return Dimensions.get('window').height;
    }
};

module.exports = Screen;