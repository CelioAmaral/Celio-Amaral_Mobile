import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UserCircle, PencilSimple } from "phosphor-react-native";

import { styles } from "./styles";

export function HomeHeader({ navigation, user }) {
    return (
        <View style={styles.container}>
            <UserCircle color="white" size={48} weight="thin" />
            <Text style={styles.userNameText}>{user}</Text>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
                <PencilSimple color="white" size={40} weight="thin" />
            </TouchableOpacity>
        </View>
    );
}