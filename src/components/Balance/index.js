import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MotiView } from 'moti';

import styles from './styles';

export default function Balance({ saldo, gastos }) {
    const [showBalance, setShowBalance] = useState(false);
    const [showExpenses, setShowExpenses] = useState(false);
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}>
            <TouchableOpacity style={styles.item} onPress={() => setShowBalance(!showBalance)}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    {showBalance ? (
                        <Text style={styles.balance}>
                            {saldo}
                        </Text>
                    ) : (
                        <View style={styles.skeleton}>

                        </View>
                    )}
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => setShowExpenses(!showExpenses)}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    {showExpenses ? (
                        <Text style={styles.expenses}>
                            {gastos}
                        </Text>
                    ) : (
                        <View style={styles.skeleton}>

                        </View>
                    )}

                </View>
            </TouchableOpacity>
        </MotiView>
    );
}

