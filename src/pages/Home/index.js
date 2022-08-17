import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import Header from '../../components/Header/index';
import Balance from '../../components/Balance';

import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import PopUp from '../../components/PopUp';

import styles from './styles';
import list from '../../components/List';



export default function Home() {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={styles.container}>
            <Header name="Marcelo Antonio" />
            <Balance saldo="0,00" gastos="0,00" />
            <Actions />
            <Text style={styles.title}>Últimas Movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />

            <Modal isVisible={showModal}>
                <PopUp />
                <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </Modal>

            <TouchableOpacity style={styles.new} onPress={() => setShowModal(!showModal)}>
                <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
        </View>
    );
}


