import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

import styles from "./styles";

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <MotiView
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0,
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{
                    type: "spring",
                    duration: 800,
                    delay: 300
                }}
            >
                <MotiText
                    style={styles.username}
                    from={{
                        translateX: -300,
                        opacity: 0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1
                    }}
                    transition={{
                        type: "spring",
                        duration: 800,
                        delay: 800
                    }}
                >{name}</MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} >
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </MotiView>

        </View>
    )
}

