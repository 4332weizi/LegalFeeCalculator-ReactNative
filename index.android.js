/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class LegalFee extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                <View style={{height: 50, backgroundColor: '#3F51B5'}}>
                    <Text >标题</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <View style={{flex: 3, backgroundColor: '#f1f3f3'}}>
                        <Text >结果</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: '#f1f3f3'}}>
                        <Text >输入</Text>
                    </View>
                    <View style={{flex: 10, flexDirection: 'column', backgroundColor: '#c3c6c7'}}>
                        <View style={{height: 0.1}}></View>
                        <View style={styles.calculatorRow}>
                            <Text style={{flex: 1, marginLeft: 0.1}}>row1</Text>
                            <Text style={{flex: 1, marginLeft: 0.1}}>row1</Text>
                            <Text style={{flex: 1, marginLeft: 0.1}}>row1</Text>
                            <Text style={{flex: 1, marginLeft: 0.1}}>row1</Text>
                        </View>
                        <View style={{height: 0.1}}></View>
                        <View style={styles.calculatorRow}><Text>row1</Text></View>
                        <View style={{height: 0.1}}></View>
                        <View style={styles.calculatorRow}><Text>row1</Text></View>
                        <View style={{height: 0.1}}></View>
                        <View style={styles.calculatorRow}><Text>row1</Text></View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    calculatorRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    }
});

AppRegistry.registerComponent('LegalFee', () => LegalFee);
