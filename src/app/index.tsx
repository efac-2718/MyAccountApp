import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native'


export default function RegistrationScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //handleReview checks if all fields are filled and if passwords match before navigating o the review screen. It uses Alert to show error messages when validation fails.
  //'alert' is a built-in React Native component that displays an alert dialog with a message and optional buttons.

  const handleReview = () => {
    if(!userName || !email || !phoneNumber || !password || !confirmPassword){
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if(password !== confirmPassword){
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    router.push({
      pathname. '/review',
      params: { userName, email, phoneNumber}
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Review" onPress={handleReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});