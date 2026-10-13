import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';

const historialEmergencias = [
  { id: '1', fecha: '12/04/2026', motivo: 'Licencia Médica', estado: 'Cubierto', reemplazo: 'Prof. Ana Silva' },
];

export default function EmergenciasScreen() {
  const [motivoSeleccionado, setMotivoSeleccionado] = useState('Salud');
  const [bloquesAfectados, setBloquesAfectados] = useState('Todo el día');
  const [detalles, setDetalles] = useState('');

  const motivos = ['Salud', 'Imprevisto Personal', 'Atraso (>15 min)'];
  const bloques = ['Todo el día', 'Solo mañana', 'Solo tarde'];

  const handleEnviar = () => {
    Alert.alert(
      "Alerta Enviada", 
      "Tu aviso de emergencia ha sido notificado a UTP. Buscaremos un reemplazo a la brevedad.",
      [{ text: "Entendido", onPress: () => setDetalles('') }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Reportar Emergencia</Text>
          <Text style={styles.subtitle}>Notifica a UTP para gestionar tu reemplazo</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>1. Selecciona el motivo</Text>
          <View style={styles.opcionesContainer}>
            {motivos.map((motivo) => (
              <TouchableOpacity 
                key={motivo} 
                style={[styles.opcionBtn, motivoSeleccionado === motivo && styles.opcionBtnActiva]}
                onPress={() => setMotivoSeleccionado(motivo)}
              >
                <Text style={[styles.opcionTexto, motivoSeleccionado === motivo && styles.opcionTextoActivo]}>
                  {motivo}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>2. Bloques afectados (Hoy)</Text>
          <View style={styles.opcionesContainer}>
            {bloques.map((bloque) => (
              <TouchableOpacity 
                key={bloque} 
                style={[styles.opcionBtn, bloquesAfectados === bloque && styles.opcionBtnActiva]}
                onPress={() => setBloquesAfectados(bloque)}
              >
                <Text style={[styles.opcionTexto, bloquesAfectados === bloque && styles.opcionTextoActivo]}>
                  {bloque}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>3. Detalles adicionales (Opcional)</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Ej: Dejé material de trabajo en la sala de profesores..."
            placeholderTextColor="#999"
            multiline={true}
            numberOfLines={3}
            value={detalles}
            onChangeText={setDetalles}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleEnviar}>
            <Text style={styles.submitBtnText}>🚨 Enviar Alerta de Emergencia</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Tus avisos recientes</Text>
        
        {historialEmergencias.map((item) => (
          <View key={item.id} style={styles.historialCard}>
            <View style={styles.historialHeader}>
              <Text style={styles.historialFecha}>{item.fecha} - {item.motivo}</Text>
              <Text style={styles.badgeSuccess}>{item.estado}</Text>
            </View>
            <Text style={styles.historialReemplazo}>Reemplazo asignado: {item.reemplazo}</Text>
          </View>
        ))}

        <View style={styles.espacioFinal} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F7F9' },
  container: { flex: 1, padding: 20 },
  header: { marginBottom: 20, marginTop: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#E74C3C' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  formCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  label: { fontSize: 14, fontWeight: 'bold', color: '#1B2B4B', marginBottom: 10, marginTop: 10 },
  opcionesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  opcionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#F0F4F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  opcionBtnActiva: {
    backgroundColor: '#1B2B4B',
    borderColor: '#1B2B4B',
  },
  opcionTexto: { fontSize: 13, color: '#555' },
  opcionTextoActivo: { color: 'white', fontWeight: 'bold' },
  textArea: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'top',
    height: 80,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  submitBtnText: { color: 'white', fontSize: 15, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B2B4B', marginBottom: 15 },
  historialCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2ECC71',
    marginBottom: 15,
  },
  historialHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  historialFecha: { fontWeight: 'bold', color: '#333' },
  badgeSuccess: { backgroundColor: '#E8F5E9', color: '#2E7D32', fontSize: 12, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, overflow: 'hidden', fontWeight: 'bold' },
  historialReemplazo: { fontSize: 13, color: '#666' },
  espacioFinal: { height: 40 }
});