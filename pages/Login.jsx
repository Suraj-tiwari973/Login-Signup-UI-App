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

const Login = () => {
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
            style={{ height: 200, width: 200 }}
            source={require("../assets/images/login.png")}
          />
        </View>
      </SafeAreaView>

      <View style={[styles.formContainer, { marginTop: 20 }]}>
        <View style={styles.formInputs}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Enter your Email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
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
          <TouchableOpacity style={{ display: "flex", alignItems: "flex-end" }}>
            <Text style={{ textDecorationLine: "underline", color: "blue" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Log In</Text>
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
          <Text>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{ marginLeft: 5 }}
          >
            <Text
              style={{
                color: "#FF9209",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
