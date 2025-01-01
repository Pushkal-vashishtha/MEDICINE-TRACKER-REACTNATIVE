import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Colors from './../../constant/Colors';
import { useRouter } from 'expo-router';

export default function LoginScreen() {

    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../../assets/images/login.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Stay on Track, Stay Healthy</Text>
      </View>
      <Text style={styles.subText}>
        Track your meds, take control of your lifestyle
      </Text>
      <TouchableOpacity style={styles.button}
      onPress={()=>router.push('login/signIn')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.tcText}>By clicking continue, you agree to our T&C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },
  headingContainer: {
    marginBottom: 10,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: Colors.GRAY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.LIGHT_PRIMARY,
    fontSize: 16,
    fontWeight: '600',
  },
  tcText: {
    fontSize: 12,
    color: Colors.DARK_GRAY,
    textAlign: 'center',
  },
});
