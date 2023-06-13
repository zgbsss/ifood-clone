import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.option} onPress={() => {}}> 
                    <MaterialCommunityIcons name="bell-outline" size={35} color="#333"/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Notificações</Text>
                        <Text style={styles.description}>Minha Central de Notificações</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Pagamentos')}>
                    <MaterialCommunityIcons name="credit-card" size={35} color="#333"/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Pagamentos</Text>
                        <Text style={styles.description}>Meus Saldos e Cartões</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <MaterialCommunityIcons name="ticket-outline" color="#333" size={35}/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Cupons</Text>
                        <Text style={styles.description}>Meus Cupons de Desconto</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <MaterialCommunityIcons name="heart-outline" color="#333" size={35}/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Favoritos</Text>
                        <Text style={styles.description}>Meus Locais Favoritos</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <MaterialCommunityIcons name="credit-card" color="#333" size={35}/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Fidelidade</Text>
                        <Text style={styles.description}>Minhas Fidelidades</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});