'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
}from 'react-native';

var Cell = React.createClass({
    render: function () {
        var props = this.props;
        if (props.source == null) {
            return (
                <TouchableHighlight style={[styles.container, props.style]} activeOpacity={props.activeOpacity}
                                    underlayColor={(props.underlayColor == null) ? "#e3e4e5" : props.underlayColor}
                                    onPress={props.onPress}>
                    <Text
                        style={[styles.text, {color: props.textColor}]}>{childrenAsString(this.props.children)}</Text>
                </TouchableHighlight>);
        } else {
            return (<TouchableHighlight style={[styles.container, props.style]} activeOpacity={props.activeOpacity}
                                        underlayColor={(props.underlayColor == null) ? "#e3e4e5" : props.underlayColor}
                                        onPress={props.onPress}>
                <Image style={styles.image} source={props.source}>
                </Image>
            </TouchableHighlight>);
        }
    }
});

function childrenAsString(children) {
    if (!children) {
        return '';
    }
    if (typeof children === 'string') {
        return children;
    }
    if (children.length) {
        return children.join('\n');
    }
    return '';
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        color: '#595d66',
        backgroundColor: 'transparent'
    },
    image: {}
});

module.exports = Cell;