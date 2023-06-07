import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    minWidth: 240,
    padding: 12,
    borderRadius: 12,
    backgroundColor: THEME.COLORS.BACKGROUND_600,
  },

  input: {
    marginStart: 12,
    flex: 1,
    color: THEME.COLORS.INPUT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});

export default styles;