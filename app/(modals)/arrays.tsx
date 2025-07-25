import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Arrays = () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>📦 Array</Text>

      <Text style={styles.paragraph}>
        An <Text style={styles.bold}>Array</Text> is a linear data structure used to store multiple elements of the same type in contiguous memory locations.
        Each element in an array is identified by its index, starting from 0. Arrays offer fast access to data using the index, making them highly efficient for searching and updating.
      </Text>

      {/* Why Use Arrays */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Arrays?</Text>
        <Text style={styles.bullet}>• Fixed-size and simple to use.</Text>
        <Text style={styles.bullet}>• Fast access using index: O(1) time.</Text>
        <Text style={styles.bullet}>• Ideal for storing a collection of items like scores, names, or settings.</Text>
        <Text style={styles.bullet}>• Supported natively in almost every programming language.</Text>
      </View>

      {/* Properties */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Elements are stored in **contiguous memory**.</Text>
        <Text style={styles.bullet}>• Indexing starts from 0.</Text>
        <Text style={styles.bullet}>• Fixed size – size must be defined when the array is created (in most languages).</Text>
        <Text style={styles.bullet}>• Same data type elements only (in strongly typed languages).</Text>
      </View>

      {/* Real-World Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• Storing a list of student marks in a class.</Text>
        <Text style={styles.bullet}>• Holding RGB values of an image (pixel data).</Text>
        <Text style={styles.bullet}>• Storing available seats in a theater booking system.</Text>
        <Text style={styles.bullet}>• Inventory system in a game – fixed-size slots.</Text>
      </View>

      {/* Fun Fact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          In C, accessing an array index like <Text style={styles.bold}>arr[3]</Text> is actually a shorthand for <Text style={styles.bold}>*(arr + 3)</Text>, which uses pointer arithmetic.
        </Text>
      </View>

    <View style={styles.section}>
      {/* Video Section */}
      <Text style={styles.sectionTitle}>🎥 Watch: Arrays Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/array_video.mp4')} // Replace with actual video path
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

export default Arrays

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
