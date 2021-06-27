import React from 'react';
import { bool, number } from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constant';

function TabIcon(props) {
  const { focused, icon } = props;

  return (
    <View style={styTabIcon.wrapperIcon}>
      <Image source={icon} resizeMode="contain" style={focused ? styTabIcon.imgTabActive : styTabIcon.imgTab} />
    </View>
  );
}

const styTabIcon = StyleSheet.create({
  wrapperIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTab: {
    width: 24,
    height: 24,
    tintColor: COLORS.secondary,
  },
  imgTabActive: {
    width: 24,
    height: 24,
    tintColor: COLORS.blue,
  },
});

TabIcon.propTypes = {
  focused: bool,
  icon: number,
};

TabIcon.defaultProps = {
  focused: false,
  icon: 0,
};

export default TabIcon;
