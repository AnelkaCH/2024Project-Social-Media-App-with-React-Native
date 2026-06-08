import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { data } from '../../data/Data';
 
const HomeScreen = () => {
  const [modifiedData, setModifiedData] = useState([]);
 

  useEffect(() => {
    const withLike = data.map((item) => ({ ...item, likeStatus: false }));
    setModifiedData(withLike);
  }, []);
 

  const likePhoto = (id, currentStatus) => {
    const updated = modifiedData.map((item) => {
      if (item.id === id) {
        return { ...item, likeStatus: !currentStatus };
      }
      return item;
    });
    setModifiedData(updated);
  };
 
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      {/* Header row */}
      <View style={styles.postHeader}>
        <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
 

      <Image style={styles.postImage} source={{ uri: item.postImage }} />
 

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => likePhoto(item.id, item.likeStatus)}
        >
          <Icon
            name={item.likeStatus ? 'heart' : 'heart-o'}
            type="font-awesome"
            size={22}
            color={item.likeStatus ? 'red' : 'black'}
          />
          <Text style={styles.actionText}>
            {item.likeStatus ? 'Unlike' : 'Like'}
          </Text>
        </TouchableOpacity>
 
        <View style={styles.actionBtn}>
          <Icon name="comment-o" type="font-awesome" size={22} />
          <Text style={styles.actionText}>Comment</Text>
        </View>
      </View>
 

      <View style={styles.captionRow}>
        <Text>
          <Text style={styles.username}>{item.username} </Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </Text>
      </View>
    </View>
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>SocialMedia</Text>
      </View>
      <FlatList
        data={modifiedData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  appHeader: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  appTitle: { fontSize: 26, fontWeight: 'bold' },
  post: { marginBottom: 12 },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
    backgroundColor: '#eee',
  },
  username: { fontWeight: 'bold', fontSize: 14 },
  postImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#eee',
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
    gap: 16,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: { fontSize: 14, marginLeft: 6 },
  captionRow: { paddingHorizontal: 10, paddingBottom: 8 },
  caption: { color: '#333', fontSize: 14 },
});
 
export default HomeScreen;