import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/ProfileAction';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
 
const LoginScreen = (props) => {
  const { navigation } = props;
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPassVisible, setIsPassVisible] = useState(false);
 
  const dispatch = useDispatch();
  const globalProfileData = useSelector((store) => store.profileReducer);
 
  const checkData = () => {
    if (username === '' || password === '') {
      alert('Please input your username and password!');
      return;
    }
    if (
      username.toLowerCase() === globalProfileData.username.toLowerCase() &&
      password.toLowerCase() === globalProfileData.password.toLowerCase()
    ) {
      dispatch(loginUser(true));
      setUsername('');
      setPassword('');
    } else {
      alert("Your username and password didn't match!");
    }
  };
 
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Social Media</Text>
 
        <InputComponent
          title="Username"
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
 
        <InputComponent
          title="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          secureTextEntry={!isPassVisible}
          iconName={isPassVisible ? 'eye-off' : 'eye'}
          onPress={() => setIsPassVisible((v) => !v)}
        />
 
        <ButtonComponent text="Login" onPress={checkData} />
 
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.link}
        >
          <Text style={styles.linkText}>
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  link: { marginTop: 16, alignItems: 'center' },
  linkText: { color: '#1a73e8', fontSize: 14 },
});
 
export default LoginScreen;