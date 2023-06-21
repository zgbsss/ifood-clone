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
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <MaterialCommunityIcons name="credit-card" color="#333" size={35}/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Fidelidade</Text>
                        <Text style={styles.description}>Minhas Fidelidades</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <MaterialCommunityIcons name="map-marker" size={35} color="#333" />
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Endereços</Text>
                        <Text style={styles.description}>Meus Endereços de Entrega</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.menuAdicional}>    
                <TouchableOpacity style={styles.opcoesAdicionais}>
                    <View style={styles.wrapper}>
                        <MaterialCommunityIcons name="lifebuoy" size={20} color="#CDC" />
                        <Text style={styles.optionName}>Ajuda</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcoesAdicionais}>
                    <View style={styles.wrapper}>
                        <MaterialIcons name="settings" size={25} color="#CDC"/>
                        <Text style={styles.optionName}>Configurações</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="#999"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcoesAdicionais}>
                    <View style={styles.wrapper}>
                        <MaterialIcons name="security" size={25} color="#CDC"/>
                        <Text style={styles.optionName}>Segurança</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="#999"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcoesAdicionais}>
                    <View style={styles.wrapper}>
                        <MaterialIcons name="store-mall-directory" size={25} color="#CDC"/>
                        <Text style={styles.optionName}>Sugerir Restaurantes</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="#999"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcoesAdicionais}>
                    <View style={styles.wrapper}>
                        <MaterialCommunityIcons name="rocket" size={25} color="#CDC"/>
                        <Text style={styles.optionName}>Seja Parceiro!</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="#999"/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: 1,
    },
    info: {
        marginLeft: 20,
    },
    title: {
        color: '#333',
        fontSize: 18,
    },
    description: {
        color: '#999',
        fontSize: 16,
    },
    menuAdicional: {
        marginTop: 30,
    },
    opcoesAdicionais: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: 1
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionName: {
        marginLeft: 25,
        color: '#ccc',
        fontSize: 15,
    }
});