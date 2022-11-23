import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-ionicons';

import CollectCardDataScreen from './CollectCardDataScreen';
import ShowCardDataScreen from './ShowCardDataScreen';

const BottomTabs = createBottomTabNavigator();

function CollectShowTabScreen() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="ShowCardDataScreen"
        component={ShowCardDataScreen}
        options={{
          tabBarLabel: 'VGS Show',
          headerShown: false,
          tabBarIcon: ({size}) => (
            <Image
              style={{width: size, height: size}}
              source={require('../../../assets/baseline_credit_card_black.png')}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Collect & Show Card Data"
        component={CollectCardDataScreen}
        options={{
          tabBarLabel: 'VGS Collect',
          headerShown: false,
          tabBarIcon: ({size}) => (
            <Image
              style={{width: size, height: size}}
              source={require('../../../assets/baseline_add_card_black.png')}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default CollectShowTabScreen;
