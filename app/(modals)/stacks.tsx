import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Stacks = () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>📚 Stack</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Stack</Text> is a linear data structure that follows the <Text style={styles.bold}>Last In, First Out (LIFO)</Text> principle.
        Elements are added (pushed) and removed (popped) from only one end called the <Text style={styles.bold}>top</Text>. Stacks are widely used in programming for managing function calls, undo operations, and expression evaluation.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Stacks?</Text>
        <Text style={styles.bullet}>• Manage function calls and recursion in programming languages.</Text>
        <Text style={styles.bullet}>• Undo and redo operations in text editors and software.</Text>
        <Text style={styles.bullet}>• Evaluate expressions and syntax parsing.</Text>
        <Text style={styles.bullet}>• Track backtracking algorithms in puzzles and games.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Operations are limited to one end: push (add) and pop (remove).</Text>
        <Text style={styles.bullet}>• Follows LIFO order.</Text>
        <Text style={styles.bullet}>• Peek operation returns the top element without removing it.</Text>
        <Text style={styles.bullet}>• Dynamic size (if implemented using linked lists) or fixed size (if using arrays).</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• Browser back button history.</Text>
        <Text style={styles.bullet}>• Undo functionality in editors like Microsoft Word.</Text>
        <Text style={styles.bullet}>• Call stack used by programming language runtimes.</Text>
        <Text style={styles.bullet}>• Syntax parsing in compilers.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          The stack data structure is integral to how computers manage function calls and local variables — every program you run uses a call stack behind the scenes!
        </Text>
      </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎥 Watch: Stacks Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/stacks_video.mp4')} // Replace with your actual video file
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

export default Stacks
