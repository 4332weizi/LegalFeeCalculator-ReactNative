'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
}from 'react-native';

var Cell = React.createClass({
    render: function () {
        var props = this.props;
        if (props.source == null) {
            return (<View style={[styles.container, props.style]}>
                <Text style={styles.text}>{childrenAsString(this.props.children)}</Text>
            </View>);
        } else {
            return (<View style={[styles.container, props.style]}>
                <Image style={styles.image} source={props.source}>
                </Image>
            </View>);
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
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        color: '#595d66',
        backgroundColor: '#fff0'
    },
    image: {}
});

module.exports = Cell;