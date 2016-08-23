'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';
import {
    Cell,
    Pixel
} from '../legalfeeapp';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text >标题</Text>
                </View>
                <View style={styles.content}>
                    <View style={{flex: 3, backgroundColor: '#f1f3f3'}}>
                        <Text >结果</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: '#f1f3f3'}}>
                        <Text >输入</Text>
                    </View>
                    <View style={styles.calculatorInputPanel}>
                        <View style={styles.calculatorRow}>
                            <Cell style={styles.calculatorCell}>7</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>8</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>9</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell} source={require("./img/ic_del@3x.png")}></Cell>
                        </View>
                        <View style={styles.horizontalDivider}></View>
                        <View style={styles.calculatorRow}>
                            <Cell style={styles.calculatorCell}>4</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>5</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>6</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell} textColor='#ff5d00'>C</Cell>
                        </View>
                        <View style={styles.horizontalDivider}></View>
                        <View style={[styles.calculatorRow, {flex: 2}]}>
                            <View style={{flex: 3}}>
                                <View style={styles.calculatorRow}>
                                    <Cell style={styles.calculatorCell}>1</Cell>
                                    <View style={styles.verticalDivider}></View>
                                    <Cell style={styles.calculatorCell}>2</Cell>
                                    <View style={styles.verticalDivider}></View>
                                    <Cell style={styles.calculatorCell}>3</Cell>
                                </View>
                                <View style={styles.horizontalDivider}></View>
                                <View style={styles.calculatorRow}>
                                    <Cell style={[styles.calculatorCell, {backgroundColor: '#e3e4e5'}]}></Cell>
                                    <View style={styles.verticalDivider}></View>
                                    <Cell style={styles.calculatorCell}>0</Cell>
                                    <View style={styles.verticalDivider}></View>
                                    <Cell style={styles.calculatorCell}>.</Cell>
                                </View>
                            </View>
                            <Cell style={[styles.calculatorCell, {backgroundColor: '#FF4081'}]}
                                  textColor='white'>=</Cell>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white'
    },
    title: {
        height: 50,
        backgroundColor: '#3F51B5'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    calculatorInputPanel: {
        flex: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#c3c6c7'
    },
    horizontalDivider: {
        height: Pixel.toDp(1)
    },
    verticalDivider: {
        width: Pixel.toDp(1)
    },
    calculatorRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#c3c6c7'
    },
    calculatorCell: {
        flex: 1,
        backgroundColor: 'white'
    }
});

module.exports = Main;