'use strict';

import React, {Component} from 'react';
import {
    Platform,
    AppRegistry,
    StyleSheet,
    StatusBar,
    Text,
    View,
    Image,
    Picker,
    PixelRatio
} from 'react-native';
import {
    Cell,
    Pixel
} from '../legalfeeapp';
import CCAJSLFCase from './legalcase/ccajslfcase';
import CCBQSQFCase from './legalcase/ccbqsqfcase';
import QZZXSQFCase from './legalcase/qzzxsqfcase';
import LHAJSLFCase from './legalcase/lhajslfcase';
import ZFLSQFCase from './legalcase/zflsqfcase';
import RGQAJSLFCase from './legalcase/rgqajslfcase';
import PCAJSLFCase from './legalcase/pcajslfcase';
import ZSCQAJSLFCase from './legalcase/zscqajslfcase';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#303F9F" barStyle="light-content"/>
                <View style={styles.title}>
                    <View style={styles.titleSpinner}>
                        <Picker
                            style={styles.titlePicker}
                            mode="dropdown"
                            onValueChange={(name) => this.setState({language: name})}>
                            <Picker.Item style={styles.titlePickerItem} label={new CCAJSLFCase().name} value={new CCAJSLFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new CCBQSQFCase().name} value={new CCBQSQFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new QZZXSQFCase().name} value={new QZZXSQFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new LHAJSLFCase().name} value={new LHAJSLFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new ZFLSQFCase().name} value={new ZFLSQFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new RGQAJSLFCase().name} value={new RGQAJSLFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new PCAJSLFCase().name} value={new PCAJSLFCase().name}/>
                            <Picker.Item style={styles.titlePickerItem} label={new ZSCQAJSLFCase().name} value={new ZSCQAJSLFCase().name}/>
                        </Picker>
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
            height: (Platform.OS == 'ios')?70:50,
            paddingTop:(Platform.OS == 'ios')?20:0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#3F51B5'
        }
        ,
        titleSpinner: {
            height: 50,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        titlePicker: {
            width: 130,
            color: 'white'
        },
        titlePickerItem: {
            width: 130,
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
        }
        ,
        calculatorDisplayContainer: {
            flex: 3,
            flexDirection: 'row',
            alignItems: 'flex-end',
            backgroundColor: '#f1f3f3'
        }
        ,
        calculatorResultDisplay: {
            flex: 1,
            marginRight: 10,
            fontSize: 60,
            textAlign: 'right',
            color: '#FF4081'
        }
        ,
        calculatorInputDisplay: {
            flex: 1,
            marginRight: 10,
            fontSize: 60,
            textAlign: 'right',
            color: '#FF4081'
        }
        ,
        calculatorInputPanel: {
            flex: 10,
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#c3c6c7'
        }
        ,
        horizontalDivider: {
            height: Pixel.toDp(2)
        }
        ,
        verticalDivider: {
            width: Pixel.toDp(2)
        }
        ,
        calculatorRow: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#c3c6c7'
        }
        ,
        calculatorCell: {
            flex: 1,
            backgroundColor: 'white'
        }
    })
    ;

module.exports = Main;
