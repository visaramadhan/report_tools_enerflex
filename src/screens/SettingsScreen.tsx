import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../theme';

type Props = {
  token: string;
  onLogout: () => void;
};

export default function SettingsScreen({ token, onLogout }: Props) {
  const { colors, mode, setMode } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pengaturan Sistem</Text>
        
        <View style={styles.section}>
          <Text style={styles.label}>Mode Malam</Text>
          <Text style={styles.subLabel}>Pilih mode tampilan: mengikuti sistem, terang, atau malam.</Text>
          <View style={styles.row}>
            <Pressable style={[styles.pill, mode === 'system' && styles.pillActive]} onPress={() => setMode('system')}>
              <Text style={[styles.pillText, mode === 'system' && styles.pillTextActive]}>System</Text>
            </Pressable>
            <Pressable style={[styles.pill, mode === 'light' && styles.pillActive]} onPress={() => setMode('light')}>
              <Text style={[styles.pillText, mode === 'light' && styles.pillTextActive]}>Terang</Text>
            </Pressable>
            <Pressable style={[styles.pill, mode === 'dark' && styles.pillActive]} onPress={() => setMode('dark')}>
              <Text style={[styles.pillText, mode === 'dark' && styles.pillTextActive]}>Malam</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={[styles.card, { marginTop: 16 }]}>
        <Text style={styles.title}>Akun</Text>
        <Pressable style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const createStyles = (colors: { background: string; card: string; text: string; muted: string; border: string; inputBg: string; primary: string; danger: string }) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, padding: 16 },
    card: { backgroundColor: colors.card, borderRadius: 14, padding: 18, shadowColor: 'rgba(0,0,0,0.25)', shadowOpacity: 0.1, shadowRadius: 12, elevation: 2 },
    title: { fontSize: 18, fontWeight: '800', color: colors.text, marginBottom: 14 },
    section: { marginTop: 4 },
    label: { fontSize: 14, fontWeight: '700', color: colors.text, marginBottom: 4 },
    subLabel: { fontSize: 12, color: colors.muted, marginBottom: 10, lineHeight: 18 },
    row: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
    pill: { borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: colors.card },
    pillActive: { backgroundColor: colors.primary, borderColor: colors.primary },
    pillText: { fontWeight: '900', color: colors.text },
    pillTextActive: { color: '#fff' },
    logoutButton: { backgroundColor: colors.danger, borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: '800' },
    buttonDisabled: { opacity: 0.7 },
  });
