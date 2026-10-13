import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

const notificaciones = [
  { id: 'n1', tipo: 'alerta', mensaje: 'Cambio de sala: 1ro Medio B pasa al Lab de Ciencias en el bloque de las 09:45.' }
];

const horarioHoy = [
  { id: '1', horario: '08:00 - 09:30', asignatura: 'Matemática', curso: '1ro Medio B', sala: 'Sala 12', alumnos: 35, estado: 'normal' },
  { id: '2', horario: '09:45 - 11:15', asignatura: 'Matemática', curso: '1ro Medio B', sala: 'Lab Ciencias', alumnos: 35, estado: 'cambio_sala' },
  { id: '3', horario: '11:30 - 13:00', asignatura: 'Atención Apoderados', curso: '-', sala: 'Oficina Depto.', alumnos: 0, estado: 'no_lectiva' },
];

export default function HorarioScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.saludo}>Hola, Prof. Roberto</Text>
          <Text style={styles.fecha}>Lunes, 04 de Mayo de 2026</Text>
        </View>

        {notificaciones.length > 0 && (
          <View style={styles.alertaContainer}>
            <Text style={styles.alertaTitulo}>⚠️ Alerta de Horario</Text>
            {notificaciones.map(notif => (
              <Text key={notif.id} style={styles.alertaMensaje}>{notif.mensaje}</Text>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>Tus clases de hoy</Text>
        
        <View style={styles.horarioContainer}>
          {horarioHoy.map((clase) => (
            <View 
              key={clase.id} 
              style={[
                styles.claseCard, 
                clase.estado === 'cambio_sala' ? styles.claseCardDestacada : null,
                clase.estado === 'no_lectiva' ? styles.claseCardGris : null
              ]}
            >
              <View style={styles.horaColumna}>
                <Text style={styles.horaTexto}>{clase.horario.split(' - ')[0]}</Text>
                <Text style={styles.horaTextoChico}>{clase.horario.split(' - ')[1]}</Text>
              </View>
              
              <View style={styles.infoColumna}>
                <Text style={styles.asignaturaTexto}>{clase.asignatura}</Text>
                <Text style={styles.cursoTexto}>{clase.curso}</Text>
                
                <View style={styles.detallesFila}>
                  <Text style={[styles.detalleBadge, clase.estado === 'cambio_sala' ? styles.badgeAlerta : null]}>
                    📍 {clase.sala}
                  </Text>
                  {clase.alumnos > 0 && (
                    <Text style={styles.detalleBadge}>👥 {clase.alumnos} alumnos</Text>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F4F7F9' },
  container: { flex: 1, padding: 20 },
  header: { marginTop: 10, marginBottom: 20 },
  saludo: { fontSize: 26, fontWeight: 'bold', color: '#1B2B4B' },
  fecha: { fontSize: 16, color: '#666', marginTop: 4 },
  alertaContainer: { backgroundColor: '#FFF3CD', borderLeftWidth: 5, borderLeftColor: '#FFC107', padding: 15, borderRadius: 8, marginBottom: 25 },
  alertaTitulo: { fontWeight: 'bold', color: '#856404', marginBottom: 5, fontSize: 15 },
  alertaMensaje: { color: '#856404', fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B2B4B', marginBottom: 15 },
  horarioContainer: { paddingBottom: 20 },
  claseCard: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 12, marginBottom: 15, padding: 15, elevation: 2 },
  claseCardDestacada: { borderColor: '#FFC107', borderWidth: 1 },
  claseCardGris: { backgroundColor: '#FAFAFA', borderStyle: 'dashed', borderWidth: 1, borderColor: '#CCC' },
  horaColumna: { width: 80, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: '#EEE', paddingRight: 15, marginRight: 15 },
  horaTexto: { fontSize: 16, fontWeight: 'bold', color: '#1B2B4B' },
  horaTextoChico: { fontSize: 12, color: '#999', marginTop: 2 },
  infoColumna: { flex: 1, justifyContent: 'center' },
  asignaturaTexto: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cursoTexto: { fontSize: 14, color: '#666', marginTop: 2 },
  detallesFila: { flexDirection: 'row', marginTop: 10, gap: 8, flexWrap: 'wrap' },
  detalleBadge: { backgroundColor: '#F0F4F8', color: '#555', fontSize: 12, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden' },
  badgeAlerta: { backgroundColor: '#FFF3CD', color: '#856404', fontWeight: 'bold' }
});