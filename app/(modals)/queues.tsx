import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Queues= () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>🎫 Queue</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Queue</Text> is a linear data structure that follows the <Text style={styles.bold}>First In, First Out (FIFO)</Text> principle.
        Elements are added (enqueued) at the back (rear) and removed (dequeued) from the front. Queues are used in many scenarios such as task scheduling, buffering, and managing resources.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Queues?</Text>
        <Text style={styles.bullet}>• Manage tasks in the order they arrive.</Text>
        <Text style={styles.bullet}>• Coordinate processes in operating systems.</Text>
        <Text style={styles.bullet}>• Handle requests in web servers and printers.</Text>
        <Text style={styles.bullet}>• Buffer data streams like IO buffers and keyboard input.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Elements are added at the <Text style={styles.bold}>rear</Text> and removed from the <Text style={styles.bold}>front</Text>.</Text>
        <Text style={styles.bullet}>• Follows <Text style={styles.bold}>FIFO</Text> order.</Text>
        <Text style={styles.bullet}>• Supports operations: enqueue, dequeue, peek (front element).</Text>
        <Text style={styles.bullet}>• Can be implemented using arrays or linked lists.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• Print queue managing multiple print jobs.</Text>
        <Text style={styles.bullet}>• CPU task scheduling and process management.</Text>
        <Text style={styles.bullet}>• Handling customer service requests in order.</Text>
        <Text style={styles.bullet}>• Data streaming and asynchronous data transfer.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          Circular queues help solve the “wasted space” problem of simple linear queues by connecting the rear back to the front, forming a circle!
        </Text>
      </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎥 Watch: Queues Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/queue_video.mp4')} // Replace with actual video path
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
export default Queues
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
