import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actButton}>
                <View style={styles.button}>
                    <AntDesign name="addfolder" size={26} color="#000000" />
                </View>
                <Text style={styles.labelButton}> Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actButton}>
                <View style={styles.button}>
                    <AntDesign name="tagso" size={26} color="#000000" />
                </View>
                <Text style={styles.labelButton}> Saídas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actButton}>
                <View style={styles.button}>
                    <AntDesign name="creditcard" size={26} color="#000000" />
                </View>
                <Text style={styles.labelButton}> Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actButton}>
                <View style={styles.button}>
                    <AntDesign name="barcode" size={26} color="#000000" />
                </View>
                <Text style={styles.labelButton}> Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actButton}>
                <View style={styles.button}>
                    <AntDesign name="setting" size={26} color="#000000" />
                </View>
                <Text style={styles.labelButton}> Contas</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

