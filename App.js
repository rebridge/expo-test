import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {
    var imageUri = "https://picsum.photos/200/300";
    const handlePress = () => { 
        console.log("Text Pressed");
    }
    return (
        <SafeAreaView style={styles.container}>
        <Text onPress={handlePress}>Look, a picture</Text>

        <TouchableOpacity onPress={console.log("Image tapped")}>
                <Image source={ { 
                    width: 200,
                    height: 300,
                    uri: imageUri } } />
            </TouchableOpacity>
        <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
