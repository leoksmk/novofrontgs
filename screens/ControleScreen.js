import { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { sendControlAction, getControlActions } from '../api';

export default function ControleScreen() {
  const [acoes, setAcoes] = useState([]);

  const acionar = async (acao) => {
    await sendControlAction(acao);
    const novas = await getControlActions();
    setAcoes(novas);
  };

  useEffect(() => {
    getControlActions().then(setAcoes);
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22 }}>Controle</Text>
      <Button title="Ativar Barreira" onPress={() => acionar('AtivarBarreira')} />
      <Button title="Desativar Barreira" onPress={() => acionar('DesativarBarreira')} />
      <Text style={{ marginTop: 20 }}>Ações Registradas:</Text>
      {acoes.map((a) => (
        <View key={a.id} style={{ marginVertical: 8 }}>
          <Text>Ação: {a.acao}</Text>
          <Text>Data: {a.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
