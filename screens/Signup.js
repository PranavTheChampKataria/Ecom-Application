import { View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import React, { useState } from 'react'

export default function Signup({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const firstSetter = (val) => {
        setFirstName(val)
    }
    const lastSetter = (val) => {
        setLastName(val)
    }
    const userSetter = (val) => {
        setUserName(val)
    }
    const emailSetter = (val) => {
        setEmail(val)
    }
    const passwordSetter = (val) => {
        setPassword(val)
    }

    return (
        <View style={styles.containerSU}>
            <Text variant="displayMedium" style={styles.titleSU}>Sign Up</Text>
            <TextInput style={styles.inputSU} mode='outlined'
                label='First Name' value={firstName} onChangeText={text => firstSetter(text)} />
            <TextInput style={styles.inputSU} mode='outlined'
                label='Last Name' value={lastName} onChangeText={text => lastSetter(text)} />
            <TextInput style={styles.inputSU} mode='outlined'
                label='Email' value={email} onChangeText={text => userSetter(text)} />
            <TextInput style={styles.inputSU} mode='outlined'
                label='User Name' value={userName} onChangeText={text => emailSetter(text)} />
            <TextInput style={styles.inputSU} mode='outlined'
                label='Password' value={password} onChangeText={text => passwordSetter(text)} />
            <TextInput style={styles.inputSU} mode='outlined'
                label='Confirm Password' />

            <Button mode="contained" icon='login' style={styles.supBtnSU} onPress={() => console.log('Pressed')}>
                Sign up
            </Button>
            <Button mode="text" uppercase={false}
                style={styles.sinBtnSU} onPress={() => navigation.navigate('signin')}>
                Sign in?</Button>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    containerSU: {
        alignItems: 'center',
    },
    inputSU: {
        marginTop: 10,
        height: 45,
        width: '85%',

    },
    titleSU: {
        marginTop: 40,
        fontSize: 30
    },
    supBtnSU: {
        marginTop: 10,
        width: '85%'
    },
    sinBtnSU: {
        alignSelf: 'flex-start',
        marginLeft: 13,
    },
    forgotBtnSI: {
        alignSelf: 'flex-start',
        marginLeft: 13,

    },
    signUpBtnSI: {
        alignSelf: 'flex-end',
        marginRight: 13,
        marginTop: -37.5
    },
    homeBtnSI: {
        marginTop: 5,

    }
})