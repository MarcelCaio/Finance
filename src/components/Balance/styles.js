import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 38,
        paddingEnd: 38,
        marginTop: -30,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    currencySymbol: {
        color: '#dadada',
        marginRight: 6,

    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    },
    skeleton: {
        width: 40,
        height: 20,
        marginTop: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    }
});

export default styles;