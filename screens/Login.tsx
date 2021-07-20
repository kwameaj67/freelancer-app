import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { useState } from 'react';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';


const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [textEntry, setTextEntry] = useState(true)

    const toggleTextEntry = () => {
        setTextEntry(!textEntry)
    }
    const onPressLogin = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo}></View>
            </View>
            <View style={styles.allInputContainer}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputHeader}>Email Address</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="envelope-o" size={22} color="black" />
                        <TextInput
                            placeholder="username@gmail.com"
                            onChangeText={(email) => setEmail(email)}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputHeader}>Password</Text>
                    <View style={[styles.inputContainer, { justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="lock" size={22} color="black" />
                            <TextInput
                                placeholder="*********"
                                onChangeText={(password) => setPassword(password)}
                                style={styles.input}
                                secureTextEntry={textEntry}
                            />
                        </View>
                        <TouchableOpacity onPress={toggleTextEntry} activeOpacity={0.6}>
                            {
                                textEntry ? <Ionicons name="eye-outline" size={22} color="black" /> :
                                    <Ionicons name="eye-off-outline" size={22} color="black" />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressLogin} activeOpacity={0.9}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.otherButtonContainer}>
                    <Text style={styles.signup}>Signup</Text>
                    <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    logo: {
        backgroundColor: Colors.dark.blue,
        width: 130,
        height: 130,
        borderRadius: 100,
        marginVertical: 10
    },
    allInputContainer: {
        marginTop: 40,
        marginHorizontal: 20
    },
    textInputContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        shadowColor: Colors.dark.grey,
        shadowOffset: { width: 0.2, height: 0.4 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        marginBottom: 30
    },
    inputHeader: {
        color: Colors.light.grey,
        fontSize: 17,
        fontFamily: "Medium",
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        fontFamily: "Medium",
        color: 'black',
        marginLeft: 8,
    },
    buttonContainer: {
        marginHorizontal:20,
    },
    button: {
        backgroundColor: Colors.dark.blue,
        alignItems: 'center',
        padding:22,
        borderRadius:100
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Bold"
    },
    otherButtonContainer:{
        marginTop:40,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signup:{
        fontSize: 16,
        fontFamily: "Medium",
        color: Colors.light.grey,
    },
    forgot:{
        fontSize: 16,
        fontFamily: "Medium",
        color: Colors.light.grey,
    },
})