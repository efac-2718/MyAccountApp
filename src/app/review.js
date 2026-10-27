import {useLocalSearchParams, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen() {
    const router = useRouter();
    
    const {userName, email, phoneNumber } = useLocalSearchParams(); 

    const handeConfrm = () => {
        router.push({
            pathname. '/success',
            params: {username}
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Details</Text>

            <View style={styles.card}>
            <Text style={styles.details}>Username: {userName}</Text>
            <Text style={styles.details}>Email: {email}</Text>
            <Text style={styles.details}>Phone Number: {phoneNumber}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Edit Info" color="red" onPress={() => router.back()} />
                <Button title="Confirm & Submit" onPress={handeConfrm} />
            </View> 
        </View>
    )
}