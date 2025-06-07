import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import MonitoramentoScreen from './screens/MonitoramentoScreen';
import AlertasScreen from './screens/AlertasScreen';
import ControleScreen from './screens/ControleScreen';
import HistoricoScreen from './screens/HistoricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen name="BoasVindas" component={WelcomeScreen} />
        <Stack.Screen name="Monitoramento" component={MonitoramentoScreen} />
        <Stack.Screen name="Alertas" component={AlertasScreen} />
        <Stack.Screen name="Controle" component={ControleScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
