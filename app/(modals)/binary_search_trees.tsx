import ScreenWrapper from "@/components/ScreenWrapper";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BinarySearchTrees = () => {
  return (
    <ScreenWrapper bg="white">
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>Binary Search Tree (BST)</Text>

        <View style={styles.contentBox}>
          <Text style={styles.heading}>What is a Binary Search Tree?</Text>
          <Text style={styles.text}>
            A Binary Search Tree is a binary tree where each node follows the
            property:
          </Text>
          <Text style={styles.text}>
            - All nodes in the left subtree have values less than the
            node&apos;s value.
            {"\n"}- All nodes in the right subtree have values greater than the
            node&apos;s value.
          </Text>

          <Text style={styles.heading}>Key Characteristics:</Text>
          <Text style={styles.text}>
            • Each node has at most two children.{"\n"}• Provides efficient
            searching, insertion, and deletion (on average).{"\n"}• In-order
            traversal returns nodes in sorted order.
          </Text>

          <Text style={styles.heading}>Common Operations:</Text>
          <Text style={styles.text}>
            • Search: O(log n) on average{"\n"}• Insert: O(log n) on average
            {"\n"}• Delete: O(log n) on average
          </Text>

          <Text style={styles.heading}>Real-World Use Cases:</Text>
          <Text style={styles.text}>
            • Lookup tables{"\n"}• Database indexing{"\n"}• Dynamic sorting
          </Text>
          <View style={styles.videoContainer}>
            <Video
              source={require("../../assets/videos/binary_search_tree.mp4")}
              style={styles.video}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default BinarySearchTrees;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 12,
  },
  videoContainer: {
    width: 300,
    height: 180,
    backgroundColor: "#000",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  contentBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    color: "#444",
  },
  text: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
});
