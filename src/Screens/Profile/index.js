import React, { useState } from "react";
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";

import { Text } from "../../Common";
import { NumBackArrow, DownArrow, Avatar, FaceId } from '../../Assets/Icons';
import { Colors } from '../../Styles'

const SignInWithEmail = () => {
    const [code, setCode] = useState([])


    const handleCode = (num) => {
        let codes = code
        if (code.length < 5) {
            codes.push(num)
        }
        setCode([...code])
    }

    const deleteCode = () => {
        let codes = code
        if (codes.length > 0) {
            codes.splice(codes.length - 1, 1)
        }
        setCode([...codes])
    }



    const number = (num) => <TouchableOpacity style={styles.numberView} onPress={() => handleCode(num)}><Text style={styles.numbertxt}>{num}</Text></TouchableOpacity>


    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle={'light-content'} />
            <View style={{ alignItems: 'center', flex: 1 }}>

                <View>
                    <Image style={styles.avatar} source={Avatar} />
                    <Text style={styles.midtxt}>Charlie Smith</Text>
                    <Text style={styles.midtxtBtm}>Not me</Text>
                </View>

                <View style={styles.codeDotView}>
                    {
                        [0, 0, 0, 0].map((data, index) => {
                            return (
                                <View style={[styles.codeDot, code[index] && { backgroundColor: Colors.LIGHTPURPLE }]} />
                            )
                        })
                    }
                </View>


                <View style={styles.numbermainView}>
                    <View style={styles.numberRow}>
                        {number('1')}
                        {number('2')}
                        {number('3')}
                    </View>
                    <View style={styles.numberRow}>
                        {number('4')}
                        {number('5')}
                        {number('6')}
                    </View>
                    <View style={styles.numberRow}>
                        {number('7')}
                        {number('8')}
                        {number('9')}
                    </View>
                    <View style={[styles.numberRow, { borderBottomWidth: 0, }]}>
                        <TouchableOpacity style={styles.numberView}><Text style={[styles.numbertxt, { fontSize: 15 }]}>Forgot ?</Text></TouchableOpacity>
                        {number('0')}
                        <TouchableOpacity style={styles.numberView} onPress={() => deleteCode()}><Text style={styles.numbertxt}> <SvgXml xml={NumBackArrow} /> </Text></TouchableOpacity>
                    </View>
                </View>
            </View>




            <View style={styles.bottomView}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.btmtxt}>Create a new account</Text>
                    <SvgXml xml={DownArrow} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    avatar: { alignSelf: 'center', marginVertical: 20, height: 80, width: 80 },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 15, },
    midtxtBtm: { textAlign: 'center', color: '#998CFF', fontSize: 17, marginTop: 15 },
    codeDotView: { flexDirection: "row", justifyContent: "center", marginVertical: 41 },
    codeDot: { width: 12, height: 12, backgroundColor: '#C7C7C7', borderRadius: 30, marginHorizontal: 10, },
    btmtxt: { color: '#484848', marginBottom: 10, fontSize: 17 },
    bottomView: { margin: 10, alignItems: 'center', },
    numbermainView: { marginTop: 20, justifyContent: 'center', padding: 10, borderRadius: 20, width: 330, height: 250 },
    numberRow: { flexDirection: 'row', justifyContent: 'space-around' },
    numberView: { width: 55, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', },
    numbertxt: { fontSize: 35, color: '#484848', },



})
export default SignInWithEmail;