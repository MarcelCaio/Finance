import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';

import styles from './styles';

import list from '../../components/List';


export default function PopUp() {
    const [name, onChangeName] = useState("");
    const [value, onChangeValue] = useState("");
    const [date, onChangeDate] = useState("");


    // const ind = list.length;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Adicionar</Text>
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Nome"
                    onChangeText={value => onChangeName(value)}
                    value={name}
                />
                <Text></Text>
                <FloatingLabelInput
                    label="Valor"
                    onChangeText={value => onChangeValue(value)}
                    value={value}
                    maskType="currency"
                    currencyDivider="."
                    keyboardType="numeric"
                />
                <Text></Text>
                <FloatingLabelInput
                    label="Data"
                    onChangeText={value => onChangeDate(value)}
                    value={date}
                    mask="99/99/9999"
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={() => save(name, value, date)}>
                    <Text>Salvar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const save = (nome, valor, data) => {
    const i = list.length ? list.length + 1 : 1;
    console.log(`O log é ${i}`)
    list.push({
        id: i,
        label: `${nome}`,
        value: `${valor}`,
        date: `${data}`,
        type: 1
    });
}