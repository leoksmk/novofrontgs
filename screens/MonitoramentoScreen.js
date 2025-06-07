import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getSensorData } from '../api';

export default function MonitoramentoScreen() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getSensorData().then(setDados);
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22 }}>Monitoramento</Text>
      {dados.map((item) => (
        <View key={item.id} style={{ marginVertical: 10 }}>
          <Text>Nível da Água: {item.nivelAgua}</Text>
          <Text>Clima: {item.clima}</Text>
          <Text>Data: {item.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

