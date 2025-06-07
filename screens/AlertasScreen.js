import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getAlerts } from '../api';

export default function AlertasScreen() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    getAlerts().then(setAlertas);
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22 }}>Alertas Ativos</Text>
      {alertas.map((alerta) => (
        <View key={alerta.id} style={{ marginVertical: 10 }}>
          <Text>Mensagem: {alerta.mensagem}</Text>
          <Text>Risco: {alerta.nivelRisco}</Text>
          <Text>Data: {alerta.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
