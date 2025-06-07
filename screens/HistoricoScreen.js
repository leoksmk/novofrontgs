import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getAlerts } from '../api';

export default function HistoricoScreen() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    getAlerts().then(setHistorico);
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22 }}>Histórico de Alertas</Text>
      {historico.map((item) => (
        <View key={item.id} style={{ marginVertical: 10 }}>
          <Text>Mensagem: {item.mensagem}</Text>
          <Text>Risco: {item.nivelRisco}</Text>
          <Text>Data: {item.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
