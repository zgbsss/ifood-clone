import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from '.screens/Home';
import Busca from '.screens/Busca';
import Perfil from '.screens/Perfil';
import Pedidos from '.screens/Pedidos';

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black',}}>
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{}}
                />
                <BottomTab.Screen
                    name="Busca"
                    component={Busca}
                />
                <BottomTab.Screen
                    name="Perfil"
                    component={Perfil}
                />
                <BottomTab.Screen
                    name="Pedidos"
                    component={Pedidos}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}