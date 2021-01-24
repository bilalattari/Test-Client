import React from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header } from "../../Common";
import { BackArrow, DownArrow, Avatar, FaceId } from '../../Assets/Icons';

const SignInWithEmail = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Header navigation={navigation} />
            <StatusBar barStyle={'light-content'}/>
            <Text style={styles.midtxt}>With your email</Text>
            <TextInput style={styles.input} placeholderTextColor={'#C7C7C7'} placeholder={'Your Email'} />

            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => { navigation.navigate('SignInWithNumber'); }}>
                    <Text style={styles.btmtxt}>Sign in with a phone number</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Profile'); }} style={styles.contBtn}>
                    <Text style={styles.contBtnTxt}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { padding: 0, marginHorizontal: 10, marginTop: 30, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#C7C7C750' },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 24, marginTop: 10, },
    bottomView: { margin: 10, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', },
    contBtn: { marginTop: 10, borderRadius: 10, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E32FC50' },
    btmtxt: { color: '#B9A4FF' },
    contBtnTxt: { fontSize: 16, color: '#FFF' },
})
export default SignInWithEmail;