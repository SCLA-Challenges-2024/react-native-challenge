import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from "./components/ImageViewer.js"

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer />
      <Text style={styles.name}>John Yoo</Text>
      <Text>Software Engineer</Text>
      <Text style={styles.aboutMe}>John Yoo is a graduate from UCLA. Throughout his academic journey and career, his passion for coding has led him to explore many different types of software and technologies. He is committed to building software for and leading initiatives that empowers those who are underrepresented.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutMe: {
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  name: {
    paddingTop: 20
  }
});
