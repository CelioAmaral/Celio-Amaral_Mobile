import React, { ReactNode } from "react";
import { TextInputProps, View, TextInput } from "react-native";

import { THEME } from "../../theme";
import styles from "./styles";


interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return <View style={styles.container}>{props.children}</View>;
}

interface TextInputInputProps extends TextInputProps {

}

function TextInputInput(props: TextInputInputProps) {
    return <TextInput style={styles.input} {...props} placeholderTextColor={THEME.COLORS.INPUT}></TextInput>;
}

interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return <>{props.children}</>;
}

export const Input = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};