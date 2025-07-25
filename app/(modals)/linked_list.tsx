import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const linked_List= () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>🔗 Linked List</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Linked List</Text> is a linear data structure where each element (called a node) contains a value and a pointer (reference) to the next node in the sequence.
        Unlike arrays, linked lists do not store data in contiguous memory locations. They allow efficient insertion and deletion without reorganizing the entire structure.
      </Text>

      {/* Why Use Linked Lists */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Linked Lists?</Text>
        <Text style={styles.bullet}>• Efficient insertions and deletions at any position.</Text>
        <Text style={styles.bullet}>• Dynamic size – no need to define the number of elements in advance.</Text>
        <Text style={styles.bullet}>• Saves memory when frequent changes are required.</Text>
        <Text style={styles.bullet}>• No need to shift elements like in arrays.</Text>
      </View>

      {/* Properties */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Each node contains <Text style={styles.bold}>data</Text> and a <Text style={styles.bold}>next pointer</Text>.</Text>
        <Text style={styles.bullet}>• The last node’s pointer is <Text style={styles.bold}>null</Text> (indicates end of list).</Text>
        <Text style={styles.bullet}>• Can be <Text style={styles.bold}>singly</Text>, <Text style={styles.bold}>doubly</Text>, or <Text style={styles.bold}>circular</Text>.</Text>
        <Text style={styles.bullet}>• Traversal is linear and slower than arrays (O(n) access time).</Text>
      </View>

      {/* Real-World Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• Music playlist where each song points to the next.</Text>
        <Text style={styles.bullet}>• Image slideshow with forward and backward navigation.</Text>
        <Text style={styles.bullet}>• Undo/redo operations in editors (Doubly Linked List).</Text>
        <Text style={styles.bullet}>• Dynamic memory allocation in operating systems.</Text>
      </View>

      {/* Fun Fact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          Linked lists were invented by computer scientist <Text style={styles.bold}>Allen Newell</Text> in the 1950s. They’re still used in the implementation of fundamental structures like stacks, queues, and even hash tables!
        </Text>
      </View>

      <View style={styles.section}>
      {/* Video Section */}
      <Text style={styles.sectionTitle}>🎥 Watch: Linked Lists Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/linked_list.mp4')} // Replace with actual path
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>
      </View>
    </ScrollView>
    </ScreenWrapper>
  )
}

export default linked_List

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 15,
  },
  section: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6,
    paddingLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
})
