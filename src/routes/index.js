import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(signed = false) {
  return (
    <Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#7159c1' },
        headerShown: false,
        headerTitleAlign: 'center',
      }}
    >
      {signed && <Screen name="Dashboard" component={Dashboard} />}

      {!signed && (
        <>
          <Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Login' }}
          />
          <Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Cadastro' }}
          />
        </>
      )}
    </Navigator>
  );
}
