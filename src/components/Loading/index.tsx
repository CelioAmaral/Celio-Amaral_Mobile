import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}