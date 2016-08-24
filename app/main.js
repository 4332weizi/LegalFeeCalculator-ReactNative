'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
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
                    <View style={styles.titleSpinner}>
                        <Text style={{width: 130, marginRight: 10, fontSize: 18, textAlign: 'center', color: 'white'}}>财产案件受理费</Text>
                        <Image source={require("./img/ic_spinner_triangle.png")}></Image>
                    </View>
                    <View style={styles.titleFunction}>
                        <Image source={require("./img/ic_help_white.png")}></Image>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.calculatorDisplayContainer}>
                        <Text style={styles.calculatorResultDisplay}>121.50</Text>
                    </View>
                    <View style={styles.calculatorDisplayContainer}>
                        <Text style={styles.calculatorInputDisplay}>128600</Text>
                    </View>
                    <View style={styles.calculatorInputPanel}>
                        <View style={styles.calculatorRow}>
                            <Cell style={styles.calculatorCell}>7</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>8</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell}>9</Cell>
                            <View style={styles.verticalDivider}></View>
                            <Cell style={styles.calculatorCell} source={require("./img/ic_del.png")}></Cell>
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
                        <View style={[styles.calculatorRow, {flex: 2}]}>
                            <View style={[styles.calculatorInputPanel, {flex: 3}]}>
                                <View style={styles.horizontalDivider}></View>
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
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    title: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3F51B5'
    },
    titleSpinner: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleFunction: {
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    calculatorDisplayContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#f1f3f3'
    },
    calculatorResultDisplay: {
        flex: 1,
        marginRight: 10,
        fontSize: 60,
        textAlign: 'right',
        color: '#FF4081'
    },
    calculatorInputDisplay: {
        flex: 1,
        marginRight: 10,
        fontSize: 60,
        textAlign: 'right',
        color: '#FF4081'
    },
    calculatorInputPanel: {
        flex: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#c3c6c7'
    },
    horizontalDivider: {
        height: Pixel.toDp(2)
    },
    verticalDivider: {
        width: Pixel.toDp(2)
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
