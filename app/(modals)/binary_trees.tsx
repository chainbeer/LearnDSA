import ScreenWrapper from '@/components/ScreenWrapper'
import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const BinaryTrees = () => {
  return (
    <ScreenWrapper bg="white">
    <ScrollView contentContainerStyle={styles.container} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
      <Text style={styles.title}>🌲 Binary Tree</Text>

      <Text style={styles.paragraph}>
        A <Text style={styles.bold}>Binary Tree</Text> is a tree data structure in which each node has at most two children, referred to as the <Text style={styles.bold}>left</Text> child and <Text style={styles.bold}>right</Text> child.
        Binary trees are widely used in searching and sorting algorithms.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Why Use Binary Trees?</Text>
        <Text style={styles.bullet}>• Efficient searching, insertion, and deletion operations.</Text>
        <Text style={styles.bullet}>• Forms the basis of binary search trees, heaps, and expression trees.</Text>
        <Text style={styles.bullet}>• Used in implementing priority queues and syntax parsing.</Text>
        <Text style={styles.bullet}>• Allows hierarchical data representation with efficient traversal.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Key Properties</Text>
        <Text style={styles.bullet}>• Each node has at most two children: left and right.</Text>
        <Text style={styles.bullet}>• Depth and height are important for performance analysis.</Text>
        <Text style={styles.bullet}>• Traversals include inorder, preorder, and postorder.</Text>
        <Text style={styles.bullet}>• Can be balanced or unbalanced, affecting operation speed.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌍 Real-world Examples</Text>
        <Text style={styles.bullet}>• Binary search trees for fast data lookup.</Text>
        <Text style={styles.bullet}>• Heaps used in priority queues and heap sort algorithms.</Text>
        <Text style={styles.bullet}>• Expression trees in compilers and calculators.</Text>
        <Text style={styles.bullet}>• Decision trees in machine learning.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Fun Fact</Text>
        <Text style={styles.paragraph}>
          Balanced binary trees like AVL and Red-Black trees maintain height constraints to ensure operations run in logarithmic time.
        </Text>
      </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎥 Watch: Binary Trees Explained</Text>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/binary_tree_video.mp4')} // Replace with your actual video path
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
export default BinaryTrees
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
