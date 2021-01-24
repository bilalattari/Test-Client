import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header } from "../../Common";
import { BackArrow, DownArrow, Avatar, FaceId } from '../../Assets/Icons';
import { Picker } from '@react-native-picker/picker';

const SignInWithNumber = ({navigation}) => {
    const [code, setCode] = useState();
    return (
        <View style={styles.main}>
            <Header navigation={navigation}/>
            <StatusBar barStyle={'light-content'}/>
            <Text style={styles.midtxt}>With your phone number</Text>
            <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ marginLeft: 20, borderBottomWidth: 1, borderBottomColor: '#C7C7C770', }}>

                    <Picker
                        selectedValue={code}
                        dropdownIconColor={'#C7C7C7'}
                        mode='dropdown'
                        style={{ color: '#C7C7C7', height: 40, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            setCode(itemValue)
                        }
                    >
                        <Picker.Item label="+32" value="+32" />
                        <Picker.Item label="+92" value="+92" />
                    </Picker>
                </View>
                <TextInput keyboardType='numeric' style={styles.input} placeholderTextColor={'#C7C7C7'} placeholder={'Phone Number'} />
            </View>

            <View style={styles.bottomView}>
                <TouchableOpacity  onPress={() => { navigation.navigate('SignInWithEmail'); }}>
                    <Text style={styles.btmtxt}>Sign in with an email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignInWithNumberEnterCode'); }} style={styles.contBtn}>
                    <Text style={styles.contBtnTxt}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { flex: 1, height: 40, padding: 0, marginHorizontal: 10, fontSize: 18, borderBottomWidth: 2, borderBottomColor: '#C7C7C750' },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 24, marginTop: 10, },
    bottomView: { margin: 10, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', },
    contBtn: { marginTop: 10, borderRadius: 10, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E32FC50' },
    btmtxt: { color: '#B9A4FF' },
    contBtnTxt: { fontSize: 16, color: '#FFF' },
})
export default SignInWithNumber;