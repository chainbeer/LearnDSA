import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Pointerss = () => {
  return (
    <ScreenWrapper bg="white">  
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>📍 Pointers</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Pointer</Text> is a variable that stores the memory address of another variable. It is a powerful feature in languages like C and C++ that allows direct memory manipulation and efficient handling of data structures.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Pointers?</Text>
        <Text style={styles.bullet}>• Enable dynamic memory allocation.</Text>
        <Text style={styles.bullet}>• Allow efficient array and data structure traversal.</Text>
        <Text style={styles.bullet}>• Facilitate passing large data to functions without copying.</Text>
        <Text style={styles.bullet}>• Essential for building complex data structures like linked lists, trees, and graphs.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Concepts</Text>
        <Text style={styles.bullet}>• Stores the <Text style={styles.bold}>address</Text> of a variable, not the value.</Text>
        <Text style={styles.bullet}>• Can be <Text style={styles.bold}>dereferenced</Text> to access or modify the value stored at the address.</Text>
        <Text style={styles.bullet}>• Pointer arithmetic allows moving between contiguous memory locations.</Text>
        <Text style={styles.bullet}>• Null pointers indicate that they don’t point to any valid memory location.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Uses</Text>
        <Text style={styles.bullet}>• Memory management in operating systems.</Text>
        <Text style={styles.bullet}>• Implementation of dynamic data structures like linked lists and trees.</Text>
        <Text style={styles.bullet}>• Efficient handling of arrays and buffers.</Text>
        <Text style={styles.bullet}>• Communication between hardware and software.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          In many programming languages, the concept of pointers is hidden (like references in Java or Python), but under the hood, the computer always uses memory addresses!
        </Text>
      </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎥 Watch: Pointers Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/pointer_video.mp4')} // Replace with your actual video path
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


export default Pointerss

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
