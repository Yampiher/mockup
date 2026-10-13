import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function LoginScreen() {
  const router = useRouter();
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');

  const handleIngresar = () => {
    // Al presionar ingresar, reemplazamos la pantalla actual por el sistema de pestañas
    router.replace('/(tabs)'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.loginBox}>
          <Text style={styles.title}>EduSchedule</Text>
          <Text style={styles.subtitle}>Portal de Gestión Académica</Text>
          <View style={styles.divider} />

          <Text style={styles.label}>Correo Institucional o RUT</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ej: jperez@institucion.cl"
            placeholderTextColor="#999"
            value={rut}
            onChangeText={setRut}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput 
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleIngresar}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            * El acceso es exclusivo para personal docente. Para recuperación de credenciales, contacte a UTP o Dirección.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F7F9', justifyContent: 'center' },
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  loginBox: { backgroundColor: 'white', padding: 30, borderRadius: 12, elevation: 3 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1B2B4B', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 20, marginTop: 5 },
  divider: { height: 1, backgroundColor: '#EEE', marginBottom: 25 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  input: { backgroundColor: '#FAFAFA', borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: '#1B2B4B', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  footerText: { fontSize: 11, color: '#999', textAlign: 'center', marginTop: 25 }
});