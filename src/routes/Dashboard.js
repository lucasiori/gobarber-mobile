import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import New from './New';

const { Navigator, Screen } = createBottomTabNavigator();

function TabBarIcon({ color, name }) {
  return <Icon name={name} size={20} color={color} />;
}

export default function DashboardRoutes() {
  return (
    <Navigator
      screenOptions={{ unmountOnBlur: true }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: (props) => <TabBarIcon {...props} name="event" />,
        }}
      />

      <Screen
        name="New"
        component={New}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Agendar',
          tabBarIcon: () => (
            <TabBarIcon
              color="rgba(255, 255, 255, 0.6)"
              name="add-circle-outline"
            />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: (props) => <TabBarIcon {...props} name="person" />,
        }}
      />
    </Navigator>
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
