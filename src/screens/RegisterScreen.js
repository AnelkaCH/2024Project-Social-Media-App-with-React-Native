import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../store/actions/ProfileAction';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
 
// Email validation regex
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
 
const RegisterScreen = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPassVisible, setIsPassVisible] = useState(false);
 
  const dispatch = useDispatch();
 
  const register = () => {
    if (username === '' || email === '' || password === '') {
      Alert.alert('Error', 'Please fill all fields!', [{ text: 'OK' }]);
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email!', [{ text: 'OK' }]);
      return;
    }
 
    dispatch(createProfile({ username, email, password }));
    console.log('Registered:', { username, email, password });
 
    Alert.alert('Success', 'Account created! Please login.', [{ text: 'OK' }]);
    setUsername('');
    setEmail('');
    setPassword('');
  };
 
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
 
        <InputComponent
          title="Username"
          placeholder="Choose a username"
          value={username}
          onChangeText={setUsername}
        />
        <InputComponent
          title="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputComponent
          title="Password"
          placeholder="Choose a password"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          secureTextEntry={!isPassVisible}
          iconName={isPassVisible ? 'eye-off' : 'eye'}
          onPress={() => setIsPassVisible((v) => !v)}
        />
 
        <ButtonComponent text="Register" onPress={register} />
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
});
 
export default RegisterScreen;