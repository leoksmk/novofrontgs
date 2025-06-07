import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Bem-vindo ao Sistema de Alerta</Text>
      <Button title="Ir para Monitoramento" onPress={() => navigation.navigate('Monitoramento')} />
      <Button title="Ir para Alertas" onPress={() => navigation.navigate('Alertas')} />
      <Button title="Ir para Controle" onPress={() => navigation.navigate('Controle')} />
      <Button title="Ir para Histórico" onPress={() => navigation.navigate('Historico')} />
    </View>
  );
}
