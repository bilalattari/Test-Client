import React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header, CodeInput } from "../../Common";

const SignInWithNumberEnterCode = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle={'light-content'} />
            <Header navigation={navigation} />
            <View style={{ flex: 1 }}>
                <View style={{ marginVertical: 41 }}>
                    <Text style={styles.midtxt}>Enter the 6-digit code</Text>
                    <Text style={styles.midtxtLow}>We sent it to +32.475.42.42.23 </Text>
                </View>
                <CodeInput navigation={navigation} />
            </View>

            {/* <TextInput keyboardType='numeric' style={styles.input} placeholderTextColor={'#C7C7C7'} placeholder={'Phone Number'} /> */}

            <View style={styles.bottomView}>
                <TouchableOpacity>
                    <Text style={styles.btmtxt}>Send a new code if doesn't arrive in 00:60</Text>
                </TouchableOpacity>
                <Text style={styles.btmtxt}>From messages</Text>
                <Text style={styles.btmtxt}>786-986</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { padding: 0, marginHorizontal: 10, marginTop: 30, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#C7C7C750' },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 24, },
    midtxtLow: { textAlign: 'center', color: '#7A7A7A', fontSize: 14, },
    bottomView: { margin: 10, alignItems: 'center', },
    contBtn: { marginTop: 10, borderRadius: 10, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E32FC50' },
    btmtxt: { fontSize: 15, marginBottom: 10, color: '#7A7A7A' },
    contBtnTxt: { fontSize: 16, color: '#FFF' },
})
export default SignInWithNumberEnterCode;