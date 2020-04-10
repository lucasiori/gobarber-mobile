import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const { Navigator, Screen } = createStackNavigator();

export default function NewRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <Screen
        name="SelectProvider"
        component={SelectProvider}
        options={({ navigation }) => ({
          title: 'Selecione o prestador',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={({ navigation }) => ({
          title: 'Selecione o horário',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="Confirm"
        component={Confirm}
        options={({ navigation }) => ({
          title: 'Confirmar agendamento',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Navigator>
  );
}
