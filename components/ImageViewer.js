import { StyleSheet, Image } from 'react-native';

export default function ImageViewer() {
  return (
    <Image source={{
      uri: 'https://i.ibb.co/HG0Y7FZ/file-1.jpg',
    }}
    style={styles.image}
    />  
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    borderRadius: 90,
  },
});
