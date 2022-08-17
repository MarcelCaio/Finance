import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
        height: 400,
    },
    new: {
        width: 60,
        height: 60,
        backgroundColor: '#8000ff',
        borderRadius: 50,
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default styles;