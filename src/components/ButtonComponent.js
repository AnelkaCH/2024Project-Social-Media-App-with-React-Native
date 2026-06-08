import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
 
/*
text = button label
isLogout = bool — red background when true
onPress = handler
*/
export const ButtonComponent = (props) => {
  const { text, isLogout } = props;
 
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isLogout ? '#F87B7B' : '#CAE3BB' },
      ]}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    margin: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});