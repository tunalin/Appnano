import React from 'react';
import { IconButton } from 'react-native-paper';

const CustomCheckbox = ({ checked, onPress }:any) => {
  return (
    <IconButton
      icon={checked ? 'checked' : 'unchecked'} // Customize your icon here
      
      size={16}
      onPress={onPress}
    />
  );
};

export default CustomCheckbox;
