import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Trees= () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>🌳 Tree</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Tree</Text> is a hierarchical data structure consisting of nodes, with one node as the root and zero or more child nodes.
        Each node contains a value and references to its child nodes. Trees are widely used to represent structured data such as file systems, organizational charts, and more.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Trees?</Text>
        <Text style={styles.bullet}>• Represent hierarchical relationships naturally.</Text>
        <Text style={styles.bullet}>• Efficient searching and sorting (e.g., binary search trees).</Text>
        <Text style={styles.bullet}>• Used in databases and file system indexing.</Text>
        <Text style={styles.bullet}>• Support operations like insertion, deletion, traversal.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Root node is the topmost node with no parent.</Text>
        <Text style={styles.bullet}>• Each node can have zero or more children.</Text>
        <Text style={styles.bullet}>• Leaf nodes have no children.</Text>
        <Text style={styles.bullet}>• Trees have levels, height, and depth concepts.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• File system directory structures.</Text>
        <Text style={styles.bullet}>• Organization charts.</Text>
        <Text style={styles.bullet}>• XML/HTML document object models (DOM).</Text>
        <Text style={styles.bullet}>• Decision trees in machine learning.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          Binary trees are a special kind of tree where each node has at most two children, often called the left and right child.
          They are fundamental in implementing efficient searching and sorting algorithms.
        </Text>
      </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎥 Watch: Trees Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/tree_video.mp4')} // Replace with your actual video path
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
export default Trees
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
