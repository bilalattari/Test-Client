import React from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header, CodeInput } from "../../Common";
import { BackArrow, DownArrow, Avatar, FaceId } from '../../Assets/Icons';

const SignInWithNumberEnterCode = ({navigation}) => {
    return (
        <View style={styles.main}>
            <StatusBar barStyle={'light-content'}/>
            <Header navigation={navigation}/>
            <Text style={styles.midtxt}>Enter the 6-digit code</Text>
            <Text style={styles.midtxtLow}>We sent it to +32.475.42.42.23 </Text>
            
            <CodeInput navigation={navigation}/>
            
            {/* <TextInput keyboardType='numeric' style={styles.input} placeholderTextColor={'#C7C7C7'} placeholder={'Phone Number'} /> */}

            <View style={styles.bottomView}>
                <Text style={styles.btmtxt}>Send a new code if doesn't arrive in 00:60</Text>
                <Text style={styles.btmtxt}>From messages</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { padding: 0, marginHorizontal: 10, marginTop: 30, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#C7C7C750' },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 24, marginTop: 10, },
    midtxtLow: { textAlign: 'center', color: '#7A7A7A', fontSize: 14, marginTop:10, },
    bottomView: { margin: 10, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', },
    contBtn: { marginTop: 10, borderRadius: 10, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E32FC50' },
    btmtxt: { fontSize: 15, marginBottom: 10, color: '#7A7A7A' },
    contBtnTxt: { fontSize: 16, color: '#FFF' },
})
export default SignInWithNumberEnterCode;