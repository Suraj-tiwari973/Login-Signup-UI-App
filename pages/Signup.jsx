import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import styles from "../styles/Signup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#7071e8" }}>
      <SafeAreaView style={styles.iconContainer}>
        <View style={styles.arrowIconContainer}>
          <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
            <ArrowLeftIcon size="25" color="black" />
          </Pressable>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={{ height: 165, width: 250 }}
            source={require("../assets/images/signup.png")}
          />
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <View style={styles.formInputs}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Your Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Enter Password"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Or
        </Text>

        <View style={styles.logoContainer}>
          <Pressable>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/icons/google.png")}
            />
          </Pressable>
          <Pressable>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/icons/apple.png")}
            />
          </Pressable>
          <Pressable>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/icons/facebook.png")}
            />
          </Pressable>
        </View>

        <View style={styles.existingUserLoginText}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginLeft: 5 }}
          >
            <Text
              style={{
                color: "#FF9209",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
