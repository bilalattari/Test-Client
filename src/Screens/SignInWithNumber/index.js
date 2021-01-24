import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header } from "../../Common";
import { Picker } from '@react-native-picker/picker';
import CountryPicker from 'react-native-country-picker-modal'

const SignInWithNumber = ({ navigation }) => {
    const [code, setCode] = useState();
    return (
        <SafeAreaView style={styles.main}>
            <Header navigation={navigation} />
            <StatusBar barStyle={'light-content'} />
            <View style={{ flex: 1 }}>
                <Text style={styles.midtxt}>With your phone number</Text>
                <View style={styles.numberInputView}>
                    <View style={styles.countryImage}>

                        <CountryPicker withFlag={true}
                            countryCode={'PK'}
                            containerButtonStyle={{ width: 40 }} />
                    </View>
                    <TextInput keyboardType='numeric' style={styles.input} placeholderTextColor={'#C7C7C7'} placeholder={'Phone Number'} />
                </View>
            </View>

            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => { navigation.navigate('SignInWithEmail'); }}>
                    <Text style={styles.btmtxt}>Sign in with an email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignInWithNumberEnterCode'); }} style={styles.contBtn}>
                    <Text style={styles.contBtnTxt}>Continue</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { flex: 1, height: 40, padding: 0, marginHorizontal: 10, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#C7C7C750' },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 24, marginTop: 10, },
    bottomView: {
        margin: 10,
        marginBottom : 24,
        alignItems: "center"
        // position: 'absolute', bottom: 12, left: 0, right: 0,
        // alignItems: 'center'
    },
    contBtn: { marginTop: 10, borderRadius: 10, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E32FC50' },
    btmtxt: { color: '#B9A4FF' },
    countryImage: { marginLeft: 20, borderBottomWidth: 1, borderBottomColor: '#C7C7C770', },
    contBtnTxt: { fontSize: 16, color: '#FFF' },
    numberInputView: { marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

})
export default SignInWithNumber;