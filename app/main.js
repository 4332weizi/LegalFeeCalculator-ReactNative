'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Cell
} from '../legalfeeapp';

class Main extends Component {
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
                    <View style={{
                        flex: 10,
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        backgroundColor: '#c3c6c7'
                    }}>
                        <View style={styles.calculatorRow}>
                            <Cell style={styles.calculatorCell}>7</Cell>
                            <Cell style={styles.calculatorCell}>8</Cell>
                            <Cell style={styles.calculatorCell}>9</Cell>
                            <Cell style={styles.calculatorCell} source={require("./img/ic_del@3x.png")}></Cell>
                        </View>
                        <View style={styles.calculatorRow}>
                            <Cell style={styles.calculatorCell}>4</Cell>
                            <Cell style={styles.calculatorCell}>5</Cell>
                            <Cell style={styles.calculatorCell}>6</Cell>
                            <Cell style={styles.calculatorCell}>C</Cell>
                        </View>
                        <View style={styles.calculatorRow}>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                        </View>
                        <View style={styles.calculatorRow}>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                            <Text style={styles.calculatorCell}>row1</Text>
                        </View>
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
    calculatorRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 0.2,
        backgroundColor: '#c3c6c7'
    },
    calculatorCell: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginLeft: 0.2
    }
});

module.exports = Main;