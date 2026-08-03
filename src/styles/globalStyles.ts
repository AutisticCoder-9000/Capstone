import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 120 },
  pageTitle: { color: colors.text, fontSize: 24, fontWeight: '800' },
  pageSubtitle: { color: colors.muted, fontSize: 14, lineHeight: 20, marginTop: 6 },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '800' },
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 11 }
});
