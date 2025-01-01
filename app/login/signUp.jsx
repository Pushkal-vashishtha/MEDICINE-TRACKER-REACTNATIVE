import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Colors from "./../../constant/Colors";
import { useRouter } from "expo-router";
import { auth, createUserWithEmailAndPassword } from "../../config/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();
  //const auth = getAuth();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  
  const OnCreateAccount = () => {

    if(!email || !password){
        ToastAndroid.show('Please fill all details',ToastAndroid.BOTTOM);
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.push('(tabs)')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        if(errorCode == 'auth/email-already-in-use'){
            ToastAndroid.show('Email already exists',ToastAndroid.BOTTOM)
        }
        // ..
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor={Colors.GRAY}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(value)=>setEmail(value)}
          placeholder="Enter your email"
          placeholderTextColor={Colors.GRAY}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(value)=>setPassword(value)}
          placeholder="Enter your password"
          placeholderTextColor={Colors.GRAY}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}
       onPress={OnCreateAccount}>
        <Text style={styles.loginButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("login/signIn")}>
        <Text style={styles.createAccountText}>Already Account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.DARK_GRAY,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.DARK_GRAY,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAY_BORDER,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.DARK_GRAY,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
  loginButton: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: Colors.GRAY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: Colors.LIGHT_PRIMARY,
    fontSize: 16,
    fontWeight: "600",
  },
  createAccountText: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
