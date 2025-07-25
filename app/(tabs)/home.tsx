import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function Home() {
  const topics = [
    { title: 'Overview', image: require('../../assets/images/app-logo.png') },
    { title: 'Data Structures', image: require('../../assets/images/app-logo.png') },
    { title: 'Arrays', image: require('../../assets/images/array_photo.png') },
    { title: 'Linked List', image: require('../../assets/images/linked_list_photo.png') },
    { title: 'Stacks', image: require('../../assets/images/stack_photo.png') },
    { title: 'Pointers', image: require('../../assets/images/pointer_photo.png') },
    { title: 'Queues', image: require('../../assets/images/queue_photo.png') },
    { title: 'Tree', image: require('../../assets/images/app-logo.png') },
    { title: 'Binary Tree', image: require('../../assets/images/binary_photo.png') },
    { title: 'Binary Search Tree', image: require('../../assets/images/app-logo.png') },
  ];

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>ALGORITHMS</Text>
        <FlatList
          data={topics}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          numColumns={2}
          contentContainerStyle={styles.cardContainer}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#f8f9fb',
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '45%',
    margin: 10,
    height: 150, // Set a fixed height for the card
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 0, // Remove padding so image can fill
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '75%', // Occupy most of the card
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardText: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 8,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});