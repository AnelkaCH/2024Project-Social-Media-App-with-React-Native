import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
 
/*

title = label text above input
isPassword = bool — shows the eye icon toggle
iconName = icon name for eye ('eye' | 'eye-off')
onPress = called when eye icon is tapped

*/
export const InputComponent = (props) => {
  const { title, isPassword, iconName, onPress } = props;
 
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.label}>{title}</Text> : null}
      <View style={styles.row}>
        <TextInput style={styles.input} {...props} />
        {isPassword ? (
          <Icon
            name={iconName || 'eye'}
            type="ionicon"
            size={22}
            onPress={onPress}
            containerStyle={styles.eyeIcon}
          />
        ) : null}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 4,
  },
});