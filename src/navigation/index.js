/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Calendar from '../screens/Calendar';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import TabIcon from './TabIcon';
import { COLORS, images } from '../constant';

const Tabs = createBottomTabNavigator();

function Navigation() {
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.white,
          height: 80,
          borderTopColor: COLORS.border,
        }
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={images.Home} />;
          }
        }}
      />
      <Tabs.Screen
        name="Calendar"
        component={Calendar}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={images.Calendar} />;
          }
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={images.Chat} />;
          }
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={images.Profile} />;
          }
        }}
      />
    </Tabs.Navigator>
  );
}

export default Navigation;
