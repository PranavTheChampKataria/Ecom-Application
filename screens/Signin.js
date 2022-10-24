import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme, TextInput, Button } from 'react-native-paper';
// import AuthContext from '../Context/AuthContext';

export default function Signin({ navigation }) {
    const { colors } = useTheme();
    // let { loginUser } = React.useContext(AuthContext)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleForgotPassBtn = () => {
        console.log('Forgot Password')
    }

    const handleSignInBtn = () => {
        let data = {}
        data["email"] = email
        data["password"] = password
        // loginUser(data)
    }

    const handleSignUpBtn = () => {
        console.log("Don't have an account")
    }

    return (
        <View style={styles.body} id="authenticate-body">
            <Text variant="displayMedium" style={styles.heading}>Sign in</Text>
            <TextInput
                mode="outlined"
                label="Email"
                value={email}
                style={styles.input}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                mode="outlined"
                label="Password"
                value={password}
                style={styles.input}
                onChangeText={text => setPassword(text)}
            />

            <Button mode="text" uppercase={false} style={styles.text_btn} onPress={() => navigation.navigate('forgot_password')}>
                Forgot Password?
            </Button>
            <Button icon="login" mode="contained" style={styles.btn} onPress={handleSignInBtn}>
                Sign in
            </Button>
            <Button mode="text" uppercase={false} style={styles.text_btn_2} onPress={() => navigation.navigate('signup')}>
                Don't have an account?
            </Button>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    body: {
        padding: "10px",
    },
    heading: {
        fontSize: "25px",
        margin: "10px",
        marginLeft: "0",
        textAlign: "center",
    },
    input: {
        marginTop: "10px"
    },
    text_btn: {
        marginTop: "10px",
        width: "fit-content",
        paddingLeft: "0",
    },
    btn: {
        marginTop: "10px",
        padding: "5px",
        borderRadius: "40px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    text_btn_2: {
        marginTop: "10px"
    }
})
