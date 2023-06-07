import React from "react";
import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface HeadingProps extends ViewProps {
    title: string;
    subtitle: string;
}

export function Heading(props: HeadingProps) {
    return (<View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>);
}

