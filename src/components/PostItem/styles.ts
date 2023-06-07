import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        borderBottomColor: THEME.COLORS.BORDER,
        borderBottomWidth: 1,
        paddingBottom: 12,
    },

    heading: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },

    profileName: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
    },

    postTitle: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
    },

    image: {
        resizeMode: "cover",
        height: 240,
        borderRadius: 12,
    },

    description: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT,
        marginStart: 12,
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
    },

    number: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT,
        marginStart: 4,
        marginEnd: 24,
    },
});