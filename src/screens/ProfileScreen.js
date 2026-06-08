import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/ProfileAction';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
 
const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const dispatch = useDispatch();
  const globalData = useSelector((store) => store.profileReducer);
 
  const onLogout = () => {
    setIsModalVisible(false);
    dispatch(loginUser(false));
  };
 
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarBox}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          />
        </View>
 

        <View style={styles.inputContainer}>
          <InputComponent
            title="Username"
            editable={false}
            value={globalData.username}
          />
          <InputComponent
            title="Email"
            editable={false}
            value={globalData.email}
          />
          <InputComponent
            title="Password"
            editable={false}
            value={globalData.password}
            secureTextEntry={true}
          />
        </View>
 

        <ButtonComponent
          text="Logout"
          isLogout={true}
          onPress={() => setIsModalVisible(true)}
        />
 

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalBg}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>
                Are you sure you want to logout?
              </Text>
              <View style={styles.modalButtons}>
                <ButtonComponent text="Yes" onPress={onLogout} />
                <ButtonComponent
                  text="No"
                  isLogout={true}
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 32,
  },
  avatarBox: { margin: 16 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ddd',
  },
  inputContainer: { width: '100%', padding: 16 },
  modalBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  modalButtons: { flexDirection: 'row' },
});
 
export default ProfileScreen;